<template>
  <q-item class="bg-grey-2 q-my-xs">
    <q-item-section>
      <div>
        <div
          v-for="(campo, indice) in campos"
          :key="indice"
          class="row items-center"
        >
          <div :class="EtiquetaClase">{{ campo }}</div>
          <div :class="ContenidoClase">
            <slot :name="obtenerNombre(indice)"></slot>
          </div>
        </div>
      </div>
    </q-item-section>
  </q-item>
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
</style>
