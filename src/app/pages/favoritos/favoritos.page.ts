import { Component, OnInit } from '@angular/core';
import { SitioTuristico } from '../../models/sitio.model';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: false
})
export class FavoritosPage implements OnInit {
  vistaActual: 'favoritos' | 'visitados' | 'ajustes' = 'favoritos';
  listaFavoritos: SitioTuristico[] = [];
  listaVisitados: SitioTuristico[] = [];

  modoOscuro: boolean = false;
  hapticsActivo: boolean = true;

  constructor() {}

  ngOnInit() {
    // TODO: Cargar favoritos, visitados y preferencias desde Capacitor Preferences
  }

  abrirDetalle(id: number) {
    // TODO: Navegar a /detalle/:id
  }

  quitarFavorito(event: Event, id: number) {
    event.stopPropagation();
    // TODO: Quitar sitio de favoritos en SitiosService
  }

  cambiarModoOscuro() {
    // TODO: Aplicar clase ion-palette-dark y guardar en Capacitor Preferences
  }

  cambiarHaptics() {
    // TODO: Guardar preferencia de vibración en Capacitor Preferences
  }

  confirmarLimpiarDatos() {
    // TODO: Mostrar Alert de confirmación y limpiar almacenamiento local
  }
}