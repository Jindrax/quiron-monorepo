<template>
  <mostrar-campo :etiqueta="etiqueta">
    <q-list>
      <q-item v-if="value[field] !== ''" v-for="(field, index) in buscador.esquema" :key="`bu-${index}-${field}`">
        {{ field }}: {{ value[field] }}
      </q-item>
      <q-item>
        <q-item-section>
          <q-btn label="Añadir" @click="buscar" class="full-width bg-white"/>
        </q-item-section>
      </q-item>
    </q-list>
  </mostrar-campo>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {MostrarCampo} from "components/Campos";
import {Buscador} from "api/entidades/Buscador";

@Component({
  name: 'buscador-unitario',
  components: {MostrarCampo}
})
export default class BuscadorUnitario extends Vue {
  @Prop() value: any[];
  @Prop() etiqueta: string;
  @Prop() buscador: Buscador<any>;

  async buscar() {
    try {
      const res = await this.buscador.buscar();
      this.$emit("input", res);
      this.$set(this.value, this.value.length, res);
      console.log(this.value);
    } catch (e) {
      console.log(e);
    }
    ;
  }
}
</script>
<style>
</style>
