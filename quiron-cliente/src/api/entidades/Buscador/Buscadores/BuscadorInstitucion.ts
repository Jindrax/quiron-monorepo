import {Buscador} from "api/entidades/Buscador";
import {Institucion} from "quiron_classes/dist/entities";

export class BuscadorInstitucion extends Buscador<Institucion> {

  constructor(esquema: string[]) {
    super(esquema, {
      endpoint: "clientes/instituciones",
      opciones: {
        campos_busqueda: [
          {etiqueta: 'Identificacion', valor: 'identificacion'},
          {etiqueta: 'Direccion', valor: 'direccion'}
        ],
        campos_presentacion: [
          {etiqueta: 'Identificacion', valor: 'identificacion'},
          {etiqueta: 'Direccion', valor: 'direccion'}
        ],
        opciones_busqueda: {}
      }
    }, Institucion);
  }
}
