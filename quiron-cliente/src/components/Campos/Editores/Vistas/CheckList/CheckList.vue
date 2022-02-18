<template>
  <q-list>
    <q-item-label header>
      Validadores
    </q-item-label>
    <q-item>
      <q-item-section>
        <q-select v-model="validadorValue" :options="opciones"/>
        <q-input v-model="etiquetaValidador" placeholder="Etiqueta"/>
        <q-btn label="Añadir" @click="nuevoValidador"/>
      </q-item-section>
    </q-item>
    <q-expansion-item v-for="validador in elementoSync.validadores" :label="validador.etiqueta" style="border-style: solid; border-width: thin">
      <component
        :is="validador.elemento"
        :key="elementoSync.etiqueta + '-ch-val-' + validador.etiqueta"
        v-bind="{elemento: validador}"
      />
    </q-expansion-item>
  </q-list>
</template>
<script lang="ts">
import {Component, PropSync, Vue} from 'vue-property-decorator';
import {CampoCheckList, FabricaCampos} from '@quiron/classes/dist/components/campos/edicion';
import {DiccionarioTiposElementos, TiposElementos} from "@quiron/classes/dist/components/campos";

@Component({
  name: 'checkList',
  components: {
    'informacion': () => import("../Informacion.vue"),
    'entrada-texto': () => import("../EntradaTexto.vue"),
    'entrada-numerica': () => import("../EntradaNumerica.vue"),
    'seleccion': () => import("../Seleccion.vue"),
    'chequeo': () => import("../Chequeo.vue")
  }
})
export default class CheckList extends Vue {
  @PropSync('elemento') elementoSync: CampoCheckList;
  validadorValue: { label: string, value: TiposElementos } = {
    label: "",
    value: TiposElementos["entrada-texto"]
  };
  etiquetaValidador: string = "";
  opciones = [
    {
      label: DiccionarioTiposElementos[TiposElementos["entrada-texto"]],
      value: TiposElementos["entrada-texto"]
    },
    {
      label: DiccionarioTiposElementos[TiposElementos["entrada-numerica"]],
      value: TiposElementos["entrada-numerica"]
    },
    {
      label: DiccionarioTiposElementos[TiposElementos.seleccion],
      value: TiposElementos.seleccion
    },
    {
      label: DiccionarioTiposElementos[TiposElementos.chequeo],
      value: TiposElementos.chequeo
    }
  ];

  nuevoValidador() {
    this.$set(this.elementoSync.validadores, this.etiquetaValidador, FabricaCampos.fabricarCampoConEtiqueta(this.validadorValue.value, this.etiquetaValidador));
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
