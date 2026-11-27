import { Component, OnInit } from '@angular/core';
import { SitioTuristico } from '../../models/sitio.model';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  standalone: false
})
export class ExplorarPage implements OnInit {
  textoBusqueda: string = '';
  categoriaSeleccionada: string = 'Todas';
  ordenPor: 'distancia' | 'valoracion' = 'distancia';
  sitiosFiltrados: SitioTuristico[] = [];

  constructor() {}

  ngOnInit() {}

  escanearQR() {
    // TODO: Escanear código QR e importar sitio turístico
  }

  aplicarFiltros() {
    // TODO: Filtrar por textoBusqueda, categoriaSeleccionada y ordenar
  }

  cambiarOrden(criterio: 'distancia' | 'valoracion') {
    this.ordenPor = criterio;
    // TODO: Reordenar sitiosFiltrados
  }

  abrirDetalle(id: number) {
    // TODO: Navegar a /detalle/:id
  }

  editarSitio(id: number) {
    // TODO: Navegar a /editar/:id
  }

  confirmarEliminar(sitio: SitioTuristico) {
    // TODO: Mostrar Alert de confirmación y eliminar sitio del servicio
  }
}