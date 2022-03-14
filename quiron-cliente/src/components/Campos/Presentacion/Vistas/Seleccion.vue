<template>
  <q-item>
    <q-item-section side>
      <q-item-label>{{ elemento.presentacion }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ dataSync[path] }}</q-item-label>
    </q-item-section>
  </q-item>
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
  @PropSync('data') dataSync;
  mounted() {
    console.log(this.dataSync[this.path]);
  }
}
</script>
<style></style>
