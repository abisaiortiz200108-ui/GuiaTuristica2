export interface SitioTuristico {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  valoracion: number;
  horario: string;
  costoEntrada: string;
  favorito: boolean;
  visitado: boolean;
  fotoPath: string;
  latitud: number;
  longitud: number;
  precision: number;
  fechaRegistro: string;
  distanciaKm?: number;
}