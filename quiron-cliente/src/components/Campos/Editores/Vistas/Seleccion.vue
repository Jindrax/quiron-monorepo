<template>
  <q-item class="q-ma-none q-pa-none">
    <q-item-section>
      <q-list>
        <q-item>
          <q-item-section>
            <mostrar-campo etiqueta="Presentar como radio">
              <q-toggle v-model="elementoSync.radio"/>
            </mostrar-campo>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <mostrar-campo :etiqueta="'Nueva opcion'">
              <q-input @keypress.enter.native="addOpcion" v-model="nueva_opcion"/>
            </mostrar-campo>
            <q-btn @click="addOpcion" class="q-my-sm" label="Añadir opcion"/>
            <q-list bordered separator>
              <q-item-label header>
                Opciones
              </q-item-label>
              <q-item :key="elementoSync.path + '\\' + opcion" v-for="(opcion, indice_opcion) in elementoSync.opciones">
                <q-item-section>
                  {{ opcion }}
                </q-item-section>
                <q-item-section side v-if="indice_opcion!==0">
                  <q-btn @click="moveOpcion(indice_opcion)" color="blue" icon="arrow_upward"/>
                </q-item-section>
                <q-item-section side>
                  <q-btn @click="removeOpcion(indice_opcion)" color="red" icon="ion-close-circle-outline"/>
                </q-item-section>
              </q-item>
            </q-list>
          </q-item-section>
        </q-item>
      </q-list>
    </q-item-section>
  </q-item>
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
