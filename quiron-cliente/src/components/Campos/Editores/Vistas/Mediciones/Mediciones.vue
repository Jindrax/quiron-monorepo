<template>
  <q-item class="q-ma-none q-pa-none">
    <q-item-section>
      <mostrar-campo etiqueta="Medidas minimas">
        <q-input v-model.number="elementoSync.medidasMinimas" type="number"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Descriptor de instrucciones">
        <q-input v-model="elementoSync.descriptorInstrucciones" type="text"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Necesita Rangos">
        <q-toggle v-model="elementoSync.necesitaRango"/>
      </mostrar-campo>
      <q-markup-table>
        <thead>
        <tr>
          <th>Instrucción</th>
          <template v-if="elementoSync.necesitaRango">
            <th>Rango inferior</th>
            <th>Rango superior</th>
          </template>
        </tr>
        </thead>
        <tbody>
        <medida v-for="(medida, index) in elementoSync.medidas" :medida="medida" :key="`m${index}`" :rango-requerido="elementoSync.necesitaRango"
                @remove="removeMedida"/>
        </tbody>
      </q-markup-table>
      <q-btn label="Nueva medida" @click="addMedida"/>
      <mostrar-campo etiqueta="Necesita Grafica">
        <q-toggle v-model="elementoSync.necesitaGrafica"/>
      </mostrar-campo>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import {Component, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../../MostrarCampo.vue';
import {CampoMediciones} from "quiron_classes/dist/components/campos/edicion/elementos/CampoMediciones";
import Medida from "components/Campos/Editores/Vistas/Mediciones/Medida.vue";
import {Medida as MedidaClass} from "quiron_classes/dist/components/campos/edicion";

@Component({
  name: 'mediciones',
  components: {
    Medida,
    MostrarCampo
  }
})
export default class Mediciones extends Vue {
  @PropSync('elemento') elementoSync: CampoMediciones;

  public getModel() {
    return this.elementoSync;
  }

  public addMedida() {
    const nuevaMedida = new MedidaClass("", 0, 0);
    this.$set(this.elementoSync.medidas, this.elementoSync.medidas.length, nuevaMedida);
  }

  public removeMedida(index) {
    console.log(index);
    this.$delete(this.elementoSync.medidas, index);
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
