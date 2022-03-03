<template>
  <q-page>
    <buscador-unitario v-model="nuevaOt.servicio" :buscador="buscadorServicio"
                       etiqueta="Servicio"/>
    <buscador-unitario v-model="nuevaOt.equipo" :buscador="buscadorEquipo"
                       etiqueta="Equipo" @input="onEquipoSelected"/>
    <buscador-unitario v-model="nuevaOt.cliente" :buscador="buscadorCliente"
                       :habilitado="false" etiqueta="Cliente"/>
    <buscador-unitario v-model="nuevaOt.institucion" :buscador="buscadorInstitucion"
                       :habilitado="false" etiqueta="Institucion"/>
    <div class="q-my-xs bg-grey-2">
      <q-btn class="bg-primary text-white full-width" label="Crear Orden de trabajo" @click="crear"/>
    </div>
  </q-page>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import BuscadorConTabla from "components/Utils/BuscadorConTabla.vue";
import BuscadorUnitario from "components/Utils/BuscadorUnitario.vue";
import {Cliente, Equipo, Institucion, OrdenTrabajo} from "@quiron/classes/dist/entities";
import {BuscadorCliente, BuscadorEquipo, BuscadorInstitucion} from "api/entidades/Buscador";
import RecolectorAtributos from "components/Utils/RecolectorAtributos.vue";
import Controller from "api/Controller";
import Campo from "components/Campos/Recolectores/Campo.vue";
import {BuscadorServicio} from "api/entidades/Buscador/Buscadores";

@Component({
  name: 'crear-ots-pagina',
  components: {
    Campo,
    BuscadorUnitario,
    BuscadorConTabla,
    RecolectorAtributos
  }
})
export default class CrearOTSPagina extends Vue {
  buscadorServicio = new BuscadorServicio(["identificador"]);
  buscadorEquipo = new BuscadorEquipo(["serial", "marca"]);
  buscadorCliente = new BuscadorCliente(["nombre", "identificacion"]);
  buscadorInstitucion = new BuscadorInstitucion(["identificacion", "direccion"]);
  nuevaOt = new OrdenTrabajo({});

  async onEquipoSelected(equipo: Equipo) {
    let info: any = await Controller.get(`equipo/${equipo.id}/infoOT`);
    console.log(info);
    this.nuevaOt.cliente = new Cliente(info.responsable);
    this.nuevaOt.institucion = new Institucion(info.institucion);
  }

  async crear() {
    // try {
    //   this.nuevoEquipo.institucion = this.institucionElegida.value;
    //   await Controller.post("equipos", {
    //     equipo: this.nuevoEquipo
    //   });
    //   this.$q.notify("Equipo creado correctamente");
    //   this.nuevoEquipo = new Equipo({});
    // } catch (e) {
    //   console.log(e);
    // }
  }
}
</script>
<style>

</style>
