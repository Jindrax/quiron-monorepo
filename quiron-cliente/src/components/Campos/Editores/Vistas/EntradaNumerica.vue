<template>
  <div class="column q-gutter-y-sm">
    <mostrar-campo :etiqueta="'Etiqueta'" class="col">
      {{ elementoSync.etiqueta }}
    </mostrar-campo>
    <mostrar-campo etiqueta="Rango" class="col">
      <q-toggle v-model="elementoSync.rango"/>
    </mostrar-campo>
    <div v-if="elementoSync.rango" class="col column">
      <mostrar-campo etiqueta="Rango Inferior" class="col">
        <q-input v-model.number="elementoSync.rangoInferior"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Rango Superior" class="col">
        <q-input v-model.number="elementoSync.rangoSuperior"/>
      </mostrar-campo>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {CampoEntradaNumerica} from '@quiron/classes/dist/components/campos/edicion';

@Component({
  name: 'entrada-numerica',
  components: {
    MostrarCampo
  }
})
export default class EntradaNumerica extends Vue {
  @PropSync('elemento') elementoSync: CampoEntradaNumerica;
}
</script>
<style>
</style>
