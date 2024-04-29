import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-noticia-extendida',
  standalone: true,
  imports: [],
  templateUrl: './noticia-extendida.component.html',
  styleUrl: './noticia-extendida.component.css'
})
export class NoticiaExtendidaComponent implements OnInit{
  noticia: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      const id = parseInt(this.activatedRoute.snapshot.params['id'])
  }
}
