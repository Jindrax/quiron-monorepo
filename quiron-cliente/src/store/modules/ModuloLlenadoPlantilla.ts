import Vue from 'vue';
import {Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {TiposElementos} from '@quiron/classes/dist/components/campos';
import store from '../index';
import {Formulario} from "@quiron/classes/dist/entities";

@Module({
  name: "llenado-plantilla",
  namespaced: true,
  dynamic: true,
  store
})
export default class ModuloLlenadoPlantilla extends VuexModule {
  public compendio: Record<string, any> = {};
  public impresion: Formulario = new Formulario({});

  @Mutation
  public nuevoCompendio() {
    this.compendio = {};
  }

  @Mutation
  public insertarElemento({path, elemento}: { path: string, elemento: TiposElementos }) {
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
        case TiposElementos.tabla:
          Vue.set(this.compendio, path, []);
          break;
        default:
          Vue.set(this.compendio, path, {});
          break;
      }
    }
  }

  @Mutation
  public removerElemento(path: string) {
    Vue.delete(this.compendio, path);
  }

  @Mutation
  public asignarImpresion(form: Formulario) {
    this.impresion = form;
  }

}
