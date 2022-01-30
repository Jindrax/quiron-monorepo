<template>
  <q-page>
    <mostrar-campo etiqueta="Serial">
      <q-input v-model="nuevoEquipo.serial"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Marca">
      <q-input v-model="nuevoEquipo.marca"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Modelo">
      <q-input v-model="nuevoEquipo.modelo"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Serie">
      <q-input v-model="nuevoEquipo.serie"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Codigo">
      <q-input v-model="nuevoEquipo.codigo"/>
    </mostrar-campo>
    <buscador-unitario etiqueta="Responsable" :buscador="buscadorCliente"
                       v-model="nuevoEquipo.responsable"/>
    <buscador-unitario etiqueta="Sucursal" :buscador="buscadorSucursal"
                       v-model="nuevoEquipo.institucion"/>
    <recolector-atributos etiqueta="Atributos" v-model="nuevoEquipo.atributos"/>
    <div class="q-my-xs bg-grey-2">
      <q-btn label="Nuevo Equipo" class="bg-primary text-white full-width" @click="crear"/>
    </div>
  </q-page>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import BuscadorConTabla from "components/Utils/BuscadorConTabla.vue";
import BuscadorUnitario from "components/Utils/BuscadorUnitario.vue";
import {Equipo} from "@quiron/classes/dist/entities";
import {BuscadorCliente, BuscadorInstitucion} from "api/entidades/Buscador";
import RecolectorAtributos from "components/Utils/RecolectorAtributos.vue";
import Controller from "api/Controller";

@Component({
  name: 'crear-equipo',
  components: {
    BuscadorUnitario,
    BuscadorConTabla,
    RecolectorAtributos
  }
})
export default class CrearEquipo extends Vue {
  buscadorCliente = new BuscadorCliente(["nombre", "identificacion"]);
  buscadorSucursal = new BuscadorInstitucion(["identificacion", "direccion", "ciudad"]);
  nuevoEquipo = new Equipo({});

  async crear() {
    try {
      await Controller.post("equipos", {
        equipo: this.nuevoEquipo
      });
    } catch (e) {
      console.log(e);
    }
  }
}
</script>
<style>

</style>
