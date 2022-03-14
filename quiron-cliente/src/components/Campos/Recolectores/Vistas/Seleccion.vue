<template>
  <div>
    <mostrar-campo
      v-if="!checkList"
      :etiqueta="elemento.presentacion"
      :printable="printable"
    >
      <div v-if="elemento.radio">
        <q-radio v-for="opcion in elemento.opciones" v-if="!apertura" :key="opcion" v-model="dataSync[path]"
                 :label="opcion"
                 :val="opcion"/>
        <q-input v-if="apertura" v-model="dataSync[path]"/>
        <q-toggle v-if="elemento.apertura" v-model="apertura" label="Otro"/>
      </div>
      <div v-else>
        <q-select
          v-if="!apertura"
          v-model="dataSync[path]"
          :options="obtenerOpciones(elemento)"
          :placeholder="elemento.presentacion"
          emit-value
        />
        <q-input v-if="apertura" v-model="dataSync[path]"/>
        <q-toggle v-if="elemento.apertura" v-model="apertura" label="Otro"/>
      </div>
    </mostrar-campo>
    <template v-else>
      <div v-if="elemento.radio">
        <q-radio v-for="opcion in elemento.opciones" v-if="!apertura" :key="opcion" v-model="dataSync[path]"
                 :label="opcion"
                 :val="opcion"/>
        <q-input v-if="apertura" v-model="dataSync[path]"/>
        <q-toggle v-if="elemento.apertura" v-model="apertura" label="Otro"/>
      </div>
      <div v-else>
        <q-select
          v-if="!apertura"
          v-model="dataSync[path]"
          :options="obtenerOpciones(elemento)"
          :placeholder="elemento.presentacion"
          emit-value
        />
        <q-input v-if="apertura" v-model="dataSync[path]"/>
        <q-toggle v-if="elemento.apertura" v-model="apertura" label="Otro"/>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {CampoSeleccion} from '@quiron/classes/dist/components/campos/edicion';

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
  @Prop({default: false}) readonly checkList;
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
