<template>
  <mostrar-campo
    :etiqueta="elemento.presentacion"
    :printable="printable"
  >
    <q-input :placeholder="elemento.presentacion" type="text" v-model="dataSync[path]"/>
  </mostrar-campo>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {Campo} from 'quiron_classes/dist/components/campos/edicion';

@Component({
  name: 'entrada-texto',
  components: {
    MostrarCampo
  }
})
export default class EntradaTexto extends Vue {
  @Prop() elemento: Campo;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;
}
</script>
<style></style>
