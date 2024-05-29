import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ComunicacionService } from '../../servicios/comunicacion.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  titulo = '';
  selected:boolean = false;
  activarMenu:boolean = false;
  constructor(private activatedRoute: ActivatedRoute, protected comunicacionService: ComunicacionService) {}
  ngOnInit(): void {
     this.titulo =  this.comunicacionService.getTitulo()
  }
  
  alternarMenu(){
   this.activarMenu = !this.activarMenu;
  }
}