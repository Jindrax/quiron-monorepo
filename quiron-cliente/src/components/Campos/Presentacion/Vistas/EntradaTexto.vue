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
import {Campo} from '@quiron/classes/dist/components/campos/edicion';

@Component({
  name: 'entrada-texto-presentacion'
})
export default class EntradaTexto extends Vue {
  @Prop() elemento: Campo;
  @Prop() path: string;
  @PropSync('data') dataSync;
}
</script>
<style></style>
