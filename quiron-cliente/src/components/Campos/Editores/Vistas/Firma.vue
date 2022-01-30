<template>
  <q-item class="q-ma-none q-pa-none">
    <q-item-section>
      <mostrar-campo :etiqueta="'Firmante'">
        <q-option-group :options="options" v-model="elementoSync.signer"/>
      </mostrar-campo>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import { CampoFirma, DiccionarioSignerType, SignerType } from '@quiron/classes/dist/components/campos/edicion';

@Component({
  name: 'firma',
  components: {
    MostrarCampo
  }
})
export default class Firma extends Vue {
  @PropSync('elemento') elementoSync: CampoFirma;
  options: any[] = [
    {
      label: DiccionarioSignerType.author,
      value: SignerType.author
    },
    {
      label: DiccionarioSignerType.other,
      value: SignerType.other
    }
  ];

  public getModel() {
    return this.elementoSync;
  }
}
</script>
<style>
.title {
  background-color: #00cc00;
}

.title:hover {
  background-color: #b80000;
}
</style>
