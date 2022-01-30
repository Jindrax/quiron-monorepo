<template>
  <q-card>
    <q-card-section class="bg-blue-3">
      {{ elemento.presentacion }}
    </q-card-section>
    <q-card-section>
      <campo
        :data="dataSync"
        :elemento="elementoHijo"
        :key="'pc-'+elementoHijo.etiqueta"
        :path="path"
        :printable="printable"
        v-for="(elementoHijo, indice) in elemento.elementos"
      />
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import { CampoSeccion } from '@quiron/classes/dist/components/campos/edicion';

@Component({
  name: 'seccion',
  components: {
    MostrarCampo,
    'campo': () => import('../Campo.vue')
  }
})
export default class Seccion extends Vue {
  @Prop() elemento: CampoSeccion;
  @Prop() path: string;
  @Prop({ default: false }) readonly printable;
  @PropSync('data') dataSync;
}
</script>
<style></style>
