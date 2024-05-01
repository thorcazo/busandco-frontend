import { Component } from '@angular/core';
import { LineaComponent } from '../../componentes/linea/linea.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NombrelineasPipe } from '../../pipes/nombrelineas.pipe';
import { EmpresalineasPipe } from '../../pipes/empresalineas.pipe';
import { TipolineasPipe } from '../../pipes/tipolineas.pipe';

@Component({
  selector: 'app-lineas',
  standalone: true,
  imports: [LineaComponent, FormsModule, NombrelineasPipe, EmpresalineasPipe, TipolineasPipe],
  templateUrl: './lineas.component.html',
  styleUrl: './lineas.component.css'
})
export class LineasComponent {
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
  nombre:string = '';
  empresa:string = 'Todas';
  tipo:string = 'Todas';
  
  borrarFlitros(){
    this.nombre = '';
    this.empresa = 'Todas';
    this.tipo = 'Todas';
  }
}
