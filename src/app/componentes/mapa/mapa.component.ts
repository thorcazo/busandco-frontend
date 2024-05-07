import { Component, Inject, Input, OnInit, input } from '@angular/core';
import * as L from 'leaflet';
import  'leaflet/dist/leaflet.css';


@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css',
})
export class MapaComponent implements OnInit {
  
  constructor() {

   }
  ngOnInit(): void {
    this.configurarMapa();
  }

  mapa: any;
  id = 'mapa1';
  @Input() paradas: any;
  @Input() recorrido: any;
  

  configurarMapa() {
   
    this.mapa = L.map(this.id).setView([37.9815, -1.1277], 14);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.mapa);
    this.recorrido.forEach((punto:any, index:any) => {
      if (index > 0) {
        const puntoAnterior = this.recorrido[index - 1];
        const puntoActual = punto;
        const ruta = L.polyline([
          [puntoAnterior.latitud, puntoAnterior.longitud],
          [puntoActual.latitud, puntoActual.longitud]
        ], {color: '#06D6A0', weight: 5}).addTo(this.mapa);
      }
    });
    
    this.paradas.forEach((parada:any) => {
      L.marker([parada.latitud, parada.longitud]).addTo(this.mapa)
      .bindPopup(`<b>${parada.nombre}</b>`)
    });
    
  }
}
