import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title = '';
  selected:boolean = false;
  activarMenu:boolean = false;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data['title'];
  }
  alternarMenu(){
   this.activarMenu = !this.activarMenu;
  }
}