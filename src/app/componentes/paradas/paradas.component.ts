import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MapaComponent } from '../mapa/mapa.component';
import { HorariosService } from '../../servicios/horarios.service';

@Component({
  selector: 'app-paradas',
  standalone: true,
  imports: [MapaComponent],
  templateUrl: './paradas.component.html',
  styleUrl: './paradas.component.css'
})
export class ParadasComponent {
  constructor(private servicioHorarios: HorariosService) { }
  verHorarios() {
    this.servicioHorarios.verHorarios();
  }
  ocultarHorarios() {
    this.servicioHorarios.ocultarHorarios();
  }
  getMostrarHorarios() {
    return this.servicioHorarios.getMostrarHorarios();
  }
}
