<template>
  <div>
    <div
      class="row text-h5 justify-center bg-grey-1 w3-border"
      style="width: 100%"
    >
      {{ elemento.presentacion }}
    </div>
    <div class="row">
      <table class="w3-table-all" style="width: 100%">
        <tr>
          <th
            :key="indice_columna"
            v-for="(columna, indice_columna) in elemento.columnas"
          >
            {{ columna.etiqueta }}
          </th>
        </tr>
        <tr :key="indice_fila" v-for="(fila, indice_fila) in dataLocal.filas">
          <td
            :key="indice_columna"
            v-for="(columna, indice_columna) in elemento.columnas"
          >
            <div v-if="columna.elemento === 'entrada-texto'">
              <q-input
                :placeholder="columna.etiqueta"
                type="text"
                v-model="dataLocal.filas[indice_fila][indice_columna]"
              />
            </div>
            <div v-if="columna.elemento === 'entrada-numerica'">
              <q-input
                :placeholder="columna.etiqueta"
                type="number"
                v-model="dataLocal.filas[indice_fila][indice_columna]"
              />
            </div>
            <div v-if="columna.elemento === 'chequeo'">
              <q-checkbox
                :placeholder="columna.etiqueta"
                v-model="dataLocal.filas[indice_fila][indice_columna]"
              />
            </div>
            <div v-if="columna.elemento === 'seleccion'">
              <q-select
                :options="obtenerOpciones(columna)"
                :placeholder="columna.etiqueta"
                emit-value
                v-model="dataLocal.filas[indice_fila][indice_columna]"
              />
              <q-input
                v-if="dataLocal.filas[indice_fila][indice_columna] === 'Otro'"
                v-model="extended_data[indice_fila]"
              />
            </div>
          </td>
        </tr>
      </table>
      <q-btn
        v-if="nuevaFilaDisponible"
        @click="nuevaFila"
        label="Añadir fila"
        size="small"
        style="width: 100%"
      />
    </div>
    <br>
    <div v-if="false">
      <div
        class="row text-h5 justify-center bg-grey-1 w3-border"
        style="width: 100%"
      >
        Presentacion de la tabla
      </div>
      <div
        class="row text-h5 justify-center bg-grey-1 w3-border"
        style="width: 100%"
      >
        {{ elemento.presentacion }}
      </div>
      <div class="row">
        <table class="w3-table-all" style="width: 100%">
          <tr>
            <th
              :key="indice_columna"
              v-for="(columna, indice_columna) in elemento.columnas"
            >
              {{ columna.etiqueta }}
            </th>
          </tr>
          <tr :key="indice_fila" v-for="(fila, indice_fila) in data.filas">
            <td
              :key="indice_columna"
              v-for="(columna, indice_columna) in elemento.columnas"
            >
              <div v-if="columna.elemento === 'entrada_texto'">
                <p>
                  {{ data.filas[indice_fila][indice_columna] }}
                </p>
              </div>
              <div v-if="columna.elemento === 'entrada_numerica'">
                <p>
                  {{ data.filas[indice_fila][indice_columna] }}
                </p>
              </div>
              <div v-if="columna.elemento === 'seleccion'">
                <p v-if="data.filas[indice_fila][indice_columna] === 'Otro'">
                  {{ extended_data[indice_fila] }}
                </p>
                <p v-else>
                  {{ data.filas[indice_fila][indice_columna] }}
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, PropSync, Ref, Vue, Watch} from 'vue-property-decorator';
import Campo from '../Campo.vue';
import {CampoTabla} from '@quiron/classes/dist/components/campos/edicion';

@Component({
  components: {
    Campo
  }
})
export default class Tabla extends Vue {
  @Prop() elemento: CampoTabla;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;
  public dataLocal: any = {};
  public extended_data: any = [];
  @Ref('apertura') aperturaRef: Campo;

  @Watch('dataLocal')
  onDataChanged() {
    this.dataSync[this.path] = this.obtenerData();
  }

  obtenerData() {
    return JSON.parse(
      JSON.stringify({
        elemento: this.elemento.elemento,
        etiqueta: this.elemento.etiqueta,
        columnas: this.dataLocal.cabecera,
        filas: this.dataLocal.filas,
        presentacion: this.elemento.presentacion
      })
    );
  }

  get nuevaFilaDisponible(): boolean {
    return this.elemento.maxFilas > 0 ? this.dataLocal.filas.length < this.elemento.maxFilas : true;
  }

  obtenerOpciones(elemento) {
    return elemento.opciones.map(opcion => {
      return {label: opcion, value: opcion};
    });
  }

  nuevaFila() {
    this.dataLocal.filas.push(new Array(this.dataLocal.cabecera.length));
    this.extended_data.push('');
  }

  mounted() {
    for (let i = 1; i < this.elemento.minFilas; i++) {
      if (this.nuevaFilaDisponible) this.nuevaFila();
    }
  }

  created() {
    let cabecera = this.elemento.columnas.map(columna => {
      return columna.etiqueta;
    })
    this.dataLocal = {
      cabecera: cabecera,
      filas: []
    };
    this.dataLocal.filas.push(new Array(cabecera.length));
    this.extended_data.push('');
  }
}
</script>
