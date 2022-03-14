<template>
  <q-item>
    <q-item-section side>
      <q-item-label>{{ elemento.presentacion }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-option-group
        v-model="dataSync[path]"
        :options="opciones"
        disable
        inline
        type="checkbox"
      />
    </q-item-section>
  </q-item>
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
  @PropSync('data') dataSync;

  get opciones() {
    return this.elemento.opciones.map(opcion => {
      return {label: opcion, value: opcion};
    });
  }
}
</script>
<style></style>
