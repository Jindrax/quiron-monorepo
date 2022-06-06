<template>
  <div class="column bg-grey-2">
    <div
      v-for="(campo, indice) in campos"
      :key="indice"
      class="col row items-center q-ma-sm"
    >
      <span style="vertical-align: center" :class="EtiquetaClase">{{ campo }}</span>
      <div :class="ContenidoClase">
        <slot :name="obtenerNombre(indice)"></slot>
      </div>
    </div>
    <q-separator class="q-my-sm" v-if="!last"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Platform} from 'quasar';

@Component({
  name: 'mostrar-campo'
})
export default class MostrarCampo extends Vue {
  @Prop() readonly etiqueta!: string | string[];
  @Prop({default: false}) readonly printable!: boolean;
  @Prop({default: false}) last:boolean;

  public get campos() {
    if (!Array.isArray(this.etiqueta)) {
      return [this.etiqueta];
    } else {
      return this.etiqueta;
    }
  }

  public get EtiquetaClase() {
    if (Platform.is.mobile) {
      return 'col-12';
    } else {
      if (this.printable) {
        return 'q-mx-sm';
      } else {
        return 'col';
      }
    }
  }

  public get ContenidoClase() {
    if (Platform.is.mobile) {
      return 'col-12';
    } else {
      return 'col';
    }
  }

  public obtenerNombre(indice: number) {
    if (!Array.isArray(this.etiqueta)) {
      return 'default';
    } else {
      return this.etiqueta[indice];
    }
  }
}
Vue.component('mostrar-campo', MostrarCampo);
</script>
<style scoped>
.grande {
  word-break: break-all;
}

.marco {
  border: 1px solid black;
}
</style>
