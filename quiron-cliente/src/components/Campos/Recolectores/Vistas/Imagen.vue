<template>
  <div v-if="elemento.type === 'preloaded'">
    <mostrar-campo :etiqueta="elemento.presentacion" v-if="elemento.title">
      <img :height="elemento.height" :src="elemento.data" :width="elemento.width" alt="cargado">
    </mostrar-campo>
    <img :height="elemento.height" :src="elemento.data" :width="elemento.width" alt="cargado" v-else>
  </div>
  <div v-else>
    <mostrar-campo
      :etiqueta="elemento.presentacion"
    >
      <q-file
        @input="archivoSeleccionado"
        accept="image/*"
        class="full-width"
        filled
        label="Seleccione una imagen"
        v-model="file"
      />
    </mostrar-campo>
    <mostrar-campo :etiqueta="elemento.presentacion">
      <img :height="elemento.height" :src="valorLocal" :width="elemento.width" alt="File">
    </mostrar-campo>
  </div>
</template>
<script lang="ts">
import { Component, Prop, PropSync, Vue, Watch } from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import { CampoImagen } from 'quiron_classes/dist/components/campos/edicion';


@Component({
  name: 'imagen',
  components: {
    MostrarCampo
  }
})
export default class Imagen extends Vue {
  @Prop() elemento: CampoImagen;
  @Prop() path: string;
  @Prop({ default: false }) readonly printable;
  @PropSync('data') dataSync;
  public file: File = null;
  public valorLocal: string = '';

  async archivoSeleccionado(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.valorLocal = <string>reader.result;
      console.log(reader.result);
    };
    reader.onerror = error => console.log(error);
  }

  @Watch('valorLocal')
  onValorLocalChanged() {
    this.dataSync[this.path] = this.valorLocal;
  }
}
</script>
<style></style>
