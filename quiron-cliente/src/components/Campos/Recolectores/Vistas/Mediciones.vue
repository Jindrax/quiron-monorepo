<template>
  <q-card>
    <q-item>
      <q-item-section>
        <q-item-label>{{ elemento.presentacion }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-card-section>
      <q-markup-table>
        <thead>
        <tr>
          <th>{{ elemento.descriptorInstrucciones }}</th>
          <th v-for="medida in elemento.medidas" :key="`H1${medida.instruccion}`">{{ medida.instruccion }}</th>
        </tr>
        <tr v-if="elemento.necesitaRango">
          <th>Rango</th>
          <th v-for="medida in elemento.medidas" :key="`H2${medida.instruccion}`">
            {{ `${medida.rango.inferior} - ${medida.rango.superior}` }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(medicion, indiceMedicion) in dataSync[path]" :key="`Medicion${indiceMedicion+1}`">
          <td>{{ `Medicion ${indiceMedicion + 1}` }}</td>
          <td v-for="(medida, indiceMedida) in medicion" :key="`Medida${indiceMedicion}${indiceMedida}`">
            <q-input v-model.number="dataSync[path][indiceMedicion][indiceMedida]"
                     :rules="asignarReglas(indiceMedida)"
                     type="number"
                     @input="graficar"/>
          </td>
        </tr>
        <tr>
          <td :colspan="elemento.medidas.length + 1">
            <q-btn class="full-width advance-btn" label="Añadir medición" @click="addMedicion"/>
          </td>
        </tr>
        <tr>
          <td>Promedio</td>
          <td v-for="(medida, indiceMedida) in elemento.medidas" :key="`Promedio${indiceMedida}`">
            {{ promedio(indiceMedida) }}
          </td>
        </tr>
        </tbody>
      </q-markup-table>
      <canvas v-show="ready" :ref="`${elemento.etiqueta}-canvas`"></canvas>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import {CampoMediciones} from "@quiron/classes/dist/components/campos/edicion/elementos/CampoMediciones";
import * as ChartJs from "chart.js";
//@ts-ignore
ChartJs.Chart.register.apply(null, Object.values(ChartJs).filter((chartClass) => (chartClass.id)));

interface MedicionLocal {
  mediciones: number[]
}

@Component({
  name: 'nedicion',
  components: {}
})
export default class Medicion extends Vue {
  @Prop() elemento: CampoMediciones;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;
  grafica: any = null;
  ready: boolean = false;

  get promedios() {
    return this.elemento.medidas.map((value, index) => this.promedio(index));
  }

  get margenSuperior() {
    return this.elemento.medidas.map((medida => {
      return medida.rango.superior;
    }));
  }

  get margenInferior() {
    return this.elemento.medidas.map((medida => {
      return medida.rango.inferior;
    }));
  }

  mounted() {
    const mediciones = [];
    for (let i = 0; i < this.elemento.medidasMinimas; i++) {
      const medicion = []
      for (let j = 0; j < this.elemento.medidas.length; j++) {
        medicion.push(0);
      }
      mediciones.push(medicion);
    }
    this.dataSync[this.path] = mediciones;
  }

  public addMedicion() {
    const medicion = []
    for (let j = 0; j < this.elemento.medidas.length; j++) {
      medicion.push(0);
    }
    this.dataSync[this.path].push(<number><unknown>medicion);
  }

  public promedio(medida: number) {
    let acumulado = 0;
    for (let i = 0; i < this.dataSync[this.path].length; i++) {
      acumulado += this.dataSync[this.path][i][medida];
    }
    return acumulado / this.dataSync[this.path].length
  }

  public graficar() {
    if (this.elemento.necesitaGrafica) {
      if (this.grafica == null) {
        const canvas = this.$refs[`${this.elemento.etiqueta}-canvas`];
        const labels = this.elemento.medidas.map(value => value.instruccion);
        const data = {
          labels: labels,
          datasets: [
            {
              label: "medida",
              data: this.promedios,
              fill: false,
              borderColor: 'rgb(0,0,0)',
              tension: 0,
              pointRadius: "5"
            },
            {
              label: "superior",
              data: this.margenSuperior,
              fill: false,
              borderColor: 'rgb(255,0,0)',
              tension: 0,
              pointStyle: "star",
              borderDash: [10, 5]
            },
            {
              label: "inferior",
              data: this.margenInferior,
              fill: false,
              borderColor: 'rgb(0,184,48)',
              tension: 0,
              pointStyle: "triangle",
              borderDash: [20, 10]
            }
          ]
        };
        //@ts-ignore
        this.grafica = new ChartJs.Chart(canvas, {
          type: 'line',
          data: data
        });
      } else {
        this.grafica.data.datasets[0].data = this.promedios;
        this.grafica.update();
      }
    }
    this.ready = true;
  }

  asignarReglas(indiceMedida): Function[] {
    if (this.elemento.necesitaRango) {
      return [(val: number) => {
        return this.elemento.medidas[indiceMedida].rango.inferior <= val && val <= this.elemento.medidas[indiceMedida].rango.superior ? true : "Fuera de rango";
      }];
    } else {
      return [];
    }
  }
}
</script>
<style>

</style>
