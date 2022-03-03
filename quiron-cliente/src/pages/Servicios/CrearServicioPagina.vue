<template>
  <q-page>
    <mostrar-campo etiqueta="Identificador">
      <q-input v-model="nuevoServicio.identificador"/>
    </mostrar-campo>
    <buscador-con-tabla v-model="nuevoServicio.plantillas" :buscador="buscadorPlantilla" etiqueta="Plantillas"/>
    <div class="q-my-xs bg-grey-2">
      <q-btn class="bg-primary text-white full-width" label="Nuevo Servicio" @click="crear"/>
    </div>
  </q-page>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import CrearInstitucion from "components/Clientes/CrearInstitucion.vue";
import CrearContacto from "components/Clientes/CrearContacto.vue";
import PresentadorPorTabla from "components/Utils/PresentadorPorTabla.vue";
import Controller from "api/Controller";
import Servicio from "@quiron/classes/dist/entities/Servicio";
import BuscadorConTabla from "components/Utils/BuscadorConTabla.vue";
import {BuscadorPlantilla} from "api/entidades/Buscador";

@Component({
  name: 'crear-servicio-pagina',
  components: {
    BuscadorConTabla,
    PresentadorPorTabla,
    CrearContacto,
    CrearInstitucion,
    MostrarCampo
  }
})
export default class CrearServicioPagina extends Vue {

  nuevoServicio = new Servicio({});
  buscadorPlantilla = new BuscadorPlantilla(["identificador", "serial"]);

  public async crear() {
    await Controller.post("servicios", {servicio: this.nuevoServicio});
    this.$q.notify("Servicio creado correctamente");
    this.nuevoServicio = new Servicio({});
  }

}
</script>
<style>

</style>
