<template>
  <q-page>
    <buscador-unitario v-model="nuevoEquipo.patron" :buscador="buscadorPatron"
                       etiqueta="Patron" @input="onPatronSelected"/>
    <mostrar-campo etiqueta="Marca">
      <q-input v-model="nuevoEquipo.marca"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Modelo">
      <q-input v-model="nuevoEquipo.modelo"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Serial">
      <q-input v-model="nuevoEquipo.serial"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Serie">
      <q-input v-model="nuevoEquipo.serie"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Codigo">
      <q-input v-model="nuevoEquipo.codigo"/>
    </mostrar-campo>
    <buscador-unitario v-model="nuevoEquipo.responsable" :buscador="buscadorCliente"
                       etiqueta="Responsable" @input="onClienteSelected"/>
    <mostrar-campo etiqueta="Institucion">
      <q-select v-model="institucionElegida" :options="institucionesCliente"/>
    </mostrar-campo>
    <campo :elemento="nuevoEquipo.patron.atributos" path="/" :data="nuevoEquipo.atributos"/>
    <div class="q-my-xs bg-grey-2">
      <q-btn class="bg-primary text-white full-width" label="Nuevo Equipo" @click="crear"/>
    </div>
  </q-page>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import BuscadorConTabla from "components/Utils/BuscadorConTabla.vue";
import BuscadorUnitario from "components/Utils/BuscadorUnitario.vue";
import {Cliente, Equipo, Institucion, Patron} from "@quiron/classes/dist/entities";
import {BuscadorCliente, BuscadorInstitucion} from "api/entidades/Buscador";
import RecolectorAtributos from "components/Utils/RecolectorAtributos.vue";
import Controller from "api/Controller";
import {BuscadorPatron} from "api/entidades/Buscador/Buscadores/BuscadorPatron";
import Campo from "components/Campos/Recolectores/Campo.vue";

interface opcionInstitucion {
  label: string,
  value: Institucion
}

@Component({
  name: 'crear-equipo-pagina',
  components: {
    Campo,
    BuscadorUnitario,
    BuscadorConTabla,
    RecolectorAtributos
  }
})
export default class CrearEquipoPagina extends Vue {
  buscadorPatron = new BuscadorPatron(["identificador", "marca"]);
  buscadorCliente = new BuscadorCliente(["nombre", "identificacion"], ["instituciones"]);
  buscadorInstitucion = new BuscadorInstitucion(["identificacion", "direccion", "ciudad"]);
  nuevoEquipo = new Equipo({});
  instituciones: Institucion[] = [];
  institucionElegida: opcionInstitucion = {
    label: "",
    value: new Institucion({})
  };

  get institucionesCliente() {
    return this.instituciones.map(institucion => {
      return {
        label: institucion.identificacion,
        value: institucion
      }
    })
  }

  onPatronSelected(patron: Patron) {
    this.nuevoEquipo.marca = patron.marca;
    this.nuevoEquipo.modelo = patron.modelo;
  }

  async onClienteSelected(cliente: Cliente) {
    this.instituciones = (await Controller.get<Institucion>(`cliente/${cliente.id}/instituciones`, null, Institucion)) as Institucion[];
  }

  async crear() {
    try {
      this.nuevoEquipo.institucion = this.institucionElegida.value;
      await Controller.post("equipos", {
        equipo: this.nuevoEquipo
      });
      this.$q.notify("Equipo creado correctamente");
      this.nuevoEquipo = new Equipo({});
    } catch (e) {
      console.log(e);
    }
  }
}
</script>
<style>

</style>
