import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Origen - Destino';
  selected:boolean = false;
  activarMenu:boolean = false;
  constructor(private activatedRoute: ActivatedRoute) {}

  
  setTitle(title:string){
    this.title = title;
  }
  alternarMenu(){
   this.activarMenu = !this.activarMenu;
  }
}