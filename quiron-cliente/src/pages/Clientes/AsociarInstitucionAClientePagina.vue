<template>
  <q-page>
    <institucion-a-cliente @asociar="asociarInstitucionACliente"/>
  </q-page>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import {InstitucionACliente} from "components/Clientes";
import Controller from "api/Controller";

interface AsociarInstitucionACliente{
  cliente: string,
  institucion: string
}

@Component({
  name: 'asociar-institucion-a-cliente-pagina',
  components: {
    MostrarCampo,
    InstitucionACliente
  }
})
export default class AsociarInstitucionAClientePagina extends Vue {

  public async asociarInstitucionACliente(wrapper: AsociarInstitucionACliente) {
    await Controller.post("clientes/instituciones/link", wrapper);
    this.$q.notify("Institución asociada al cliente");
  }

}
</script>
<style>

</style>
