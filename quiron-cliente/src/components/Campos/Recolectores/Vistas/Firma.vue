<template>
  <mostrar-campo :etiqueta="elemento.presentacion">
    <div v-if="elemento.signer === tipos.author">
      <img :src="dataSync[path]" alt="firma autor" style="background: silver">
    </div>
    <div v-else>
      <panel-firma class="full-width" v-model="dataSync[path]"/>
    </div>
  </mostrar-campo>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import PanelFirma from '../../../Utils/PanelFirma.vue';
import {CampoFirma, SignerType} from '@quiron/classes/dist/components/campos/edicion';
import {LocalStorage} from "quasar";

@Component({
  name: 'firma',
  components: {
    MostrarCampo,
    PanelFirma
  }
})
export default class Firma extends Vue {
  @Prop() elemento: CampoFirma;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;
  tipos = SignerType;

  created() {
    if (this.elemento.signer == SignerType.author) {
      let usuario: any = LocalStorage.getItem("usuario");
      this.$set(this.dataSync, this.path, usuario.firma);
    }
  }
}
</script>
<style></style>
