<template>
  <div class="column q-gutter-y-sm">
    <mostrar-campo etiqueta="Apertura" class="col">
      <q-toggle v-model="elementoSync.apertura"/>
    </mostrar-campo>
    <mostrar-campo :etiqueta="'Nueva opcion'" class="col">
      <q-input v-model="nueva_opcion" @keypress.enter.native="addOpcion"/>
    </mostrar-campo>
    <q-btn class="col advance-btn" label="Añadir opcion" @click="addOpcion"/>
    <q-list bordered separator class="col">
      <q-item-label header>
        Opciones
      </q-item-label>
      <q-item v-for="(opcion, indice_opcion) in elementoSync.opciones" :key="elementoSync.path + '\\' + opcion">
        <q-item-section>
          {{ opcion }}
        </q-item-section>
        <q-item-section v-if="indice_opcion!==0" side>
          <q-btn class="advance-btn" icon="arrow_upward" @click="moveOpcion(indice_opcion)"/>
        </q-item-section>
        <q-item-section side>
          <q-btn class="revert-btn" icon="cancel" @click="removeOpcion(indice_opcion)"/>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script lang="ts">
import {Component, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {CampoChequeo} from '@quiron/classes/dist/components/campos/edicion';

@Component({
  name: 'chequeo',
  components: {
    MostrarCampo
  }
})
export default class Chequeo extends Vue {
  @PropSync('elemento') elementoSync: CampoChequeo;
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
