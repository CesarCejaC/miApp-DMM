import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] =[
    {
      icon: 'american-football',
      name: 'Acción',
      redirectTo: '/accion'
    },
    {
      icon: 'aperture-outline',
      name: 'Alerta',
      redirectTo: '/alert'
    },
    {
      icon: 'aperture-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'aperture-outline',
      name: 'Botones',
      redirectTo: '/boton'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
