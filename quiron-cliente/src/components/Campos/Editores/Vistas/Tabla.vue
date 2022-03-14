<template>
  <div>
    <q-item class="q-ma-none q-pa-none">
      <q-item-section>
        <mostrar-campo etiqueta="Filas minimas">
          <q-input v-model.number="elementoSync.minFilas" type="number"/>
        </mostrar-campo>
        <mostrar-campo etiqueta="Filas maximas">
          <q-input v-model.number="elementoSync.maxFilas" type="number"/>
        </mostrar-campo>
      </q-item-section>
    </q-item>
    <q-item class="q-ma-none q-pa-none">
      <q-item-section>
        <q-list>
          <mostrar-campo :etiqueta="'Elemento columna'">
            <q-select
              :options="selector_columna_opciones"
              emit-value
              hint="Elegir elemento"
              placeholder="Seleccione elemento"
              style="width: 100%"
              v-model="selector_columna"
            />
          </mostrar-campo>
          <mostrar-campo :etiqueta="'Etiqueta'">
            <q-input v-model="etiqueta_columna_nueva"/>
          </mostrar-campo>
          <q-btn
            @click="addColumna"
            class="boton-add full-width advance-btn"
            label="Añadir columna"
          />
          <br/>
          <q-list>
            <q-item-label header>
              Columnas
            </q-item-label>
            <template v-for="(columna, columna_indice) in elementoSync.columnas">
              <q-item>
                <q-item-section>
                  <q-expansion-item
                    :header-class="columna_indice%2?'elemento-par':'elemento-impar'"
                    :label="diccionario[columna.elemento] + ' : ' + columna.etiqueta"
                  >
                    <component
                      :is="columna.elemento"
                      :key="'cetc-' + columna.etiqueta"
                      class="texto-generico q-pa-none"
                      v-bind="{elemento: columna}"
                      v-if="columna.elemento !== 'chequeo'"
                    />
                    <q-btn
                      :label="'Eliminar ' + columna.etiqueta"
                      @click="removeColumna(columna_indice)"
                      class="boton-eliminar full-width revert-btn"
                    />
                  </q-expansion-item>
                </q-item-section>
              </q-item>
            </template>
          </q-list>
        </q-list>
      </q-item-section>
    </q-item>
  </div>
</template>
<script lang="ts">
import {Component, PropSync, Vue} from 'vue-property-decorator';
import CampoEditar from '../CampoEditar.vue';
import {EntradaNumerica, EntradaTexto, Seleccion} from './';
import MostrarCampo from '../../MostrarCampo.vue';
import {getModule} from 'vuex-module-decorators';
import ModuloEditorPlantilla from '../../../../store/modules/ModuloEditorPlantilla';
import {DiccionarioTiposElementos, TiposElementos} from '@quiron/classes/dist/components/campos';
import {Campo, CampoChequeo, CampoSeleccion} from '@quiron/classes/dist/components/campos/edicion'
import {CampoTabla} from '@quiron/classes/dist/components/campos/edicion/elementos/CampoTabla'

@Component({
  name: 'tabla',
  components: {
    'mostrar-campo': MostrarCampo,
    'campo-editar': () => Promise.resolve(CampoEditar),
    'entrada-texto': EntradaTexto,
    'entrada-numerica': EntradaNumerica,
    'seleccion': Seleccion
  }
})
export default class Tabla extends Vue {
  @PropSync('elemento') elementoSync: CampoTabla;
  diccionario = DiccionarioTiposElementos;
  public etiqueta_columna_nueva: string = '';
  public selector_columna: TiposElementos = TiposElementos['entrada-texto'];
  public selector_columna_opciones: any = [
    {label: DiccionarioTiposElementos['entrada-texto'], value: TiposElementos['entrada-texto']},
    {label: DiccionarioTiposElementos['entrada-numerica'], value: TiposElementos['entrada-numerica']},
    {label: DiccionarioTiposElementos.seleccion, value: TiposElementos.seleccion},
    {label: DiccionarioTiposElementos.chequeo, value: TiposElementos.chequeo}
  ];
  private editor_store = getModule(ModuloEditorPlantilla);


  public addColumna() {
    let nuevaColumna;
    switch (this.selector_columna) {
      case TiposElementos['entrada-texto']:
        nuevaColumna = new Campo(TiposElementos['entrada-texto'], this.etiqueta_columna_nueva);
        break;
      case TiposElementos['entrada-numerica']:
        nuevaColumna = new Campo(TiposElementos['entrada-numerica'], this.etiqueta_columna_nueva);
        break;
      case TiposElementos.seleccion:
        nuevaColumna = new CampoSeleccion(this.etiqueta_columna_nueva);
        break;
      case TiposElementos.chequeo:
        nuevaColumna = new CampoChequeo(this.etiqueta_columna_nueva);
        break;
    }
    this.$set(
      this.elementoSync.columnas,
      this.elementoSync.columnas.length,
      nuevaColumna
    );
    this.editor_store.editorStateChanged();
    this.selector_columna = TiposElementos['entrada-texto'];
    this.etiqueta_columna_nueva = '';
  }

  public removeColumna(indice) {
    this.$delete(this.elementoSync.columnas, indice);
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

.boton-eliminar {
  font-size: 90%;
}

.boton-add {
  font-size: 90%;
}

.elemento-par {
  background-color: rgb(63, 177, 69);
  font-size: 120%;
}

.elemento-impar {
  background-color: rgb(1, 129, 108);
  font-size: 120%;
}
</style>
