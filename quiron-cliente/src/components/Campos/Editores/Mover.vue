<template>
  <q-item class="q-ma-none q-px-none q-py-xs">
    <q-item-section class="text-black" side>
      Mover antes de
    </q-item-section>
    <q-item-section>
      <q-select :options="selectorOptions" v-model="selector"/>
    </q-item-section>
    <q-item-section side>
      <q-btn @click="move" label="Mover"/>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MostrarCampo from '../MostrarCampo.vue';
import { getModule } from 'vuex-module-decorators';
import ModuloEditorPlantilla from '../../../store/modules/ModuloEditorPlantilla';
import { Campo } from '@quiron/classes/dist/components/campos/edicion/Campo';

interface SelectObject {
  label: string;
  value: number;
}

@Component({
  components: {
    MostrarCampo
  }
})
export default class CampoEditarMover extends Vue {
  @Prop() elementos: Campo[];
  @Prop() indice: number;
  public editor_store = getModule(ModuloEditorPlantilla);
  public selector: SelectObject = {
    label: 'Ninguno',
    value: 0
  };

  public get selectorOptions() {
    let options: SelectObject[] = [];
    let i = 0;
    for (let elemento of this.elementos) {
      if (i != this.indice) {
        options.push({
          label: elemento.etiqueta,
          value: i
        });
      }
      i++;
    }
    return options;
  }

  public move() {
    let me = this.elementos[this.indice];
    this.elementos.splice(this.selector.value, 0, me);
    this.$delete(this.elementos, this.indice + 1);
    this.selector = {
      label: 'Ninguno',
      value: 0
    };
    this.editor_store.editorStateChanged();
  }
}
</script>
<style>
.title {
  background-color: #00cc00;
}

.title:hover {
  background-color: #b80000;
}
</style>
