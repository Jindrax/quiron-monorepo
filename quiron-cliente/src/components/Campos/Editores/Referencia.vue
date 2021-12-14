<template>
  <q-expansion-item class="full-width" v-if="referencia.activated" switch-toggle-side
                    :header-class="referencia.activated? 'bg-teal-10 text-white' : ''">
    <template #header>
      <q-item-section>
        Referencia
      </q-item-section>
      <q-item-section side>
        <q-toggle v-model="referencia.activated"/>
      </q-item-section>
    </template>
    <q-card class="bg-teal-1" bordered>
      <q-card-section>
        <q-select v-model="referencia.tipo" :options="tiposRef"/>
      </q-card-section>
      <q-card-section v-if="referencia.tipo === tipoSelectorCapas">
        <div class="row q-gutter-sm">
          <div class="col">
            <selector-por-capas :arbol="contexto" v-model="referencia.identificador"/>
          </div>
        </div>
      </q-card-section>
      <q-card-section v-else>
        <mostrar-campo :etiqueta="'Identificador'">
          <q-input v-model="referencia.identificador"/>
        </mostrar-campo>
      </q-card-section>
    </q-card>
  </q-expansion-item>
  <q-item v-else>
    <q-item-section>
      Referencia
    </q-item-section>
    <q-item-section side>
      <q-toggle v-model="referencia.activated"/>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import {Component, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../MostrarCampo.vue';
import SelectorPorCapas from "components/Utils/SelectorPorCapas.vue";
import {Referencia as ReferenciaClass, TipoReferencia} from "quiron_classes/dist/components/campos/edicion";
import {getModule} from 'vuex-module-decorators';
import ModuloEditorPlantilla from '../../../store/modules/ModuloEditorPlantilla';

@Component({
  components: {
    MostrarCampo,
    SelectorPorCapas
  }
})
export default class Referencia extends Vue {
  @PropSync('elreferencia') referencia: ReferenciaClass;
  private editorStore = getModule(ModuloEditorPlantilla);
  private tipoSelectorCapas = TipoReferencia.PLANTILLA;

  public get contexto() {
    return this.editorStore.contexto;
  }

  public get tiposRef() {
    return [
      TipoReferencia.PLANTILLA,
      TipoReferencia.EQUIPO,
      TipoReferencia.CLIENTE,
      TipoReferencia.SERVICIO
    ]
  }
}
</script>
<style>
</style>
