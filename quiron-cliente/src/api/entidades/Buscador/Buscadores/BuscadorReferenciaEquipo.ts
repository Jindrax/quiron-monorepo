import {Buscador} from "api/entidades/Buscador";
import {ReferenciaEquipo} from "@quiron/classes/dist/entities";

export class BuscadorReferenciaEquipo extends Buscador<ReferenciaEquipo> {

  constructor(esquema: string[]) {
    super(esquema, {
      endpoint: "referenciaEquipos",
      opciones: {
        campos_busqueda: [
          {etiqueta: 'Identificador', valor: 'identificador'},
          {etiqueta: 'Marca', valor: 'marca'}
        ],
        campos_presentacion: [
          {etiqueta: 'Identificador', valor: 'identificador'},
          {etiqueta: 'Marca', valor: 'marca'},
          {etiqueta: 'Modelo', valor: 'modelo'},
        ],
        opciones_busqueda: {}
      }
    }, ReferenciaEquipo);
  }
}
