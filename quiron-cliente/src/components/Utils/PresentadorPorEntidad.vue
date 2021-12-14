<template>
  <q-list>
    <q-item v-for="propiedad in Object.getOwnPropertyNames(entidad).filter(prop => !prop.startsWith('_'))" :key="propiedad">
      <q-item-section>{{ propiedad }}</q-item-section>
      <q-item-section>{{ entidad[propiedad] }}</q-item-section>
    </q-item>
  </q-list>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: 'presentador-por-entidad',
  components: {}
})
export default class PresentadorPorEntidad extends Vue {
  @Prop() entidad: any;
  mounted(){
    console.log(this.entidad);
    console.log("Me estan cargando");
  }
}
</script>
<style>
</style>
