<template>
  <q-page>
    <mostrar-campo etiqueta="Identificador">
      <q-input v-model="nuevoPatron.identificador"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Marca">
      <q-input v-model="nuevoPatron.marca"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Modelo">
      <q-input v-model="nuevoPatron.modelo"/>
    </mostrar-campo>
    <seccion :elemento="nuevoPatron.atributos" :indice="0" :path="''" :reducido="camposReducidos" :patron="true"/>
    <div class="q-my-xs bg-grey-2">
      <q-btn class="bg-primary text-white full-width" label="Nuevo Patron" @click="crear"/>
    </div>
  </q-page>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import RecolectorAtributos from "components/Utils/RecolectorAtributos.vue";
import {Patron} from "@quiron/classes/dist/entities";
import Seccion from "components/Campos/Editores/Vistas/Seccion.vue";
import {TiposElementos} from "@quiron/classes/dist/components/campos";
import Controller from "api/Controller";

@Component({
  name: 'crear-patron-pagina',
  components: {
    Seccion,
    RecolectorAtributos
  }
})
export default class CrearPatronPagina extends Vue {

  nuevoPatron: Patron = new Patron({});
  camposReducidos: TiposElementos[] = [
    TiposElementos["entrada-texto"],
    TiposElementos["entrada-numerica"],
    TiposElementos.chequeo,
    TiposElementos.seleccion
  ];

  async crear() {
    try {
      await Controller.post<Patron>("patrones", {
        patron: this.nuevoPatron
      }, null, Patron);
      this.$q.notify("Patron creado correctamente");
      this.nuevoPatron = new Patron({});
    } catch (e) {
      console.log(e);
    }
  }
}
</script>
<style>

</style>
