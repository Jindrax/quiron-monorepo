<template>
  <q-markup-table>
    <thead>
    <tr>
      <th v-for="(columna, indiceColumna) in esquema" :key="`select-col-${columna}-${indiceColumna}`">{{ columna }}</th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="(opcion, indiceOpcion) in datos"
      :key="`select-option-${indiceOpcion}`"
      :class="isSeleccionado(opcion)? 'seleccionado' : ''"
      @click="seleccionar(opcion, indiceOpcion)"
    >
      <td v-for="(columna, indiceColumna) in esquema" :key="`select-col-data-${columna}-${indiceColumna}`">
        {{ opcion[columna] }}
      </td>
    </tr>
    </tbody>
  </q-markup-table>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: 'presentador-por-tabla',
  components: {}
})
export default class PresentadorPorTabla extends Vue {
  @Prop() esquema: any[];
  @Prop() datos: any[];
  @Prop() value: any;

  public isSeleccionado(opcion: any) {
    return this.value == opcion;
  }

  public seleccionar(opcion: any, indice: number) {
    this.$emit("selected", opcion, indice);
    if (this.value != opcion) {
      this.$emit("input", opcion);
    } else {
      this.$emit("input", null);
    }
  }
}
</script>
<style>
.seleccionado {
  background: rgba(0, 204, 0, 0.68);
}
</style>
