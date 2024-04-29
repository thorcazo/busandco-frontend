import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
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
}
