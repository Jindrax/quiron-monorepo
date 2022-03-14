import {Buscador} from "api/entidades/Buscador";
import {Contacto, OrdenTrabajo, Plantilla} from "@quiron/classes/dist/entities";
import Servicio from "@quiron/classes/dist/entities/Servicio";
import Servicios from "@quiron/servidor/src/modules/Servicios";

export class BuscadorOT extends Buscador<OrdenTrabajo> {

  constructor(esquema: string[]) {
    super(esquema, {
      endpoint: "ots",
      opciones: {
        campos_busqueda: [
          {etiqueta: 'ID', valor: 'id'}
        ],
        campos_presentacion: [
          {etiqueta: 'ID', valor: 'id'}
        ],
        opciones_busqueda: {}
      }
    }, OrdenTrabajo);
  }
}
