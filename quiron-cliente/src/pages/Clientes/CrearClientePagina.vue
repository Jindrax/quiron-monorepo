<template>
  <q-page>
    <div>
      <mostrar-campo etiqueta="Nombre">
        <q-input v-model="nuevoCliente.nombre"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Identificacion">
        <q-input v-model="nuevoCliente.identificacion"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Direccion">
        <q-input v-model="nuevoCliente.direccion"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Telefono">
        <q-input v-model="nuevoCliente.telefono"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Contrato">
        <q-input v-model="nuevoCliente.contrato"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Contacto">
        <div>
          <q-item v-if="nuevoCliente.contacto.id">
            <q-item-section avatar>
              <q-avatar>
                <img alt="avatar_img" src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              {{ `${nuevoCliente.contacto.nombres} ${nuevoCliente.contacto.apellidos}` }}
            </q-item-section>
            <q-item-section side>
              <q-btn class="revert-btn" icon="cancel" @click="eliminarContactoPrincipal"/>
            </q-item-section>
          </q-item>
          <q-btn
            v-else
            :label="'Buscar contacto'"
            class="full-width advance-btn"
            @click="buscarContactoPrincipal"
          />
        </div>
      </mostrar-campo>
      <q-separator/>
      <q-btn class="full-width advance-btn" label="Crear Cliente" @click="crearCliente"/>
    </div>
  </q-page>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import {Cliente, Contacto} from "@quiron/classes/dist/entities";
import CrearInstitucion from "components/Clientes/CrearInstitucion.vue";
import CrearContacto from "components/Clientes/CrearContacto.vue";
import PresentadorPorTabla from "components/Utils/PresentadorPorTabla.vue";
import Controller from "api/Controller";
import {contactoOpcionesBuscador} from "api/entidades/BuscadorEntidad";
import {BuscadorClienteContactoHandler, BuscadorGenericoHandler} from "components/Utils/BuscadorGenericoHandler";

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

  buscarContactoPrincipal() {
    BuscadorGenericoHandler<Contacto>(
      this,
      Contacto,
      contactoOpcionesBuscador,
      this.$q,
      (resultado) => {
        this.$set(this.nuevoCliente, "contacto", resultado);
      },
      cancel => {
        console.log(cancel);
      })
  }

  eliminarContactoPrincipal() {
    this.$set(this.nuevoCliente, "contacto", new Contacto({}));
  }

  buscarContactos() {
    BuscadorGenericoHandler(
      this,
      Contacto,
      contactoOpcionesBuscador,
      this.$q,
      (resultado: Contacto) => {
        this.$set(this.nuevoCliente.contactos, this.nuevoCliente.contactos.length, resultado);
      },
      cancel => {
        console.log(cancel);
      }
    );
  }

  public eliminarContacto(contacto: Contacto, index: number) {
    this.$delete(this.nuevoCliente.contactos, index);
  }

  public async crearCliente() {
    try{
      await Controller.post("clientes", {cliente: this.nuevoCliente});
      this.$q.notify("Se ha creado el cliente correctamente");
      this.nuevoCliente = new Cliente({});
    }catch (e) {
      console.log(e);
    }
  }

  test() {
    BuscadorClienteContactoHandler(
      this,
      this.$q,
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
}
</script>
<style>

</style>
