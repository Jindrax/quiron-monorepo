<template>
  <div>
    <buscador-unitario v-model="cliente" :buscador="buscadorCliente"
                       etiqueta="Cliente"/>
    <buscador-unitario v-model="institucion" :buscador="buscadorInstitucion"
                       etiqueta="Institucion"/>
    <q-btn class="full-width" label="Asociar" @click="asociar"/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {BuscadorUnitario} from 'components/Utils';
import {Cliente, Institucion} from "@quiron/classes/dist/entities";
import {BuscadorCliente, BuscadorInstitucion} from "api/entidades/Buscador";

@Component({
  name: 'institucion-a-cliente',
  components: {
    BuscadorUnitario
  }
})
export default class InstitucionACliente extends Vue {
  buscadorCliente = new BuscadorCliente(["nombre", "identificacion"]);
  buscadorInstitucion = new BuscadorInstitucion(["identificacion", "direccion", "ciudad"]);
  cliente = new Cliente({});
  institucion = new Institucion({});

  asociar() {
    this.$emit("asociar", {
      cliente: this.cliente.id,
      institucion: this.institucion.id
    });
    this.cliente = new Cliente({});
    this.institucion = new Institucion({});
  }
}
</script>
<style>

</style>
