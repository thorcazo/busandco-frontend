import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incidencia',
  standalone: true,
  imports: [],
  templateUrl: './incidencia.component.html',
  styleUrl: './incidencia.component.css'
})
export class IncidenciaComponent {
  @Input() incidencia: any;
  getLineasLength(){
    console.log(this.incidencia.lineas.length)
    return this.incidencia.lineas.length
  }
}
