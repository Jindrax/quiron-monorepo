<template>
  <q-layout view="lHh Lpr lFf">
    <seccion-presentacion
      v-if="formulario.plantilla.modelo !== {}"
      :data="formulario.datos"
      :elemento="formulario.plantilla.modelo"
      :path="formulario.plantilla.identificador"
      class="a4"
      id="printable"
    />
  </q-layout>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {getModule} from "vuex-module-decorators";
import ModuloLlenadoPlantilla from "../store/modules/ModuloLlenadoPlantilla";
import SeccionPresentacion from "components/Campos/Presentacion/Vistas/Seccion.vue";

@Component({
  name: "main-layout",
  components: {SeccionPresentacion}
})
export default class PrintLayout extends Vue {
  store = getModule(ModuloLlenadoPlantilla);

  public get formulario() {
    return this.store.impresion;
  }

  mounted() {
    print();
  }
}

</script>
