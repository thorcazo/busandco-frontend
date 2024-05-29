import { Component, OnInit } from '@angular/core';
import { BuscadorComponent } from '../../componentes/buscador/buscador.component';
import { ComunicacionService } from '../../servicios/comunicacion.service';

@Component({
  selector: 'app-origen-destino',
  standalone: true,
  imports: [BuscadorComponent],
  templateUrl: './origen-destino.component.html',
  styleUrl: './origen-destino.component.css'
})
export class OrigenDestinoComponent implements OnInit{
  titulo:string = 'Origen - Destino'
  paradas = [
    
  ]
  constructor(private comunicacionService: ComunicacionService){}
  ngOnInit(): void {
      this.comunicacionService.setTitulo(this.titulo)
  }
}
