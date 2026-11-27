import { Component, OnInit } from '@angular/core';
import { SitioTuristico } from '../../models/sitio.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage implements OnInit {
  totalSitios: number = 0;
  totalFavoritos: number = 0;
  totalVisitados: number = 0;
  ubicacionDisponible: boolean = false;

  resumenCategorias = [
    { nombre: 'Naturaleza', icono: 'leaf-outline', cantidad: 0 },
    { nombre: 'Gastronomía', icono: 'restaurant-outline', cantidad: 0 },
    { nombre: 'Historia', icono: 'library-outline', cantidad: 0 },
    { nombre: 'Cultura', icono: 'color-palette-outline', cantidad: 0 },
    { nombre: 'Recreación', icono: 'happy-outline', cantidad: 0 }
  ];

  sitiosCercanos: SitioTuristico[] = [];
  sitiosDestacados: SitioTuristico[] = [];

  constructor() {}

  ngOnInit() {}

  actualizarUbicacion() {
    // TODO: Obtener GPS actual y recalcular distancias con Haversine
  }

  irACategoria(categoria: string) {
    // TODO: Navegar a Explorar filtrando por categoría
  }

  irAExplorar(orden: string) {
    // TODO: Navegar a Explorar ordenado por distancia o valoración
  }

  abrirDetalle(id: number) {
    // TODO: Navegar a /detalle/:id
  }
}