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
import {CampoInformacion} from "@quiron/classes/dist/components/campos/edicion/elementos/CampoInformacion";

@Component({
  name: 'informacion',
  components: {
    MostrarCampo
  }
})
export default class Informacion extends Vue {
  @Prop() elemento: CampoInformacion;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;

  mounted() {
    this.dataSync[this.path] = this.elemento.informacion;
  }
}
</script>
<style></style>
