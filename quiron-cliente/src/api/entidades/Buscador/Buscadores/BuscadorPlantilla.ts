import {Buscador} from "api/entidades/Buscador";
import {Contacto, Plantilla} from "@quiron/classes/dist/entities";

export class BuscadorPlantilla extends Buscador<Plantilla> {

  constructor(esquema: string[]) {
    super(esquema, {
      endpoint: "plantilla",
      opciones: {
        campos_busqueda: [
          {etiqueta: 'Identificador', valor: 'identificador'},
          {etiqueta: 'Serial', valor: 'serial'}
        ],
        campos_presentacion: [
          {etiqueta: 'Identificador', valor: 'identificador'},
          {etiqueta: 'Serial', valor: 'serial'},
          {etiqueta: 'Version', valor: 'version'}
        ],
        opciones_busqueda: {}
      }
    }, Plantilla);
  }
}
