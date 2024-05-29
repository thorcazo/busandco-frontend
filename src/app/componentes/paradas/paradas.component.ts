import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MapaComponent } from '../mapa/mapa.component';
import { ParadaService } from '../../servicios/parada.service';
import { RouterLink, RouterModule } from '@angular/router';
import { LineaDetalleService } from '../../servicios/linea-detalle.service';
import { ComunicacionService } from '../../servicios/comunicacion.service';

@Component({
  selector: 'app-paradas',
  standalone: true,
  imports: [MapaComponent, RouterModule],
  templateUrl: './paradas.component.html',
  styleUrl: './paradas.component.css'
})
export class ParadasComponent {
  constructor(private servicioComunicacion: ComunicacionService, private servicioLineaDetalle: LineaDetalleService) { }
  @Input() paradas: any;
  @Input() recorrido: any;

  verHorarios() {
    
  }
  ocultarHorarios() {
    this.servicioComunicacion.ocultarHorarios();
  }
  getMostrarHorarios() {
    return this.servicioComunicacion.getMostrarHorarios();
  }
  setParada(parada:any) {
    this.servicioLineaDetalle.setParada(parada);
    this.servicioComunicacion.verHorarios();
  }

}
