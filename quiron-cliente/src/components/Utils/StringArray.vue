<template>
  <q-markup-table>
    <thead class="c-head">
    <tr>
      <td>{{ label + 's' }}</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(val, valIndex) in value" class="value" @click="removeValue(valIndex)">
      <td>{{ val }}</td>
    </tr>
    </tbody>
    <q-separator/>
    <tfoot class="c-foot">
    <tr>
      <td>
        <div class="full-width">
          <div class="row">
            <q-input v-model="newValue" :error="lingeringData" :placeholder="label"
                     class="col"
                     error-message="Recuerda terminar con enter o usar el boton para añadir el valor a la lista"
                     hide-hint
                     hint="Recuerda terminar con enter o usar el boton para añadir el valor a la lista"
                     @blur="isLingering"
                     @keypress.enter="addValue"
            />
            <q-btn class="q-ma-sm" icon="add" rounded @click="addValue"/>
          </div>
        </div>
      </td>
    </tr>
    </tfoot>
  </q-markup-table>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'string-array',
  components: {}
})
export default class StringArray extends Vue {
  @Prop() value: any[];
  @Prop() label: string;
  @Prop() valid: boolean;
  public newValue: any = '';
  public lingeringData: boolean = false;

  @Watch('lingeringData')
  public onLingeringDataChanged(oldValue, newValue) {
    this.$emit('update:valid', !oldValue);
  }

  public isLingering() {
    if (this.newValue != '') {
      this.lingeringData = true;
    }
  }

  public addValue() {
    this.$set(this.value, this.value.length, this.newValue);
    this.$emit('input', this.value);
    this.newValue = '';
    this.lingeringData = false;
  }

  public removeValue(index: number) {
    this.$delete(this.value, index);
  }
}
</script>
<style>
.c-foot {
  border-color: lightblue;
  border-top: 5px solid;
}

.value:hover {
  background: lightcoral;
}

.notification-lingering-data {
  background: red;
  color: white;
  font-size: 1vh;
}
</style>
