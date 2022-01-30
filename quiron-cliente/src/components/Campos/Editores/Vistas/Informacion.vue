<template>
  <q-item class="q-ma-none q-pa-none">
    <q-item-section class="q-pa-none">
      <mostrar-campo :etiqueta="'Informacion'">
        <q-input type="text" v-model="elementoSync.informacion" autogrow/>
      </mostrar-campo>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import {Component, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {CampoInformacion} from "@quiron/classes/dist/components/campos/edicion/elementos/CampoInformacion";

@Component({
  name: 'informacion',
  components: {
    MostrarCampo
  }
})
export default class Informacion extends Vue {
  @PropSync('elemento') elementoSync: CampoInformacion;
}
</script>
<style>
</style>
