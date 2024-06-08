import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrigenDestinoService {
  private paradas: any;
  private paradaOrigen: any;
  private paradaDestino: any;
  private resultados: any;
  private busqueda: boolean = false;
  private lineasDirectas: any = [];
  private combinaciones: any = [];
  private tipo: string = '';
  private hora: string = '';
  private horariosOrigen: any;
  private horariosDestino: any;
  private ordenHorarioOrigen: number = 0;
  urlParadas: string = 'http://localhost:8000/usuario/busqueda';
  urlResultados: string = 'http://localhost:8000/usuario/origenDestino';
  constructor(private http: HttpClient) {}

  setBusqueda(busqueda: boolean) {
    this.busqueda = busqueda;
  }
  getBusqueda() {
    return this.busqueda;
  }
  getResultados() {
    return this.resultados;
  }
  setParadas(): Observable<any[]> {
    this.paradas = this.http.get<any[]>(this.urlParadas);
    return this.paradas;
  }
  getParadas() {
    return this.paradas;
  }
  setParadaOrigen(parada: any) {
    console.log(parada)
    this.paradaOrigen = parada;
  }
  getParadaOrigen() {
    return this.paradaOrigen;
  }
  setParadaDestino(parada: any) {
    console.log(parada)
    this.paradaDestino = parada;
  }
  getParadaDestino() {
    return this.paradaDestino;
  }
  getLineasDirectas() {
    return this.lineasDirectas;
  }
  getCombinaciones() {
    return this.combinaciones;
  }
  getTipo() {
    return this.tipo;
  }
  getHora() {
    return this.hora;
  }
  buscar(tipo: string, hora: string) {
    if(this.paradaOrigen == undefined || this.paradaDestino == undefined) 
      return 
    this.http
      .get<any[]>(
        this.urlResultados +
          '?origen=' +
          this.paradaOrigen.id +
          '&destino=' +
          this.paradaDestino.id
      )
      .subscribe((json: any) => {
        this.resultados = json;
        this.tipo = tipo;
        this.hora = hora;
        this.lineasDirectas = [];
        this.setLineasDirectas();
        this.setCombinaciones();
      });
  }
  setLineasDirectas() {
    this.resultados.forEach((linea: any) => {
      linea.direcciones.forEach((direccion: any) => {
        if (
          this.direccionContieneTrayecto(
            direccion,
            this.paradaOrigen.id,
            this.paradaDestino.id
          )
        ) {
          if (this.getHorarioOrigen(direccion) != undefined) {
            this.lineasDirectas.push({
              idLinea: linea.idLinea,
              linea: linea.linea,
              empresa: linea.empresa,
              idSublinea: linea.idSublinea,
              sublinea: linea.sublinea,
              direccion: direccion.direccion,
              paradaOrigen: this.getParadaOrigen().nombre,
              horarioOrigen: this.getHorarioOrigen(direccion),
              paradaDestino: this.getParadaDestino().nombre,
              horarioDestino: this.getHorarioDestino(direccion),
            });
          }
        }
      });
    });
  }
  setCombinaciones() {
    let direccionesOrigen: any = [];
    let direccionesDestino: any = [];
    this.resultados.forEach((linea:any) => {
      linea.direcciones.forEach((direccion:any) => {
        if(this.direccionContieneParada(direccion, this.paradaOrigen.id)){
          direccionesOrigen.push({
              idLinea: linea.idLinea,
              linea: linea.linea,
              empresa: linea.empresa,
              idSublinea: linea.idSublinea,
              sublinea: linea.sublinea,
              direccion: direccion.direccion,
              paradas: direccion.paradas
          })
        }
        if(this.direccionContieneParada(direccion, this.paradaDestino.id)){
          direccionesDestino.push({
              idLinea: linea.idLinea,
              linea: linea.linea,
              empresa: linea.empresa,
              idSublinea: linea.idSublinea,
              sublinea: linea.sublinea,
              direccion: direccion.direccion,
              paradas: direccion.paradas
          })
        }
      });
    });
  


    direccionesOrigen.forEach((lineaOrigen:any) => {
      let paradaOrigen = this.findParadaByDireccion(lineaOrigen, this.paradaOrigen.id);
      direccionesDestino.forEach((lineaDestino:any) => {
        let paradaDestino = this.findParadaByDireccion(lineaDestino, this.paradaDestino.id);
        lineaOrigen.paradas.forEach((paradaLineaOrigen:any) => {
          lineaDestino.paradas.forEach((paradaLineaDestino:any) => {

            if(paradaLineaOrigen.idParada != this.paradaOrigen.id && paradaLineaOrigen.idParada != this.paradaDestino.id){
              if(paradaLineaOrigen.idParada == paradaLineaDestino.idParada && paradaLineaOrigen.orden > paradaOrigen.orden && paradaLineaDestino.orden < paradaDestino.orden){
                
              }
            }
          })
        })
      })
    });
  }
  findParadaByDireccion(direccion:any, idParada:number) {
    return direccion.paradas.find((parada: any) => parada.idParada == idParada);
  }
  direccionContieneParada(direccion: any, idParada: number) {
    let contieneParada = false;
    direccion.paradas.forEach((parada: any) => {
      if (parada.idParada == idParada) {
        contieneParada = true;
      }
    });
    return contieneParada;
  }
  direccionContieneTrayecto(
    direccion: any,
    idParadaOrigen: number,
    idParadaDestino: number
  ) {
    let contieneOrigen = false;
    let contieneDestino = false;
    let ordenOrigen = 0;
    let ordenDestino = 0;

    direccion.paradas.forEach((parada: any) => {
      if (parada.idParada == idParadaOrigen) {
        contieneOrigen = true;
        ordenOrigen = parada.orden;
      }
      if (parada.idParada == idParadaDestino) {
        contieneDestino = true;
        ordenDestino = parada.orden;
      }
    });
    return contieneOrigen && contieneDestino && ordenOrigen < ordenDestino;
  }
  getHorarioOrigen(direccion: any) {
    let paradaOrigen = this.getParadaOrigen();
    let horarios: any = [];
    direccion.paradas.forEach((parada: any) => {
      if (parada.idParada == paradaOrigen.id) {
        parada.horario.forEach((horario: any) => {
          if (horario.tipo == this.getTipo()) {
            horarios.push(horario);
          }
        });
      }
    });
    this.horariosOrigen = this.sortByTime(horarios)
    let horario = this.horariosOrigen.filter((horario: any) => {
      const horarioTime = this.parseTime(horario.hora);
      const horaBusqueda = this.parseTime(this.getHora());

      return (
        horarioTime.hora > horaBusqueda.hora ||
        (horarioTime.hora == horaBusqueda.hora &&
          horarioTime.minuto > horaBusqueda.minuto)
      );
    })[0];

    if (horario == undefined) return undefined;
    else {
      
      this.ordenHorarioOrigen = this.horariosOrigen.indexOf(horario) + 1;
      return horario.hora;
    }
  }
  getHorarioDestino(direccion: any) {
    let horarios: any = [];
    direccion.paradas.forEach((parada: any) => {
      if (parada.idParada == this.paradaDestino.id) {
        parada.horario.forEach((horario: any) => {
          if (horario.tipo == this.getTipo()) {
            horarios.push(horario);
          }
        });
      }
    });
    this.horariosDestino = this.sortByTime(horarios)
    return this.horariosDestino[this.ordenHorarioOrigen - 1].hora;
  }
  setOrdenHorarioOrigen(orden:number) {
    this.ordenHorarioOrigen = orden
  }
  getOrdenHorarioOrigen() {
    return this.ordenHorarioOrigen
  }
  parseTime(timeString: string): { hora: number; minuto: number } {
    const [horaString, minutoString] = timeString.split(':');
    return {
      hora: parseInt(horaString),
      minuto: parseInt(minutoString),
    };
  }
  sortByTime(array: any[]): any[] {
    return array.sort((a: any, b: any) => {
      const timeA = this.parseTime(a.hora);
      const timeB = this.parseTime(b.hora);
  
      if (timeA.hora < timeB.hora) {
        return -1;
      } else if (timeA.hora > timeB.hora) {
        return 1;
      } else {
        if (timeA.minuto < timeB.minuto) {
          return -1;
        } else if (timeA.minuto > timeB.minuto) {
          return 1;
        } else {
          return 0; // Tiempos iguales
        }
      }
    });
  }
}
