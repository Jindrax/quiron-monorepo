<template>
  <mostrar-campo
    :etiqueta="elemento.presentacion"
    :printable="printable"
  >
    <q-option-group
      v-model="dataSync[path]"
      :options="opciones"
      inline
      type="checkbox"
    />
    <q-input v-model="nuevaOpcion" label="Añadir opcion" @keypress.enter="addNuevaOpcion">
      <template v-slot:append>
        <q-btn icon="add" @click="addNuevaOpcion"/>
      </template>
    </q-input>
  </mostrar-campo>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {CampoChequeo} from '@quiron/classes/dist/components/campos/edicion';

@Component({
  name: 'chequeo',
  components: {
    MostrarCampo
  }
})
export default class Chequeo extends Vue {
  @Prop() elemento: CampoChequeo;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;
  public apertura: boolean = false;
  public nuevaOpcion: any = '';

  created() {
    if(!Array.isArray(this.dataSync[this.path])){
      this.dataSync[this.path] = [];
    }
  }

  get opciones() {
    return this.elemento.opciones.map(opcion => {
      return {label: opcion, value: opcion};
    });
  }

  addNuevaOpcion() {
    this.elemento.opciones.push(this.nuevaOpcion);
    this.nuevaOpcion = '';
  }
}
</script>
<style></style>
