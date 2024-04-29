import { Component } from '@angular/core';
import { TarjetaContactoComponent } from '../../componentes/tarjeta-contacto/tarjeta-contacto.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [TarjetaContactoComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  empresas = [
    {
      id: 1,
      nombre: 'TMP Murcia',
      direccion: 'Calle de la Fama, 3, 30003 Murcia',
      telefono: '968 21 21 21',
      email: 'tmpmurcia@gmail.com',
      web: 'www.tmpmurcia.com',
      logo: '../../../assets/imagenes/logoTMP.png'
    },
    {
      id: 2,
      nombre: 'TMurcia',
      direccion: 'Calle de la Fama, 3, 30003 Murcia',
      telefono: '968 21 21 21',
      email: 'tmurcia@gmail.com',
      web: 'www.tmurcia.com',
      logo: '../../../assets/imagenes/logoTMurcia.png'
    },
    {
      id: 3,
      nombre: 'Movibus',
      direccion: 'Calle de la Fama, 3, 30003 Murcia',
      telefono: '968 21 21 21',
      email: 'tmpmurcia@gmail.com',
      web: 'www.tmpmurcia.com',
      logo: '../../../assets/imagenes/logoMovibus.jpg'
    },
  ]
}
