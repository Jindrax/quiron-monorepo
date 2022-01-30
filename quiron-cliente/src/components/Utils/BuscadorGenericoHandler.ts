import {QVueGlobals} from "quasar";
import BuscadorGenerico from "components/Utils/BuscadorGenerico.vue";
import {OpcionesBuscador, OpcionesDialogo} from "components/Utils/Interfaces";
import BuscadorClienteContacto from "components/Clientes/BuscadorClienteContacto.vue";

interface OkCallback<T> {
  (res: T): void
}

interface CancelCallback {
  (err: any): void
}

export function BuscadorGenericoHandler<T>(parent:any, clase: { new({}): T }, opciones: OpcionesBuscador, q: QVueGlobals, onOk: OkCallback<T>, onCancel: CancelCallback) {
  let opcionesLocal: OpcionesDialogo = {
    opciones_busqueda: opciones.opciones.opciones_busqueda,
    campos_busqueda: opciones.opciones.campos_busqueda,
    campos_presentacion: [...opciones.opciones.campos_busqueda, ...opciones.opciones.campos_presentacion]
  }
  q.dialog({
    component: BuscadorGenerico,
    parent: parent,
    endpoint: opciones.endpoint,
    clase: clase,
    opciones: opcionesLocal,
    persistent: true
  })
    .onOk(onOk)
    .onCancel(onCancel);
}

export function BuscadorClienteContactoHandler<T>(parent:any, q: QVueGlobals, onOk: OkCallback<T>, onCancel: CancelCallback) {
  q.dialog({
    component: BuscadorClienteContacto,
    parent: parent,
    persistent: false
  })
    .onOk(onOk)
    .onCancel(onCancel);
}
