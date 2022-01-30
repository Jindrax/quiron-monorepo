<template>
  <q-page>
    <crear-institucion @creado="nuevaInstitucion"/>
  </q-page>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import {Institucion} from "@quiron/classes/dist/entities";
import CrearInstitucion from "components/Clientes/CrearInstitucion.vue";
import CrearContacto from "components/Clientes/CrearContacto.vue";
import PresentadorPorTabla from "components/Utils/PresentadorPorTabla.vue";
import Controller from "api/Controller";

@Component({
  name: 'crear-institucion-pagina',
  components: {
    PresentadorPorTabla,
    CrearContacto,
    CrearInstitucion,
    MostrarCampo
  }
})
export default class CrearInstitucionPagina extends Vue {

  public async nuevaInstitucion(institucion: Institucion) {
    await Controller.post("clientes/instituciones", {institucion: institucion});
  }

}
</script>
<style>

</style>
