import {OpcionesBuscador} from "components/Utils/Interfaces";
import {Dialog} from "quasar";
import BuscadorGenerico from "components/Utils/BuscadorGenerico.vue";

export class Buscador<T> {
  esquema: string[];
  opciones: OpcionesBuscador;
  clase: new ({}) => T;


  constructor(esquema: string[], opciones: OpcionesBuscador, clase: { new({}): T }) {
    this.esquema = esquema;
    this.opciones = opciones;
    this.clase = clase;
  }

  buscar(): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      Dialog.create({
        component: BuscadorGenerico,
        endpoint: this.opciones.endpoint,
        clase: this.clase,
        opciones: this.opciones.opciones,
        persistent: true
      }).onOk((res: T) => {
        resolve(res);
      }).onCancel(() => {
        reject();
      }).onDismiss(() => {
        reject();
      })
    });
  }
}
