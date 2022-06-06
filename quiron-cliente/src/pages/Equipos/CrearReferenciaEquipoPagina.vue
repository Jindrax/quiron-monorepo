<template>
  <q-page>
    <mostrar-campo etiqueta="Identificador">
      <q-input v-model="nuevaReferenciaEquipo.identificador"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Marca">
      <q-input v-model="nuevaReferenciaEquipo.marca"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Modelo">
      <q-input v-model="nuevaReferenciaEquipo.modelo"/>
    </mostrar-campo>
    <seccion :elemento="nuevaReferenciaEquipo.atributos" :indice="0" :path="''" :reducido="camposReducidos" :patron="true"/>
    <div class="q-my-xs bg-grey-2">
      <q-btn class="bg-primary text-white full-width" label="Nuevo Patron" @click="crear"/>
    </div>
  </q-page>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import RecolectorAtributos from "components/Utils/RecolectorAtributos.vue";
import {ReferenciaEquipo} from "@quiron/classes/dist/entities";
import Seccion from "components/Campos/Editores/Vistas/Seccion.vue";
import {TiposElementos} from "@quiron/classes/dist/components/campos";
import Controller from "api/Controller";

@Component({
  name: 'crear-referencia-equipo-pagina',
  components: {
    Seccion,
    RecolectorAtributos
  }
})
export default class CrearReferenciaEquipoPagina extends Vue {

  nuevaReferenciaEquipo: ReferenciaEquipo = new ReferenciaEquipo({});
  camposReducidos: TiposElementos[] = [
    TiposElementos["entrada-texto"],
    TiposElementos["entrada-numerica"],
    TiposElementos.chequeo,
    TiposElementos.seleccion
  ];

  async crear() {
    try {
      await Controller.post<ReferenciaEquipo>("referenciaEquipos", {
        referenciaEquipo: this.nuevaReferenciaEquipo
      }, null, ReferenciaEquipo);
      this.$q.notify("Referencia Equipo creada correctamente");
      this.nuevaReferenciaEquipo = new ReferenciaEquipo({});
    } catch (e) {
      console.log(e);
    }
  }
}
</script>
<style>

</style>
