<template>
  <div class="column">
    <mostrar-campo class="col-auto" etiqueta="Elemento">
      <q-select
        v-model="seleccion"
        :options="opcionesSelector"
        class="full-width"
        emit-value
        hint="Elegir elemento"
        map-options
        placeholder="Seleccione elemento"
        @keypress.enter.prevent="nuevoElemento"
      />
    </mostrar-campo>
    <mostrar-campo :etiqueta="'Etiqueta'" class="col-auto">
      <q-input v-model="etiqueta" placeholder="Etiqueta" type="text"/>
    </mostrar-campo>
    <q-btn class="col-auto advance-btn" label="Añadir" @click="nuevoElemento"/>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import {Prop, Vue} from 'vue-property-decorator';
import MostrarCampo from '../MostrarCampo.vue';
import {Campo, FabricaCampos} from "@quiron/classes/dist/components/campos/edicion"
import {DiccionarioTiposElementos, TiposElementos} from '@quiron/classes/dist/components/campos';

@Component({
  name: 'selector',
  components: {
    MostrarCampo
  }
})
export default class Selector extends Vue {
  @Prop() elemento: TiposElementos;
  @Prop({default: () => []}) reducido: TiposElementos[];
  etiqueta: string = '';
  seleccion: TiposElementos = TiposElementos['entrada-texto'];

  get opcionesSelector() {
    if (this.reducido.length > 0) {
      return this.reducido.map(tipo => {
        return {
          label: DiccionarioTiposElementos[tipo],
          value: tipo
        };
      })
    } else {
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
