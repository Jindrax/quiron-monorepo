<template>
  <q-item>
    <q-item-section side>
      <q-item-label>{{elemento.presentacion}}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{dataSync[path]}}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import {CampoEntradaNumerica} from '@quiron/classes/dist/components/campos/edicion';

@Component({
  name: 'entrada-numerica-presentacion'
})
export default class EntradaNumerica extends Vue {
  @Prop() elemento: CampoEntradaNumerica;
  @Prop() path: string;
  @PropSync('data') dataSync;
}
</script>
<style></style>
