import { RouteConfig } from 'vue-router';
export interface AccionHub{
  etiqueta: string,
  ruta: string
}
export interface Hub {
  id: string,
  etiqueta: string,
  icon: string,
  acciones: AccionHub[],
  ruta: string
}
export interface Ruta{
  ruta: RouteConfig,
  hub: Hub
}
