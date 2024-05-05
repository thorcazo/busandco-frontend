import { Component } from '@angular/core';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-paradas',
  standalone: true,
  imports: [MapaComponent],
  templateUrl: './paradas.component.html',
  styleUrl: './paradas.component.css'
})
export class ParadasComponent {

}
