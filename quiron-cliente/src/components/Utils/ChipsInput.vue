<template>
  <div>
    <template v-if="value">
      {{label}}
      <q-chip
        v-for="(parametro, parametro_index) in value"
        :key="parametro_index"
        @click.native="removeParametro(parametro_index)"
        class="cursor-pointer"
      >
      {{parametro}}
      </q-chip>
    </template>
    <q-input @input="addParametro" debounce="5000"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class ChipsInput extends Vue {
  @Prop() value: any[];
  @Prop() label: string;
  public modelo: any[] = [];
  public addParametro(value) {
    this.modelo = this.value;
    this.$set(this.modelo, this.modelo.length, value);
    this.$emit('input', this.modelo);
    this.$emit('updated');
  }
  public removeParametro(index) {
    this.$delete(this.modelo, index);
    this.$emit('input', this.modelo);
    this.$emit('updated');
  }
}
</script>
