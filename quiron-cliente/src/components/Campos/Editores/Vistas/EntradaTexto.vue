<template>
  <q-item class="q-ma-none q-pa-none">
    <q-item-section class="q-pa-none">
      <mostrar-campo :etiqueta="'Etiqueta'">
        {{elementoSync.etiqueta}}
      </mostrar-campo>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import { Campo } from '@quiron/classes/dist/components/campos/edicion';

@Component({
  name: 'entrada-texto',
  components: {
    MostrarCampo
  }
})
export default class EntradaTexto extends Vue {
  @PropSync('elemento') elementoSync: Campo;
}
</script>
<style>
</style>
