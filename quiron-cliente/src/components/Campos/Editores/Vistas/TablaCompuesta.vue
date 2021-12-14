<template>
  <q-item class="q-ma-none q-pa-none">
    <q-item-section>
      <mostrar-campo :etiqueta="'Descriptor'">
        <q-input v-model="elementoSync.descriptor"/>
      </mostrar-campo>
      <mostrar-campo :etiqueta="'Elemento Columna'">
        <q-select
          :options="selector_parametro_opciones"
          emit-value
          placeholder="Seleccione elemento"
          style="width: 100%"
          v-model="selector_parametro"
        />
        <q-btn @click="addColumna" class="full-width" label="Añadir columna"/>
      </mostrar-campo>
      <table>
        <tr class="row q-gutter-xs">
          <td>Columnas:</td>
          <td
            :key="'cetcc' + '\\columna\\' + indice_columna"
            @click="removeColumna(indice_columna)"
            class="valor_columna"
            v-for="(columna, indice_columna) in elementoSync.columnas"
          >
            {{ diccionario[columna] }}
          </td>
        </tr>
      </table>

      <mostrar-campo :etiqueta="'Etiqueta parametro'">
        <q-input v-model="etiqueta_parametro_nuevo"/>
        <q-btn
          @click="addParametro"
          class="full-width"
          label="Añadir parametro"
        />
      </mostrar-campo>

      <q-list bordered separator>
        <q-item>
          <q-item-section>
            <q-item-label>Parametros</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item
          :key="'cetcp' + '\\' + parametro.etiqueta"
          :label="parametro.etiqueta"
          expand-separator
          v-for="(parametro, parametro_indice) in elementoSync.parametros"
        >
          <q-item>
            <q-item-section>
              <tabla-compuesta-parametro :columnas="elementoSync.columnas" :parametro="parametro"/>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn
                @click="removeParametro(parametro_indice)"
                label="Eliminar parametro"
              />
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { getModule } from 'vuex-module-decorators';
import ModuloEditorPlantilla from '../../../../store/modules/ModuloEditorPlantilla';
import { Component, PropSync, Vue, Watch } from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import CampoEditarTablaCompuestaParametro from './TablaCompuestaParametro.vue';
import { CampoTablaCompuesta } from 'quiron_classes/dist/components/campos/edicion/elementos/CampoTablaCompuesta';
import { DiccionarioTiposElementos, TiposElementos } from 'quiron_classes/dist/components/campos';

@Component({
  name: 'tabla-compuesta',
  components: {
    'mostrar-campo': MostrarCampo,
    'tabla-compuesta-parametro': CampoEditarTablaCompuestaParametro
  }
})
export default class TablaCompuesta extends Vue {
  @PropSync('elemento') elementoSync: CampoTablaCompuesta;
  public diccionario = DiccionarioTiposElementos;
  //////////////////////////////////////////////////////////////////////////////////////
  public etiqueta_parametro_nuevo: string = '';
  public selector_parametro_opciones: any = [
    { label: DiccionarioTiposElementos['entrada-texto'], value: TiposElementos['entrada-texto'] },
    { label: DiccionarioTiposElementos['entrada-numerica'], value: TiposElementos['entrada-numerica'] }
  ];
  public selector_parametro: TiposElementos = TiposElementos['entrada-texto'];
  private editor_store = getModule(ModuloEditorPlantilla);

  @Watch('parametros', { deep: true })
  public onParametrosChange(val, oldval) {
    this.editor_store.editorStateChanged();
  }

  //////////////////////////////////////////////////////////////////////////////////////
  public addColumna() {
    this.$set(this.elementoSync.columnas, this.elementoSync.columnas.length, this.selector_parametro);
    this.selector_parametro = TiposElementos['entrada-texto'];
  }

  public removeColumna(index) {
    this.$delete(this.elementoSync.columnas, index);
  }

  public addParametro() {
    this.$set(this.elementoSync.parametros, this.elementoSync.parametros.length, {
      etiqueta: this.etiqueta_parametro_nuevo,
      columnas: []
    });
    this.editor_store.editorStateChanged();
    this.etiqueta_parametro_nuevo = '';
  }

  public removeParametro(index) {
    this.$delete(this.elementoSync.parametros, index);
    this.editor_store.editorStateChanged();
  }

  public getModel() {
    return this.elementoSync;
  }
}
</script>
<style>
.valor_columna {
  background-color: #00cc00;
}

.valor_columna:hover {
  background-color: #b80000;
}
</style>
