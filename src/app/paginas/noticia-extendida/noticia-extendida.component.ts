import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-noticia-extendida',
  standalone: true,
  imports: [],
  templateUrl: './noticia-extendida.component.html',
  styleUrl: './noticia-extendida.component.css'
})
export class NoticiaExtendidaComponent implements OnInit{
  noticias:any[] = [
    {
      id: 1,
      titulo: 'Nuevas tarifas de Interbús',
      descripcion: 'Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cuerpo: 'Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
      imagen: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      titulo: 'Noticia 2',
      descripcion: 'Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
      cuerpo: 'Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
      imagen: 'https://via.placeholder.com/150'
    },
    { 
      id: 3,
      titulo: 'Noticia 3',
      descripcion: 'Cuerpo de la noticia 3 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
      cuerpo: 'Cuerpo de la noticia 3 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 3 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
      imagen: 'https://via.placeholder.com/150'
    }
  ]
  noticia:any
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.noticia = this.findNoticia(parseInt(this.activatedRoute.snapshot.params['id']))
  }

  findNoticia(id: number) {
    return this.noticias.find(noticia => noticia.id === id)
  }
}
