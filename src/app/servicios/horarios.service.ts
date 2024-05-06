import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  mostrarHorarios:boolean = true;
  constructor() { }
  verHorarios() {
    this.mostrarHorarios = true;
  }
  ocultarHorarios() {
    this.mostrarHorarios = false;
  }
  getMostrarHorarios() {
    return this.mostrarHorarios;
  }
}
