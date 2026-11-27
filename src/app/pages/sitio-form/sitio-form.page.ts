import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitio-form',
  templateUrl: './sitio-form.page.html',
  styleUrls: ['./sitio-form.page.scss'],
  standalone: false
})
export class SitioFormPage implements OnInit {
  modoEdicion: boolean = false;

  nombre: string = '';
  categoria: string = '';
  horario: string = '';
  costoEntrada: string = '';
  descripcion: string = '';
  valoracion: number = 5;
  visitado: boolean = false;
  fotoPath: string = '';

  latitud: number = 0;
  longitud: number = 0;
  precision: number = 0;
  cargandoUbicacion: boolean = false;

  constructor() {}

  ngOnInit() {
    // TODO: Revisar si llega parámetro :id para cargar datos en modoEdicion
  }

  tomarFoto() {
    // TODO: Capturar fotografía con @capacitor/camera y guardar con Filesystem
  }

  seleccionarDeGaleria() {
    // TODO: Elegir fotografía desde galería y guardar con Filesystem
  }

  obtenerCoordenadasGPS() {
    // TODO: Solicitar permisos GPS, mostrar Loading y capturar latitud, longitud y precisión
  }

  guardarSitio() {
    // TODO: Validar campos obligatorios, evitar duplicados y guardar o actualizar en SitiosService
  }
}