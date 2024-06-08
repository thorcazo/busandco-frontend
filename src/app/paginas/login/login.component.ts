import { Component } from '@angular/core';
import { ComunicacionService } from '../../servicios/comunicacion.service';
import { FormsModule } from '@angular/forms';
import { AutenticacionService } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  titulo = 'Iniciar Sesión'
  username?: string;
  password?: string;
  credencialesIncorrectas: boolean = false;
  constructor(private comunicacionService: ComunicacionService, private autenticacionService: AutenticacionService) { 
    this.comunicacionService.setTitulo(this.titulo);
  }
  login(){
    console.log(this.username);
    console.log(this.password);
    if(this.username && this.password){
      this.autenticacionService.login({username: this.username, password: this.password}).subscribe(
        data => {
          console.log(data);
        }
      );
    }
    // this.autenticacionService.loginFalso();
    
    
  }
}
