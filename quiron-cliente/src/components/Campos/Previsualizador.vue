<template>
  <q-card v-if="plantilla.modelo !== {}">
    <q-card-section class="q-px-none">
      <campo
        :data="compendio"
        :elemento="elemento"
        :key="'pc-' + elemento.etiqueta"
        :path="plantilla.identificador"
        :printable="false"
        v-for="(elemento, indice) in plantilla.modelo.elementos"
      />
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Campo from './Recolectores/Campo.vue';
import Plantilla from 'quiron_classes/dist/entities/Plantilla';
import {getModule} from "vuex-module-decorators";
import ModuloEditorPlantilla from "../../store/modules/ModuloEditorPlantilla";

@Component({
  name: 'previsualizador',
  components: {
    Campo
  }
})
export default class Previsualizador extends Vue {
  @Prop() plantilla: Plantilla;
  public data = {};
  private editorStore = getModule(ModuloEditorPlantilla);

  public get compendio(){
    return this.editorStore.compendio;
  }
}
</script>
<style>
</style>
