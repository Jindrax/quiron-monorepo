import {Buscador} from "api/entidades/Buscador";
import {Patron} from "@quiron/classes/dist/entities";

export class BuscadorPatron extends Buscador<Patron> {

  constructor(esquema: string[]) {
    super(esquema, {
      endpoint: "patrones",
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
    }, Patron);
  }
}
