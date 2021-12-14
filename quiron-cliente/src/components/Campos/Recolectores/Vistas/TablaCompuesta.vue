<template>
  <div>
    <div
      class="row text-h5 justify-center bg-grey-1 w3-border"
      style="width: 100%"
    >
      {{ elemento.presentacion }}
    </div>
    <div class="row full-width">
      <table class="w3-table-all full-width composed-table">
        <tr
          :key="'param' + indice_parametro"
          class="full-width"
          v-for="(parametro, indice_parametro) in elemento.parametros"
        >
          <td>{{ parametro.etiqueta }}</td>
          <td
            :key="'param' + indice_valor"
            v-for="(valor, indice_valor) in parametro.columnas"
          >
            {{ valor }}
          </td>
        </tr>
        <tr
          :key="'fila' + indice_fila"
          class="full-width"
          v-for="(fila, indice_fila) in dataLocal.filas"
        >
          <td
            :key="'fila' + indice_columna"
            v-for="(columna, indice_columna) in fila"
          >
            <div v-if="tipoColumna(indice_columna) === 'entrada-texto'">
              <q-input
                type="text"
                v-model="dataLocal.filas[indice_fila][indice_columna]"
              />
            </div>
            <div v-if="tipoColumna(indice_columna) === 'entrada-numerica'">
              <q-input
                type="number"
                v-model="dataLocal.filas[indice_fila][indice_columna]"
              />
            </div>
            <div v-if="tipoColumna(indice_columna) === 'fija'">
              {{ columna }}
            </div>
          </td>
        </tr>
      </table>

      <q-btn
        @click="nuevaFila"
        label="Añadir fila"
        size="small"
        style="width: 100%"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, PropSync, Vue, Watch} from 'vue-property-decorator';
import Campo from '../Campo.vue';
import {CampoTablaCompuesta} from 'quiron_classes/dist/components/campos/edicion';

@Component({
  components: {
    Campo
  }
})
export default class TablaCompuesta extends Vue {
  @Prop() elemento: CampoTablaCompuesta;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;
  public dataLocal: any = {};

  @Watch('dataLocal')
  onDataChanged() {
    //this.dataSync[this.path] = this.obtenerData();
  }

  @Watch('elemento', {deep: true})
  onElemento() {
    this.inicializarTabla();
  }

  obtenerData() {
    let filas_parametros = [];
    this.elemento.parametros.forEach(parametro => {
      let fila_parametro = [];
      fila_parametro.push(parametro.etiqueta);
      parametro.columnas.forEach(valor => {
        fila_parametro.push(valor);
      });
      filas_parametros.push(fila_parametro);
    });
    return JSON.parse(
      JSON.stringify({
        elemento: this.elemento.elemento,
        etiqueta: this.elemento.etiqueta,
        filas: filas_parametros.concat(this.dataLocal.filas)
      })
    );
  }

  tipoColumna(indice) {
    if (indice != 0) {
      return this.elemento.columnas[indice - 1];
    } else {
      return 'fija';
    }
  }

  created() {
    this.inicializarTabla();
  }

  private inicializarTabla() {
    this.dataLocal = {
      filas: []
    };
    let primer_fila = [];
    primer_fila.push(this.elemento.descriptor);
    this.elemento.columnas.forEach(columna =>{
      switch (columna) {
        case 'entrada-texto':
          primer_fila.push('');
          break;
        case 'entrada-numerica':
          primer_fila.push(0);
          break;
      }
    });
    this.dataLocal.filas.push(primer_fila);
  }

  private nuevaFila() {
    let fila = [];
    fila.push(this.elemento.descriptor);
    this.elemento.columnas.forEach(columna =>{
      switch (columna) {
        case 'entrada-texto':
          fila.push('');
          break;
        case 'entrada-numerica':
          fila.push(0);
          break;
      }
    });
    this.dataLocal.filas.push(fila);
  }
}
</script>

<style>
.composed-table {
  table-layout: auto;
}
</style>
