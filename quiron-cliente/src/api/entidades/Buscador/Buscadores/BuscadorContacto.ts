import {Buscador} from "api/entidades/Buscador";
import {Contacto} from "@quiron/classes/dist/entities";

export class BuscadorContacto extends Buscador<Contacto> {

  constructor(esquema: string[]) {
    super(esquema, {
      endpoint: "clientes/contactos",
      opciones: {
        campos_busqueda: [
          {etiqueta: 'Nombres', valor: 'nombres'},
          {etiqueta: 'Apellidos', valor: 'apellidos'},
          {etiqueta: 'Identificacion', valor: 'identificacion'}
        ],
        campos_presentacion: [
          {etiqueta: 'Nombres', valor: 'nombres'},
          {etiqueta: 'Apellidos', valor: 'apellidos'},
          {etiqueta: 'Identificacion', valor: 'identificacion'}
        ],
        opciones_busqueda: {}
      }
    }, Contacto);
  }
}
