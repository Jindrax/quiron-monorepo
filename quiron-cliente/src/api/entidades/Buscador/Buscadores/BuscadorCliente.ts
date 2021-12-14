import {Buscador} from "api/entidades/Buscador";
import {Cliente} from "quiron_classes/dist/entities";

export class BuscadorCliente extends Buscador<Cliente> {

  constructor(esquema: string[]) {
    super(esquema, {
      endpoint: "clientes",
      opciones: {
        campos_busqueda: [
          {etiqueta: 'Nombre', valor: 'nombre'},
          {etiqueta: 'Identificacion', valor: 'identificacion'}
        ],
        campos_presentacion: [
          {etiqueta: 'Nombre', valor: 'nombre'},
          {etiqueta: 'Identificacion', valor: 'identificacion'}
        ],
        opciones_busqueda: {}
      }
    }, Cliente);
  }
}
