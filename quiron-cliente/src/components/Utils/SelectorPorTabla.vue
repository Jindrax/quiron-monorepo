<template>
  <q-markup-table>
    <thead>
      <tr>
        <th v-for="(columna, indiceColumna) in esquema" :key="`select-col-${columna}-${indiceColumna}`">{{columna}}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(opcion, indiceOpcion) in opciones"
        :class="isIn(opcion)? 'seleccionado' : ''"
        @click="isIn(opcion)? remove(opcion) : insert(opcion)"
        :key="`select-option-${indiceOpcion}`"
      >
        <td v-for="(columna, indiceColumna) in esquema" :key="`select-col-data-${columna}-${indiceColumna}`">{{opcion[columna]}}</td>
      </tr>
    </tbody>
  </q-markup-table>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: 'selector-por-tabla',
  components: {
  }
})
export default class SelectorPorTabla extends Vue {
  @Prop() esquema: any[];
  @Prop() opciones: any[];
  @Prop() value!: any[];
  localValue: any[] = this.value;

  isIn(op: any){
    return this.localValue.includes(op);
  }

  insert(op: any){
    this.$set(this.localValue, this.localValue.length, op);
    this.$emit("input", this.localValue);
  }

  remove(op: any){
    this.$delete(this.localValue, this.localValue.findIndex(opcion => opcion == op));
    this.$emit("input", this.localValue);
  }
}
</script>
<style>
  .seleccionado{
    background: #00cc00;
  }
</style>
