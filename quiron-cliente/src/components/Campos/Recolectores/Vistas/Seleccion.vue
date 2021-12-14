<template>
  <mostrar-campo
    :etiqueta="elemento.presentacion"
    :printable="printable"
  >
    <div v-if="elemento.radio">
      <q-radio v-model="dataSync[path]" v-for="opcion in elemento.opciones" :val="opcion" :label="opcion" :key="opcion"
               v-if="!apertura"/>
      <q-input v-model="dataSync[path]" v-if="apertura"/>
      <q-toggle v-model="apertura" label="Otro"/>
    </div>
    <div v-else>
      <q-select
        :options="obtenerOpciones(elemento)"
        :placeholder="elemento.presentacion"
        emit-value
        v-model="dataSync[path]"
        v-if="!apertura"
      />
      <q-input v-model="dataSync[path]" v-if="apertura"/>
      <q-toggle v-model="apertura" label="Otro"/>
    </div>
  </mostrar-campo>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {CampoSeleccion} from 'quiron_classes/dist/components/campos/edicion';

@Component({
  name: 'seleccion',
  components: {
    MostrarCampo
  }
})
export default class Seleccion extends Vue {
  @Prop() elemento: CampoSeleccion;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;
  public apertura = false;

  public obtenerOpciones(elemento) {
    return elemento.opciones.map(opcion => {
      return {label: opcion, value: opcion};
    });
  }
}
</script>
<style></style>
