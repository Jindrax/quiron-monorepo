<template>
  <mostrar-campo
    :etiqueta="'Selector de elementos'"
  >
    <div class="row">
      <q-select
        :options="opcionesSelector"
        @keypress.enter.prevent="nuevoElemento"
        class="full-width"
        emit-value
        hint="Elegir elemento"
        map-options
        placeholder="Seleccione elemento"
        v-model="seleccion"
      />
    </div>
    <mostrar-campo :etiqueta="'Etiqueta'">
      <q-input placeholder="Etiqueta" type="text" v-model="etiqueta"/>
    </mostrar-campo>
    <br/>
    <div class="row">
      <q-btn @click="nuevoElemento" class="col-12 bg-white" label="Añadir"/>
    </div>
  </mostrar-campo>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import {Prop, Vue} from 'vue-property-decorator';
import MostrarCampo from '../MostrarCampo.vue';
import {Campo} from "quiron_classes/dist/components/campos/edicion"
import {DiccionarioTiposElementos, TiposElementos} from 'quiron_classes/dist/components/campos';
import {FabricaCampos} from "quiron_classes/dist/components/campos/edicion"

@Component({
  name: 'selector',
  components: {
    MostrarCampo
  }
})
export default class Selector extends Vue {
  @Prop() elemento: TiposElementos;
  etiqueta: string = '';
  seleccion: TiposElementos = TiposElementos['entrada-texto'];

  get opcionesSelector() {
    switch (this.elemento) {
      case TiposElementos['tabla-compuesta']:
        return [
          {
            label: DiccionarioTiposElementos['tabla-compuesta'],
            value: TiposElementos.parametro
          }
        ];
      default:
        return Object.keys(TiposElementos).filter((tipo => {
          return tipo != 'parametro';
        })).map((tipo) => {
          return {
            label: DiccionarioTiposElementos[tipo],
            value: tipo
          };
        });
    }
  }

  public prepararCampo(etiqueta: string): Campo {
    return FabricaCampos.fabricarCampoConEtiqueta(this.seleccion, etiqueta);
  }

  public nuevoElemento() {
    if (this.etiqueta == '' || this.etiqueta == undefined) {
      this.$q.notify('No se puede añadir un elemento sin una etiqueta');
    } else {
      this.$emit('nuevo', this.prepararCampo(this.etiqueta));
      this.seleccion = TiposElementos['entrada-texto'];
      this.etiqueta = '';
    }
  }
}
</script>
<style>
</style>
