<template>
  <q-item class="q-ma-none q-px-none q-py-xs">
    <q-item-section>
      <div>
        <div
          class="row items-center"
          v-for="(campo, indice) in campos"
          :key="indice"
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
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Platform } from 'quasar';

  @Component({
    name: 'mostrar-campo'
  })
  export default class MostrarCampo extends Vue {
    @Prop() readonly etiqueta!: string | string[];
    @Prop({ default: false }) readonly printable!: boolean;

    public obtenerNombre(indice:number) {


      if (!Array.isArray(this.etiqueta)) {
        return 'default';
      } else {
        return this.etiqueta[indice];
    }
  }
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
}
Vue.component('mostrar-campo', MostrarCampo);
</script>
<style>
</style>
