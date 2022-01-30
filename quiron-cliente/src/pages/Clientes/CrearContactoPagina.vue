<template>
  <q-page>
    <crear-contacto @creado="nuevoContacto"/>
  </q-page>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import {Contacto} from "@quiron/classes/dist/entities";
import CrearInstitucion from "components/Clientes/CrearInstitucion.vue";
import CrearContacto from "components/Clientes/CrearContacto.vue";
import PresentadorPorTabla from "components/Utils/PresentadorPorTabla.vue";
import EditarContacto from "components/Clientes/EditarContacto.vue";
import Controller from "api/Controller";
import PresentadorPorEntidad from "components/Utils/PresentadorPorEntidad.vue";

@Component({
  name: 'crear-contacto-pagina',
  components: {
    PresentadorPorEntidad,
    EditarContacto,
    PresentadorPorTabla,
    CrearContacto,
    CrearInstitucion,
    MostrarCampo
  }
})
export default class CrearContactoPagina extends Vue {
  public async nuevoContacto(contacto: Contacto) {
    try{
      await Controller.post("clientes/contactos", {contacto});
      this.$q.notify(`EL contacto ${contacto.nombres} ha sido creado correctamente`);
    }catch (e) {
      this.$q.notify(JSON.stringify(e));
    }
  }
}
</script>
<style>

</style>
