import { Component } from '@angular/core';
import { BuscadorComponent } from '../../componentes/buscador/buscador.component';

@Component({
  selector: 'app-origen-destino',
  standalone: true,
  imports: [BuscadorComponent],
  templateUrl: './origen-destino.component.html',
  styleUrl: './origen-destino.component.css'
})
export class OrigenDestinoComponent {
  
}
