import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {
 @Input() noticia:any
  private router = inject(Router)

  leerNoticia(id: number, noticia: any) {
    console.log('Noticia:', noticia)
    this.router.navigate(['/noticia', id])
  } 
}

