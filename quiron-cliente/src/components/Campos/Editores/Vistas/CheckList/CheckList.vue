<template>
  <q-list>
    <q-item-label>
      Validadores
    </q-item-label>
    <q-item>
      <q-item-section>
        <q-select ></q-select>
      </q-item-section>
    </q-item>
    <q-item>
        <q-item-section>

        </q-item-section>
    </q-item>
  </q-list>
</template>
<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import { CampoSeleccion } from '@quiron/classes/dist/components/campos/edicion';

@Component({
  name: 'seleccion',
  components: {
    MostrarCampo
  }
})
export default class Seleccion extends Vue {
  @PropSync('elemento') elementoSync: CampoSeleccion;
  public nueva_opcion: string = '';

  public addOpcion() {
    this.$set(this.elementoSync.opciones, this.elementoSync.opciones.length, this.nueva_opcion);
    this.nueva_opcion = '';
  }

  public removeOpcion(index) {
    this.$delete(this.elementoSync.opciones, index);
  }

  public moveOpcion(index) {
    let temp = this.elementoSync.opciones[index];
    this.$set(this.elementoSync.opciones, index, this.elementoSync.opciones[index - 1]);
    this.$set(this.elementoSync.opciones, index - 1, temp);
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
