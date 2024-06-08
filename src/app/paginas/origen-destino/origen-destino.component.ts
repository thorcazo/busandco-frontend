import { Component, OnInit } from '@angular/core';
import { BuscadorComponent } from '../../componentes/buscador/buscador.component';
import { ComunicacionService } from '../../servicios/comunicacion.service';
import { NgClass } from '@angular/common';
import { LineaDirectaComponent } from '../../componentes/linea-directa/linea-directa.component';
import { CombinacionComponent } from '../../componentes/combinacion/combinacion.component';
import { OrigenDestinoService } from '../../servicios/origen-destino.service';

@Component({
  selector: 'app-origen-destino',
  standalone: true,
  imports: [BuscadorComponent, NgClass, LineaDirectaComponent, CombinacionComponent],
  templateUrl: './origen-destino.component.html',
  styleUrl: './origen-destino.component.css'
})
export class OrigenDestinoComponent implements OnInit{
  titulo:string = 'Origen - Destino';
  expandida = false
  constructor(private comunicacionService: ComunicacionService, private origenDestinoService: OrigenDestinoService){
  }
  ngOnInit(): void {
      this.comunicacionService.setTitulo(this.titulo);
  }
  getBusqueda(){
    return this.origenDestinoService.getBusqueda()
  }
  getParadaOrigen(){
    return this.origenDestinoService.getParadaOrigen()
  }
  getParadaDestino(){
    return this.origenDestinoService.getParadaDestino()
  }
  getLineasDirectas(){
    return this.origenDestinoService.getLineasDirectas()
  }
  getCombinaciones(){
    return this.origenDestinoService.getCombinaciones()
  }
  getFecha(){
    return this.origenDestinoService.getFecha()
  }
}
