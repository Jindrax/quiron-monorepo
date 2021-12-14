<template>
  <q-page>
    <div>
      <mostrar-campo etiqueta="Nombre">
        <q-input v-model="nuevoCliente.nombre"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Identificacion">
        <q-input v-model="nuevoCliente.identificacion"/>
      </mostrar-campo>
      <q-separator/>
      <q-card>
        <q-card-section>Contactos</q-card-section>
        <q-card-section>
          <presentador-por-tabla :datos="nuevoCliente.contactos" :esquema="['nombres', 'apellidos']"
                                 @selected="eliminarContacto"/>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Añadir Contacto" @click="buscarContacto" class="full-width"/>
        </q-card-actions>
      </q-card>
      <q-separator/>
      <q-card class="q-card--bordered">
        <q-card-section>Instituciones</q-card-section>
        <q-card-section>
          <presentador-por-tabla :datos="nuevoCliente.instituciones"
                                 :esquema="['identificacion', 'direccion', 'ciudad']"
                                 @selected="eliminarInstitucion"/>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Añadir Institucion" @click="buscarInstitucion" class="full-width"/>
        </q-card-actions>
      </q-card>
      <mostrar-campo etiqueta="Institucion Principal" v-if="nuevoCliente.instituciones.length > 0">
        <q-select :options="nuevoCliente.instituciones" v-model="nuevoCliente.institucionPrincipal" emit-value
                  map-options option-label="identificacion"/>
      </mostrar-campo>
      <q-btn label="Crear Cliente" @click="crearCliente" class="full-width"/>
    </div>
  </q-page>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import {Cliente, Contacto, Institucion} from "quiron_classes/dist/entities";
import CrearInstitucion from "components/Clientes/CrearInstitucion.vue";
import CrearContacto from "components/Clientes/CrearContacto.vue";
import PresentadorPorTabla from "components/Utils/PresentadorPorTabla.vue";
import Controller from "api/Controller";
import BuscadorGenerico from "components/Utils/BuscadorGenerico.vue";
import {contactoOpcionesBuscador} from "api/entidades/BuscadorEntidad";
import {BuscadorInstitucion} from "api/entidades/Buscador";

@Component({
  name: 'crear-cliente-pagina',
  components: {
    PresentadorPorTabla,
    CrearContacto,
    CrearInstitucion,
    MostrarCampo
  }
})
export default class CrearCliente extends Vue {
  nuevoCliente: Cliente = new Cliente({});

  buscarContacto() {
    this.$q
      .dialog({
        component: BuscadorGenerico,
        parent: this,
        endpoint: 'clientes/contactos',
        clase: Contacto,
        opciones: contactoOpcionesBuscador.opciones,
        persistent: true
      })
      .onOk((resultado: Contacto) => {
        this.$set(this.nuevoCliente.contactos, this.nuevoCliente.contactos.length, resultado);
      })
      .onCancel(cancel => {
        console.log(cancel);
      });
  }

  async buscarInstitucion() {
    const buscador = new BuscadorInstitucion([]);
    try {
      const resultado = await buscador.buscar();
      this.$set(this.nuevoCliente.instituciones, this.nuevoCliente.instituciones.length, resultado);
    } catch (e) {
      console.log(e);
    }
  }

  public eliminarContacto(contacto: Contacto, index: number) {
    this.$delete(this.nuevoCliente.contactos, index);
  }

  public eliminarInstitucion(institucion: Institucion, index: number) {
    this.$delete(this.nuevoCliente.instituciones, index);
  }

  public async crearCliente() {
    await Controller.post("clientes", {cliente: this.nuevoCliente});
  }
}
</script>
<style>

</style>
