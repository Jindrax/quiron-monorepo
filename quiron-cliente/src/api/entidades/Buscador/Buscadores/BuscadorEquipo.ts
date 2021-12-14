import {Buscador} from "api/entidades/Buscador";
import {Equipo} from "quiron_classes/dist/entities";

export class BuscadorEquipo extends Buscador<Equipo> {

  constructor(esquema: string[]) {
    super(esquema, {
      endpoint: "equipos",
      opciones: {
        campos_busqueda: [
          {etiqueta: 'Serial', valor: 'serial'},
          {etiqueta: 'Marca', valor: 'marca'},
          {etiqueta: 'Serie', valor: 'serie'},
          {etiqueta: 'Codigo', valor: 'codigo'}
        ],
        campos_presentacion: [
          {etiqueta: 'Serial', valor: 'serial'},
          {etiqueta: 'Marca', valor: 'marca'},
          {etiqueta: 'Modelo', valor: 'modelo'},
          {etiqueta: 'Serie', valor: 'serie'},
          {etiqueta: 'Codigo', valor: 'codigo'}
        ],
        opciones_busqueda: {}
      }
    }, Equipo);
  }
}
