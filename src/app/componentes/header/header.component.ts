import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ComunicacionService } from '../../servicios/comunicacion.service';
import { AutenticacionService } from '../../servicios/autenticacion.service';


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
  popup:boolean = false;
  constructor(private activatedRoute: ActivatedRoute, protected comunicacionService: ComunicacionService, private autenticacionService: AutenticacionService) {}
  ngOnInit(): void {
     this.titulo =  this.comunicacionService.getTitulo()
  }
  isLogged(){
    return this.autenticacionService.isLoggedIn();
  }
  logOut(){
    this.autenticacionService.logout();
    this.activarMenu = false;
  }
  alternarMenu(){
   this.activarMenu = !this.activarMenu;
  }
  alternarPopup(){
    this.popup = !this.popup;
  }
}