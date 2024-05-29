import { Component } from '@angular/core';
import { LineaComponent } from '../../componentes/linea/linea.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NombrelineasPipe } from '../../pipes/nombrelineas.pipe';
import { EmpresalineasPipe } from '../../pipes/empresalineas.pipe';
import { TipolineasPipe } from '../../pipes/tipolineas.pipe';
import { LineasService } from '../../servicios/lineas.service';
import { ComunicacionService } from '../../servicios/comunicacion.service';

@Component({
  selector: 'app-lineas',
  standalone: true,
  imports: [
    LineaComponent,
    FormsModule,
    NombrelineasPipe,
    EmpresalineasPipe,
    TipolineasPipe,
  ],
  templateUrl: './lineas.component.html',
  styleUrl: './lineas.component.css',
})
export class LineasComponent {
  titulo:string = 'Líneas'
  public lineas: any;
  constructor(private lineasService: LineasService, private comunicacionService: ComunicacionService) {}

  ngOnInit() {
    this.comunicacionService.setTitulo(this.titulo)
    this.lineasService.getLineas().subscribe((json:any) => {
      this.lineas = json;
    });
    
  }
  nombre: string = '';
  empresa: string = 'Todas';
  tipo: string = 'Todas';

  borrarFlitros() {
    this.nombre = '';
    this.empresa = 'Todas';
    this.tipo = 'Todas';
  }
}
