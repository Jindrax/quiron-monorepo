<template>
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
            v-for="(columna, indice_columna) in elemento.columnas"
            :key="indice_columna"
          >
            {{ columna.etiqueta }}
          </th>
        </tr>
        <tr v-for="(fila, indiceFila) in dataSync[path]" :key="indiceFila">
          <td
            v-for="(columna, indiceColumna) in elemento.columnas"
            :key="indiceColumna"
          >
            <div v-if="columna.elemento === 'entrada_texto'">
              <p>
                {{ dataSync[path][indiceFila][columna.etiqueta] }}
              </p>
            </div>
            <div v-if="columna.elemento === 'entrada_numerica'">
              <p>
                {{ dataSync[path][indiceFila][columna.etiqueta] }}
              </p>
            </div>
            <div v-if="columna.elemento === 'seleccion'">
              <p v-if="dataSync[path][indiceFila][columna.etiqueta] === 'Otro'">
                {{ extended_data[indiceFila] }}
              </p>
              <p v-else>
                {{ dataSync[path][indiceFila][columna.etiqueta] }}
              </p>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, PropSync, Ref, Vue} from 'vue-property-decorator';
import CampoPresentacion from '../CampoPresentacion.vue';
import {CampoTabla} from '@quiron/classes/dist/components/campos/edicion';
import {TiposElementos} from "@quiron/classes/dist/components/campos";

@Component({
  components: {
    CampoPresentacion
  }
})
export default class Tabla extends Vue {
  @Prop() elemento: CampoTabla;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;
  public extended_data: any = [];
  @Ref('apertura') aperturaRef: CampoPresentacion;

  get nuevaFilaDisponible(): boolean {
    return this.elemento.maxFilas > 0 ? this.dataSync.length < this.elemento.maxFilas : true;
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
          valorDefecto = [];
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
