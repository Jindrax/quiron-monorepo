<template>
  <q-page>
    <q-card>
      <q-card-section>Nuevo usuario</q-card-section>
      <q-card-section>
        <mostrar-campo :etiqueta="'Identificacion'">
          <q-input v-model="identificacion" type="text"/>
        </mostrar-campo>
        <mostrar-campo :etiqueta="'Nombres'">
          <q-input v-model="nombres" type="text"></q-input>
        </mostrar-campo>
        <mostrar-campo :etiqueta="'Apellidos'">
          <q-input v-model="apellidos" type="text"></q-input>
        </mostrar-campo>
        <mostrar-campo :etiqueta="'Fecha de nacimiento'">
          <selector-fecha v-model="fecha_nacimiento" :tipo="'fecha'"/>
        </mostrar-campo>
        <mostrar-campo :etiqueta="'Roles'">
          <q-select
            v-model="roles_buffer"
            :options="rolesOpciones"
            @filter="filtradoDeRoles"
            @input="sumarRol"
          />
          <q-list>
            <q-item v-for="(rol, indice_rol) in roles" :key="`rol${indice_rol}`" clickable
                    @click="eliminarRol(indice_rol)">
              <q-item-section>{{ rol.identificador }}</q-item-section>
            </q-item>
          </q-list>
        </mostrar-campo>
      </q-card-section>
      <q-card-actions>
        <q-btn class="full-width" label="Crear usuario" @click="crearUsuario"/>
      </q-card-actions>
      <q-card-actions>
        <q-btn class="full-width" label="Test" @click="test"/>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import SelectorFecha from 'components/Utils/SelectorFecha.vue';
import Controller from "api/Controller";
import {Rol, Usuario} from "@quiron/classes/dist/entities";

@Component({
  components: {
    MostrarCampo,
    SelectorFecha
  }
})
export default class CrearUsuarioPagina extends Vue {
  public identificacion: string = '';
  public nombres: string = '';
  public apellidos: string = '';
  public roles: Rol[] = [];
  public roles_servidor: Rol[] = [];
  public roles_buffer: any = "";
  public fecha_nacimiento: number = Date.now();
  public password: string = 'placeholder';

  get rolesOpciones() {
    return this.roles_servidor.map(rol => {
      return {
        label: rol.identificador, value: rol
      };
    });
  }

  public reiniciarDatos() {
    this.identificacion = '';
    this.nombres = '';
    this.apellidos = '';
    this.roles = [];
    this.fecha_nacimiento = Date.now();
  }

  public async crearUsuario() {
    try {
      await Controller.post('usuario', {
        identificacion: this.identificacion,
        nombres: this.nombres,
        apellidos: this.apellidos,
        fecha_nacimiento: this.fecha_nacimiento,
        password: this.password,
        roles: this.roles
      });
      this.reiniciarDatos();
      this.$q.notify({message: "Usuario creado correctamente"});
    } catch (e) {
      console.log(e);
    }
  }

  public filtradoDeRoles(valor: string, exito: Function, fracaso: Function) {
    Controller.get<Rol>('roles', {}, Rol)
      .then(resultado => {
        this.roles_servidor = <Rol[]>resultado;
        exito();
      })
      .catch(error => {
        fracaso();
      });
  }

  public sumarRol(valor: any) {
    this.roles.push(valor.value);
    this.roles_buffer = "";
  }

  public eliminarRol(indice: number) {
    this.$delete(this.roles, indice);
  }

  public async test() {
    console.log("Si estoy funcionando, el que no funciona es el servidor");
    try {
      const usuarios = await Controller.get<Usuario>("usuario", {}, Usuario);
      console.log(usuarios);
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style></style>
