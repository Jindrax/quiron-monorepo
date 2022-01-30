<template>
  <mostrar-campo
    :etiqueta="elemento.presentacion"
    :printable="printable"
  >
    <p class="text-justify vertical-middle">{{ elemento.informacion }}</p>
  </mostrar-campo>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue, Watch} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {Campo} from '@quiron/classes/dist/components/campos/edicion';
import {CampoInformacion} from "@quiron/classes/dist/components/campos/edicion/elementos/CampoInformacion";

@Component({
  name: 'informacion',
  components: {
    MostrarCampo
  }
})
export default class Informacion extends Vue {
  @Prop() elemento: CampoInformacion;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;

  mounted() {
    this.dataSync[this.path] = this.elemento.informacion;
  }
}
</script>
<style></style>
