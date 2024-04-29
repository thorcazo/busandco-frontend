import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linea',
  standalone: true,
  imports: [],
  templateUrl: './linea.component.html',
  styleUrl: './linea.component.css'
})
export class LineaComponent {
  @Input() linea:any;
}
