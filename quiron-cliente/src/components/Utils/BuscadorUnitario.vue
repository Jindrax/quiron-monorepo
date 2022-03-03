<template>
  <mostrar-campo :etiqueta="etiqueta">
    <q-list>
      <mostrar-campo v-if="value[field] !== ''" v-for="(field, index) in buscador.esquema" :key="`bu-${index}-${field}`" :etiqueta="presentar(field)">
        {{ value[field] }}
      </mostrar-campo>
      <q-item v-if="habilitado">
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
  @Prop({default: true}) habilitado: boolean;

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

  presentar(field: string){
    return field.charAt(0).toUpperCase() + field.slice(1);
  }
}
</script>
<style>
</style>
