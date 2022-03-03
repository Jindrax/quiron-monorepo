import {Buscador} from "api/entidades/Buscador";
import {Contacto, Plantilla} from "@quiron/classes/dist/entities";
import Servicio from "@quiron/classes/dist/entities/Servicio";
import Servicios from "@quiron/servidor/src/modules/Servicios";

export class BuscadorServicio extends Buscador<Servicio> {

  constructor(esquema: string[]) {
    super(esquema, {
      endpoint: "servicios",
      opciones: {
        campos_busqueda: [
          {etiqueta: 'Identificador', valor: 'identificador'}
        ],
        campos_presentacion: [
          {etiqueta: 'Identificador', valor: 'identificador'}
        ],
        opciones_busqueda: {}
      }
    }, Servicio);
  }
}
