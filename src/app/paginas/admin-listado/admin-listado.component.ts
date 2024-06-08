import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminLineaComponent } from '../../componentes/admin-linea/admin-linea.component';
import { NombrelineasPipe } from '../../pipes/nombrelineas.pipe';
import { TipolineasPipe } from '../../pipes/tipolineas.pipe';
import { ComunicacionService } from '../../servicios/comunicacion.service';

@Component({
  selector: 'app-admin-listado',
  standalone: true,
  imports: [FormsModule, AdminLineaComponent, NombrelineasPipe, TipolineasPipe],
  templateUrl: './admin-listado.component.html',
  styleUrl: './admin-listado.component.css'
})
export class AdminListadoComponent {
  titulo: string = 'Líneas - Administración';
  nombre: string = '';
  tipo: string = 'Todas';
  lineas:any = [
    { id: 1, linea: 'Línea 1', descripcion: 'Descripción de la línea 1', tipo: 'Urbana' },
    { id: 2, linea: 'Línea 2', descripcion: 'Descripción de la línea 2', tipo: 'Interurbana' },
    { id: 3, linea: 'Línea 3', descripcion: 'Descripción de la línea 3', tipo: 'Urbana' },
    { id: 4, linea: 'Línea 4', descripcion: 'Descripción de la línea 4', tipo: 'Interurbana' },
    { id: 5, linea: 'Línea 5', descripcion: 'Descripción de la línea 5', tipo: 'Urbana' }
  ]
  constructor(private comunicacionService: ComunicacionService) { 
    this.comunicacionService.setTitulo(this.titulo);
  }
  borrarFiltros(){
    this.nombre = '';
    this.tipo = 'Todas';
  }

}
