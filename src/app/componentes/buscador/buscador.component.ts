import { Component, Input, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  @Input() paradas:any
  origen:any
  destino:any
  fecha:any
  hora:any
  
  empresas = [
    {
      id: 1,
      nombre: 'TMP Murcia',
      descripcion: 'Descripción de la empresa 1'
    },
    {
      id: 2,
      nombre: 'TMurcia',
      descripcion: 'Descripción de la empresa 2'
    },
    {
      id: 3,
      nombre: 'Movibus',
      descripcion: 'Descripción de la empresa 3'
    }
  ]
  borrarFiltros(){
    this.origen = ''
    this.destino = ''
    this.fecha = ''
    this.hora = ''
  }
}
