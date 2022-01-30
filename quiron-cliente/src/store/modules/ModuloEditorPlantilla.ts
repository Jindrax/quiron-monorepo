import {Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {Campo, CampoSeccion} from '@quiron/classes/dist/components/campos/edicion'
import {TiposElementos} from '@quiron/classes/dist/components/campos';
import Vue from 'vue';
import store from '../index';
import {Plantilla} from "@quiron/classes/dist/entities";

interface MutacionElemento {
  path: string,
  elemento: TiposElementos
}

interface Holder {
  elemento: Campo,
  indiceFinal: number,
  terminado: boolean
}

interface ElementoContextoCallback {
  (ruta: string): Campo
}

@Module({
  name: "editor-plantilla",
  namespaced: true,
  dynamic: true,
  store
})
export default class ModuloEditorPlantilla extends VuexModule {
  public plantilaUnicaEditor: any = {};
  public editor_state_changed: boolean = false;
  public dragHolder: Holder = {
    elemento: new Campo(),
    indiceFinal: 0,
    terminado: false
  };
  public contexto: Plantilla[] = [];
  public compendio: any = {};

  public get elementoContexto(): ElementoContextoCallback {
    return ruta => {
      for (let plantilla of this.contexto) {
        const camino = ruta.split("/").reverse();
        const plantillaEncontrada = camino.pop();
        if (plantillaEncontrada == plantilla.identificador) {
          let seccion: CampoSeccion = plantilla.modelo;
          while (camino.length > 0) {
            const campoBuscado = camino.pop();
            for (let campo of seccion.elementos) {
              if (campo.etiqueta == campoBuscado) {
                if (camino.length > 0) {
                  seccion = <CampoSeccion>campo;
                  break;
                } else {
                  return campo;
                }
              }
            }
          }
        }
      }
    }
  }

  @Mutation
  public insertElementoCompendio(path: string, elemento: TiposElementos) {
    if (this.compendio[path] === undefined) {
      switch (elemento) {
        case TiposElementos['entrada-texto']:
        case TiposElementos['entrada-numerica']:
        case TiposElementos.imagen:
        case TiposElementos.firma:
        case TiposElementos.seleccion:
          Vue.set(this.compendio, path, '');
          break;
        case TiposElementos.chequeo:
          Vue.set(this.compendio, path, []);
          break;
        default:
          Vue.set(this.compendio, path, {});
      }
    }
  }

  @Mutation
  public removeElementoCompendio(path: string) {
    delete this.compendio[path];
  }

  @Mutation
  public updateElementoCompendio({path, value}: { path: string, value: any }) {
    this.compendio[path] = value;
  }

  @Mutation
  public editorStateChanged() {
    this.editor_state_changed = true;
  }

  @Mutation
  public editorStateUpdated() {
    this.editor_state_changed = false;
  }

  @Mutation
  public insertElementoEditar({path, elemento}: MutacionElemento) {
    Vue.set(this.plantilaUnicaEditor, path, elemento);
  }

  @Mutation
  public removeElementoEditar(path: string) {
    Vue.delete(this.plantilaUnicaEditor, path);
  }

  @Mutation
  public iniciarDrag({elemento, indiceFinal, terminado}: Holder) {
    this.dragHolder.elemento = elemento;
    this.dragHolder.indiceFinal = indiceFinal;
    this.dragHolder.terminado = terminado;
  }

  @Mutation
  public ubicarDrag(indice: number) {
    this.dragHolder.indiceFinal = indice;
  }

  @Mutation
  public finalizarDrag() {
    this.dragHolder.terminado = true;
  }

  @Mutation
  public setContexto(nuevoContexto: Plantilla[]) {
    this.contexto = nuevoContexto;
  }
}
