import { Component } from '@angular/core';
import { LineaComponent } from '../../componentes/linea/linea.component';

@Component({
  selector: 'app-lineas',
  standalone: true,
  imports: [LineaComponent],
  templateUrl: './lineas.component.html',
  styleUrl: './lineas.component.css'
})
export class LineasComponent {
  lineas = [
    { id: 1, nombre: 'Linea 44', descripcion: 'Espinardo - Murcia - Alcantarilla', empresa: 'TMP Murcia' },
    { id: 2, nombre: 'Linea 2', descripcion: 'Descripción de la línea 2', empresa: 'Empresa B' },
    { id: 3, nombre: 'Linea 3', descripcion: 'Descripción de la línea 3', empresa: 'Empresa C' },
    { id: 4, nombre: 'Linea 4', descripcion: 'Descripción de la línea 4', empresa: 'Empresa D' },
    { id: 5, nombre: 'Linea 5', descripcion: 'Descripción de la línea 5', empresa: 'Empresa E' },
    { id: 6, nombre: 'Linea 6', descripcion: 'Descripción de la línea 6', empresa: 'Empresa F' },
    { id: 7, nombre: 'Linea 7', descripcion: 'Descripción de la línea 7', empresa: 'Empresa G' },
    { id: 8, nombre: 'Linea 8', descripcion: 'Descripción de la línea 8', empresa: 'Empresa H' },
    { id: 9, nombre: 'Linea 9', descripcion: 'Descripción de la línea 9', empresa: 'Empresa I' },
    { id: 10, nombre: 'Linea 10', descripcion: 'Descripción de la línea 10', empresa: 'Empresa J' }
  ];
  
}
