import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParadasComponent } from '../../componentes/paradas/paradas.component';
import { HorariosComponent } from '../../componentes/horarios/horarios.component';
import { MapaComponent } from '../../componentes/mapa/mapa.component';
import { HorariosService } from '../../servicios/horarios.service';


@Component({
  selector: 'app-linea-detalle',
  standalone: true,
  imports: [ParadasComponent, HorariosComponent, MapaComponent],
  templateUrl: './linea-detalle.component.html',
  styleUrl: './linea-detalle.component.css'
})
export class LineaDetalleComponent implements OnInit{
  lineas = [
    { id: 1, nombre: 'Linea 44', descripcion: 'Espinardo - Murcia - Alcantarilla', empresa: 'TMPMurcia', tipo: 'interurbana'},
    { id: 2, nombre: 'Linea 2', descripcion: 'Descripción de la línea 2', empresa: 'TMPMurcia', tipo: 'interurbana'},
    { id: 3, nombre: 'Linea 3', descripcion: 'Descripción de la línea 3', empresa: 'Transportes de Murcia', tipo: 'urbana'},
    { id: 4, nombre: 'Linea 4', descripcion: 'Descripción de la línea 4', empresa: 'Movibus', tipo: 'interurbana'},
    { id: 5, nombre: 'Linea 5', descripcion: 'Descripción de la línea 5', empresa: 'TMPMurcia', tipo: 'interurbana'},
    { id: 6, nombre: 'Linea 6', descripcion: 'Descripción de la línea 6', empresa: 'Transportes de Murcia', tipo: 'urbana'},
    { id: 7, nombre: 'Linea 7', descripcion: 'Descripción de la línea 7', empresa: 'Movibus', tipo: 'urbana'},
    { id: 8, nombre: 'Linea 8', descripcion: 'Descripción de la línea 8', empresa: 'TMPMurcia', tipo: 'interurbana'},
    { id: 9, nombre: 'Linea 9', descripcion: 'Descripción de la línea 9', empresa: 'Transportes de Murcia', tipo: 'urbana'},
    { id: 10, nombre: 'Linea 10', descripcion: 'Descripción de la línea 10', empresa: 'Movibus', tipo: 'interurbana'}
  ];

  linea:any
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private servicioHorarios: HorariosService) { }

  recorrido = [
    {
      latitud: 37.983066263948956,
      longitud: -1.1308138313762457,
    },
    {
      latitud: 37.983203793948604,
      longitud: -1.1316559254183807,
    },
    {
      latitud: 37.98654180320139,
      longitud: -1.1320955533467343,
    },
    {
      latitud: 37.98905566172619,
      longitud: -1.1320718180355458,
    },
    {
      latitud: 37.99158219663957,
      longitud: -1.1308039790049915,
    },
    {
      latitud: 37.99158219665446,
      longitud: -1.1303905184122143,
    },
    {
      latitud: 37.9920754523187,
      longitud: -1.1296356683790232,
    },
    {
      latitud: 37.99264045019088,
      longitud: -1.1297494648491988,
    },
    {
      latitud: 37.99298124045659,
      longitud: -1.1306863892526378,
    },
   
  ];
  paradas = [
    {
      latitud: 37.983066263948956,
      longitud: -1.1308138313762457,
      nombre: 'Parada 1',
    },
    {
      latitud: 37.98654180320139,
      longitud: -1.1320955533467343,
      nombre: 'Parada 2',
    },
    {
      latitud: 37.99158219665446,
      longitud: -1.1303905184122143,
      nombre: 'Parada 3',
    }, {
      latitud: 37.995079756139944,
      longitud: -1.1330837019704052,
      nombre: 'Parada 4',
    },
    {
      latitud: 37.995079756139944,
      longitud: -1.1330837019704052,
      nombre: 'Parada 4',
    },
  ]

  ngOnInit(): void {
    this.linea = this.lineas.find(linea => linea.id === parseInt(this.activatedRoute.snapshot.params['id']))
    this.ocultarHorarios();
  }
  ocultarHorarios() {
    this.servicioHorarios.ocultarHorarios();
  }
  getMostrarHorarios() {
    return this.servicioHorarios.getMostrarHorarios();
  }
}
