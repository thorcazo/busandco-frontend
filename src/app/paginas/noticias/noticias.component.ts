import { Component, OnInit } from '@angular/core';
import { NoticiaComponent } from '../../componentes/noticia/noticia.component';
import { Router } from '@angular/router';
import { ComunicacionService } from '../../servicios/comunicacion.service';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [NoticiaComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit{
  titulo:string = 'Noticias'
  constructor(private router: Router, private comunicacionService: ComunicacionService) { }

    noticias:any[] = [
      {
        id: 1,
        titulo: 'Nuevas tarifas de Interbús',
        descripcion: 'Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cuerpo: 'Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi Cuerpo de la noticia 1 lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imagen: 'https://via.placeholder.com/150',
        fecha: '25/05/2021'
      },
      {
        id: 2,
        titulo: 'Noticia 2',
        descripcion: 'Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
        cuerpo: 'Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
        imagen: 'https://via.placeholder.com/150',
        fecha: '25/05/2021'
      },
      { 
        id: 3,
        titulo: 'Noticia 3',
        descripcion: 'Cuerpo de la noticia 3 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
        cuerpo: 'Cuerpo de la noticia 3 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi. Cuerpo de la noticia 3 lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, varius mi nec, ultricies turpis. Nulla facilisi.',
        imagen: 'https://via.placeholder.com/150',
        fecha: '25/05/2021'
      }
    ]
  
  ngOnInit(): void {
      this.comunicacionService.setTitulo(this.titulo)
  }
}
