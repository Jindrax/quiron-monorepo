import {Buscador} from "api/entidades/Buscador";
import {Cliente} from "@quiron/classes/dist/entities";
import {OpcionesBuscador} from "components/Utils/Interfaces";

export class BuscadorCliente extends Buscador<Cliente> {

  constructor(esquema: string[], relations?) {
    const opciones: OpcionesBuscador = {
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
        opciones_busqueda: relations? relations : {}
      }
    }
    super(esquema, opciones, Cliente);
  };
}
