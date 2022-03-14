<template>
  <q-item>
    <q-item-section>
      <img :alt="elemento.presentacion" :height="elemento.height" :src="dataSync[path]" :width="elemento.width">
      <q-item-label caption>{{ elemento.presentacion }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {CampoImagen} from '@quiron/classes/dist/components/campos/edicion';


@Component({
  name: 'imagen',
  components: {
    MostrarCampo
  }
})
export default class Imagen extends Vue {
  @Prop() elemento: CampoImagen;
  @Prop() path: string;
  @PropSync('data') dataSync;
}
</script>
<style></style>
