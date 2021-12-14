<template>
  <mostrar-campo :etiqueta="config.etiqueta">
    <q-item class="full-width">
      <q-item-section>
        <q-input
          disable
          v-model="value[config.mostrar]"
        />
      </q-item-section>
      <q-item-section side>
        <q-btn @click="buscar" icon="search"/>
      </q-item-section>
    </q-item>
  </mostrar-campo>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { OpcionesDialogo } from './Interfaces';
import BuscadorGenerico from './BuscadorGenerico.vue';

export interface sgConfig {
  etiqueta: string,
  mostrar: string,
  entidad: string,
  opciones: OpcionesDialogo
}

@Component({
  name: 'SelectorGenerico'
})
export default class SelectorGenerico extends Vue {
  @Prop() config: sgConfig;
  @Prop() value: any;

  buscar() {
    this.$q
      .dialog({
        component: BuscadorGenerico,
        parent: this,
        clase: this.config.entidad,
        opciones: this.config.opciones,
        persistent: true
      })
      .onOk((resultado) => {
        console.log(resultado);
        this.value.fabricarDesdeJSON(resultado);
        console.log(this.value);
        this.$emit('input', this.value);
      })
      .onCancel(cancel => {
        console.log(cancel);
      });
  }
}
</script>
<style>
</style>
