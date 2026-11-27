import { Component, OnInit } from '@angular/core';
import { SitioTuristico } from '../../models/sitio.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false
})
export class DetallePage implements OnInit {
  sitio: SitioTuristico | null = null;
  distanciaActualKm: number | null = null;
  qrDataUrl: string = '';

  constructor() {}

  ngOnInit() {
    // TODO: Leer parámetro :id de la ruta y consultar el sitio en SitiosService
  }

  alternarFavorito() {
    // TODO: Cambiar estado favorito y ejecutar Haptics si está activo
  }

  abrirEnGoogleMaps() {
    // TODO: Abrir coordenadas en Google Maps
  }

  compartirSitio() {
    // TODO: Usar @capacitor/share para compartir datos del sitio
  }

  mostrarQR() {
    // TODO: Generar código QR con los datos y coordenadas del sitio
  }

  programarRecordatorio() {
    // TODO: Programar notificación local para visitar el sitio
  }

  editarSitio() {
    // TODO: Navegar a /editar/:id
  }

  confirmarEliminar() {
    // TODO: Mostrar Alert de confirmación, eliminar sitio y volver atrás
  }
}