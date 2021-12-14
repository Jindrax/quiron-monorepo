<template>
  <div>
    <q-input v-model="fecha" filled>
      <template
        v-if="tipo_selector === 'date' || tipo_selector === 'datetime'"
        v-slot:prepend
      >
        <q-icon class="cursor-pointer" name="event">
          <q-popup-proxy transition-hide="scale" transition-show="scale">
            <q-date v-model="fecha" :mask="formato" @input="seleccionarFecha"/>
          </q-popup-proxy>
        </q-icon>
      </template>
      <template
        v-if="tipo_selector === 'time' || tipo_selector === 'datetime'"
        v-slot:append
      >
        <q-icon class="cursor-pointer" name="access_time">
          <q-popup-proxy transition-hide="scale" transition-show="scale">
            <q-time v-model="fecha" :mask="formato" @input="seleccionarFecha"/>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class SelectorFecha extends Vue {
  @Prop() value!: any;
  @Prop() tipo!: string;
  public fecha: string = '';

  get tipo_selector() {
    switch (this.tipo) {
      case 'fecha':
        return 'date';
      case 'hora':
        return 'time';
      case 'fecha-hora':
        return 'datetime';
      default:
        return 'datetime';
    }
  }

  get formato() {
    switch (this.tipo_selector) {
      case 'date':
        return 'YYYY-MM-DD';
      case 'time':
        return 'HH:MM';
      case 'datetime':
        return 'YYYY-MM-DDTHH:MM';
    }
  }

  seleccionarFecha() {
    console.log(this.fecha);
    console.log(new Date(this.fecha));
    this.$emit('input', this.fecha);
  }
}
</script>

<style>
.ancho {
  width: 100%;
}

.completo {
  width: 100%;
  height: 100%;
}
</style>
