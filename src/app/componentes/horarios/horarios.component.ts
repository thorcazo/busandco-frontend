import { Component, Input } from '@angular/core';
import { HorariosService } from '../../servicios/horarios.service';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [MapaComponent],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.css'
})
export class HorariosComponent {
  horarios = [
    { id: 1, hora: '08:00', tipo: 'laborable' },
    { id: 2, hora: '09:00', tipo: 'laborable' },
    { id: 3, hora: '10:00', tipo: 'laborable' },
    { id: 4, hora: '11:00', tipo: 'laborable' },
    { id: 5, hora: '12:00', tipo: 'laborable' },
    { id: 6, hora: '13:00', tipo: 'laborable' },
    { id: 7, hora: '14:00', tipo: 'laborable' },
    { id: 8, hora: '15:00', tipo: 'laborable' },
    { id: 9, hora: '16:00', tipo: 'laborable' },
    { id: 10, hora: '17:00', tipo: 'laborable' },
    { id: 11, hora: '18:00', tipo: 'laborable' },
    { id: 12, hora: '19:00', tipo: 'laborable' },
    { id: 13, hora: '20:00', tipo: 'laborable' },
    { id: 14, hora: '21:00', tipo: 'laborable' },
    { id: 15, hora: '22:00', tipo: 'laborable' },
    { id: 16, hora: '23:00', tipo: 'laborable' },
    { id: 17, hora: '00:00', tipo: 'sabado' },
    { id: 18, hora: '01:00', tipo: 'sabado' },
    { id: 19, hora: '02:00', tipo: 'festivo' },
    { id: 20, hora: '03:00', tipo: 'sabado' }
  ];
  @Input() paradas:any;
  @Input() recorrido:any;

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
