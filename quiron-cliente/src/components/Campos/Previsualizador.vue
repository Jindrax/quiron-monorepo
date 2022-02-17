<template>
  <q-card v-if="plantilla.modelo !== {}">
    <q-card-section class="q-px-none">
      <campo
        v-for="(elemento, indice) in plantilla.modelo.elementos"
        :key="'pc-prev-' + elemento.etiqueta"
        :data="compendio"
        :elemento="elemento"
        :path="plantilla.identificador"
        :printable="false"
      />
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Campo from './Recolectores/Campo.vue';
import Plantilla from '@quiron/classes/dist/entities/Plantilla';
import {getModule} from "vuex-module-decorators";
import ModuloLlenadoPlantilla from "../../store/modules/ModuloLlenadoPlantilla";

@Component({
  name: 'previsualizador',
  components: {
    Campo
  }
})
export default class Previsualizador extends Vue {
  @Prop() plantilla: Plantilla;
  public data = {};
  private plantillaStore = getModule(ModuloLlenadoPlantilla);

  public get compendio() {
    return this.plantillaStore.compendio;
  }
}
</script>
<style>
</style>
