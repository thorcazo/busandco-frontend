import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-linea-detalle',
  standalone: true,
  imports: [],
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
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.linea = this.lineas.find(linea => linea.id === parseInt(this.activatedRoute.snapshot.params['id']))
  }
}
