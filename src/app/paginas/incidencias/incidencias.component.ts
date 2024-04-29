import { Component } from '@angular/core';
import { IncidenciaComponent } from '../../componentes/incidencia/incidencia.component';

@Component({
  selector: 'app-incidencias',
  standalone: true,
  imports: [IncidenciaComponent],
  templateUrl: './incidencias.component.html',
  styleUrl: './incidencias.component.css'
})
export class IncidenciasComponent {
  incidencias: any[] = [
    {
      id: 1,
      titulo: 'Error de conexión',
      descripcion: 'Se produjo un error al intentar establecer la conexión con el servidor. lorem ipsum dolor sit amet, consectetur adipiscing elit.Se produjo un error al intentar establecer la conexión con el servidor. lorem ipsum dolor sit amet, consectetur adipiscing elit.Se produjo un error al intentar establecer la conexión con el servidor. lorem ipsum dolor sit amet, consectetur adipiscing elit.Se produjo un error al intentar establecer la conexión con el servidor. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      lineasAfectadas: ['L13', 'C2', 'L45', 'C12', 'L78']
    },
    {
      id: 2,
      titulo: 'Error de autenticación',
      descripcion: 'El usuario no está autorizado para acceder a esta funcionalidad. lorem ipsum dolor sit amet, consectetur adipiscing elit.Se produjo un error al intentar establecer la conexión con el servidor. lorem ipsum dolor sit amet, consectetur adipiscing elit.Se produjo un error al intentar establecer la conexión con el servidor. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      lineasAfectadas: ['L13', 'C2', 'C12', 'L78']
    },
    {
      id: 3,
      titulo: 'Error de validación',
      descripcion: 'Los datos ingresados no cumplen con los requisitos de validación.lorem ipsum dolor sit amet, consectetur adipiscing elit.Se produjo un error al intentar establecer la conexión con el servidor. lorem ipsum dolor sit amet, consectetur adipiscing elit.Se produjo un error al intentar establecer la conexión con el servidor. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      lineasAfectadas: ['L13', 'C2', 'L45', 'L78']
    }
  ];
}
