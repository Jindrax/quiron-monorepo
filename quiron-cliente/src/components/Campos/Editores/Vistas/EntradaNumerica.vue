<template>
  <div>
    <q-item class="q-ma-none q-pa-none">
      <q-item-section class="q-pa-none">
        <mostrar-campo :etiqueta="'Etiqueta'">
          {{ elementoSync.etiqueta }}
        </mostrar-campo>
      </q-item-section>
    </q-item>
    <q-item class="q-ma-none q-pa-none">
      <q-item-section class="q-pa-none">
        <mostrar-campo etiqueta="Rango">
          <q-toggle v-model="elementoSync.rango"/>
        </mostrar-campo>
      </q-item-section>
    </q-item>
    <div v-if="elementoSync.rango">
      <q-item class="q-ma-none q-pa-none">
        <q-item-section class="q-pa-none">
          <mostrar-campo etiqueta="Rango Inferior">
            <q-input v-model.number="elementoSync.rangoInferior"/>
          </mostrar-campo>
        </q-item-section>
      </q-item>
      <q-item class="q-ma-none q-pa-none">
        <q-item-section class="q-pa-none">
          <mostrar-campo etiqueta="Rango Superior">
            <q-input v-model.number="elementoSync.rangoSuperior"/>
          </mostrar-campo>
        </q-item-section>
      </q-item>
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
