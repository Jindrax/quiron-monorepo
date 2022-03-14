<template>
  <q-card bordered>
    <q-card-section
      class="row text-h5 justify-center bg-grey-1 w3-border"
      style="width: 100%"
    >
      {{ elemento.presentacion }}
    </q-card-section>
    <q-card-section>
      <q-markup-table class="full-width">
        <thead>
        <tr>
          <th
            v-for="(columna, indice_columna) in elemento.columnas"
            :key="indice_columna"
          >
            {{ columna.etiqueta }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(fila, indiceFila) in dataSync[path]" :key="indiceFila">
          <td
            v-for="(columna, indiceColumna) in elemento.columnas"
            :key="indiceColumna"
          >
            <div v-if="columna.elemento === 'entrada-texto'">
              <q-input
                v-model="dataSync[path][indiceFila][columna.etiqueta]"
                :placeholder="columna.etiqueta"
                type="text"
              />
            </div>
            <div v-if="columna.elemento === 'entrada-numerica'">
              <q-input
                v-model="dataSync[path][indiceFila][columna.etiqueta]"
                :placeholder="columna.etiqueta"
                type="number"
              />
            </div>
            <div v-if="columna.elemento === 'chequeo'">
              <q-checkbox
                v-model="dataSync[path][indiceFila][columna.etiqueta]"
                :placeholder="columna.etiqueta"
              />
            </div>
            <div v-if="columna.elemento === 'seleccion'">
              <q-select
                v-model="dataSync[path][indiceFila][columna.etiqueta]"
                :options="obtenerOpciones(columna)"
                :placeholder="columna.etiqueta"
                emit-value
              />
              <q-input
                v-if="dataSync[path][indiceFila][columna.etiqueta] === 'Otro'"
                v-model="extended_data[indiceFila]"
              />
            </div>
          </td>
        </tr>
        </tbody>
      </q-markup-table>
      <q-btn
        v-if="nuevaFilaDisponible"
        class="advance-btn full-width"
        label="Añadir fila"
        size="small"
        @click="nuevaFila"
      />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import {Component, Prop, PropSync, Ref, Vue} from 'vue-property-decorator';
import Campo from '../Campo.vue';
import {CampoTabla} from '@quiron/classes/dist/components/campos/edicion';
import {TiposElementos} from "@quiron/classes/dist/components/campos";

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
  public extended_data: any = [];
  @Ref('apertura') aperturaRef: Campo;

  get nuevaFilaDisponible(): boolean {
    return this.elemento.maxFilas > 0 ? this.dataSync[this.path].length < this.elemento.maxFilas : true;
  }

  obtenerOpciones(elemento) {
    return elemento.opciones.map(opcion => {
      return {label: opcion, value: opcion};
    });
  }

  nuevaFila() {
    let fila: any = {};
    this.elemento.columnas.forEach(columna => {
      let valorDefecto = undefined;
      switch (columna.elemento) {
        case TiposElementos["entrada-texto"]:
          valorDefecto = "";
          break;
        case TiposElementos["entrada-numerica"]:
          valorDefecto = 0;
          break;
        case TiposElementos.seleccion:
          valorDefecto = "";
          break;
        case TiposElementos.chequeo:
          valorDefecto = false;
          break;
        default:
          valorDefecto = {};
      }
      fila[columna.etiqueta] = valorDefecto;
    });
    this.dataSync[this.path].push(fila);
    this.extended_data.push('');
  }

  mounted() {
    if (this.elemento.minFilas && this.elemento.minFilas !== 0) {
      while (this.dataSync[this.path].length < this.elemento.minFilas) {
        console.log("Filas: ", this.dataSync[this.path].length);
        this.nuevaFila();
      }
    } else {
      this.nuevaFila();
    }
  }

  created() {
    this.extended_data.push('');
  }
}
</script>

<style lang="scss">
.campo-table {
  border: 1px black;
}
</style>
