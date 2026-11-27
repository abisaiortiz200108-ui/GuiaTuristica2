import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  standalone: false
})
export class BienvenidaPage {
  caracteristicas = [
    { icono: 'compass-outline', texto: 'Explora' },
    { icono: 'heart-outline', texto: 'Guarda favoritos' },
    { icono: 'navigate-outline', texto: 'Lugares cercanos' }
  ];

  constructor(private router: Router) {}

  irAInicio() {
    // replaceUrl evita que el botón "atrás" regrese a la bienvenida
    this.router.navigateByUrl('/tabs/inicio', { replaceUrl: true });
  }
}