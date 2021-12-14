<template>
  <q-card>
    <q-card-section>
      {{ etiqueta }}
    </q-card-section>
    <q-card-section>
      <presentador-por-tabla :esquema="buscador.esquema" :datos="value" @selected="eliminarContacto"/>
    </q-card-section>
    <q-card-actions>
      <q-btn label="Añadir" @click="buscar" class="full-width"/>
    </q-card-actions>
  </q-card>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import PresentadorPorTabla from "components/Utils/PresentadorPorTabla.vue";
import {Buscador} from "api/entidades/Buscador";

@Component({
  name: 'buscador-con-tabla',
  components: {PresentadorPorTabla}
})
export default class BuscadorConTabla extends Vue {
  @Prop() value: any[];
  @Prop() etiqueta: string;
  @Prop() buscador: Buscador<any>;

  async buscar() {
    try {
      const res = await this.buscador.buscar();
      this.$set(this.value, this.value.length, res);
    } catch (e) {
      console.log(e);
    }
  }

  public eliminarContacto(elemento: any, index: number) {
    this.$delete(this.value, index);
  }
}
</script>
<style>
</style>
