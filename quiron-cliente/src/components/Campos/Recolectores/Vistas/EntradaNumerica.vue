<template>
  <mostrar-campo
    :etiqueta="elemento.presentacion"
    :printable="printable"
  >
    <q-input :placeholder="elemento.presentacion"
             type="number"
             v-model="dataSync[path]"
             :rules="[validar]"
    />
  </mostrar-campo>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue, Watch} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {CampoEntradaNumerica} from '@quiron/classes/dist/components/campos/edicion';

@Component({
  name: 'entrada-numerica',
  components: {
    MostrarCampo
  }
})
export default class EntradaNumerica extends Vue {
  @Prop() elemento: CampoEntradaNumerica;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;

  validar(valor: number) {
    if (this.elemento.rango) {
      if (valor < this.elemento.rangoInferior) {
        return "Inferior al rango permitido";
      }
      if (valor > this.elemento.rangoSuperior) {
        return "Superior al rango permitido";
      }
      return true;
    } else {
      return true;
    }
  }
}
</script>
<style></style>
