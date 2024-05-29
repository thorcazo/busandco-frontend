import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunicacionService } from '../../servicios/comunicacion.service';

@Component({
  selector: 'app-noticia-extendida',
  standalone: true,
  imports: [],
  templateUrl: './noticia-extendida.component.html',
  styleUrl: './noticia-extendida.component.css'
})
export class NoticiaExtendidaComponent implements OnInit{
  titulo:string = 'Noticias'
  noticias:any[] = [
    {
      id: 1,
      titulo: 'Nuevas tarifas de Interbús',
      descripcion: 'Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cuerpo: 'Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
      imagen: '../../../assets/imagenes/BUS_NoticiaAmpliada.jpg',
      fecha: '25/05/2021'
    },
    {
      id: 2,
      titulo: 'Noticia 2',
      descripcion: 'Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
      cuerpo: 'Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
      imagen: 'https://via.placeholder.com/150',
      fecha: '25/05/2021'
    },
    { 
      id: 3,
      titulo: 'Noticia 3',
      descripcion: 'Cuerpo de la noticia 3 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
      cuerpo: 'Cuerpo de la noticia 3 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 3 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
      imagen: 'https://via.placeholder.com/150',
      fecha: '25/05/2021'
    }
  ]
  noticia:any
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private comunicacionService: ComunicacionService) { }

  ngOnInit() {
    this.comunicacionService.setTitulo(this.titulo)
      this.noticia = this.findNoticia(parseInt(this.activatedRoute.snapshot.params['id']))
  }

  findNoticia(id: number) {
    return this.noticias.find(noticia => noticia.id === id)
  }
}
