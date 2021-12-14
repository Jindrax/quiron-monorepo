<template>
  <q-page>
    <q-card>
      <q-item>
        <q-item-section>
          <q-btn
            :label="'Buscar rol a editar'"
            @click="buscarRol"
            class="full-width"
          />
        </q-item-section>
      </q-item>
      <q-card-section>
        <mostrar-campo etiqueta="Identificador">
          <q-input v-model="rol.identificador"/>
        </mostrar-campo>
        <mostrar-campo etiqueta="Descripcion">
          <q-input v-model="rol.descripcion" filled autogrow/>
        </mostrar-campo>
        <q-markup-table separator="cell">
          <thead>
          <tr>
            <th colspan="2">Permisos disponibles</th>
          </tr>
          <tr>
            <th>Recurso</th>
            <th>Descripcion</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(resource, index) in permisosTable" :key="`resource_${index}`" class="q-chip--clickable"
              @click="enablePermiso(index)">
            <td>
              <q-badge>{{ resource.action }}</q-badge>
              {{ resource.resource }}
            </td>
            <td>{{ resource.description }}</td>
          </tr>
          </tbody>
        </q-markup-table>
        <q-markup-table separator="cell">
          <thead>
          <tr>
            <th colspan="2">Permisos habilitados</th>
          </tr>
          <tr>
            <th>Recurso</th>
            <th>Descripcion</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(resource, index) in permisosEnabled" :key="`enabledresource_${index}`" class="q-chip--clickable"
              @click="disablePermiso(index)">
            <td>
              <q-badge>{{ resource.action }}</q-badge>
              {{ resource.resource }}
            </td>
            <td>{{ resource.description }}</td>
          </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
      <q-card-actions>
        <q-btn
          label="Crear rol"
          @click="crearRol"
          class="full-width"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {MostrarCampo} from 'components/Campos';
import Controller from 'api/Controller';
import {Permission} from "quiron_classes/dist/auth";
import {OpcionesDialogo} from "components/Utils/Interfaces";
import BuscadorGenerico from "components/Utils/BuscadorGenerico.vue";
import Plantilla from "quiron_classes/dist/entities/Plantilla";
import {Rol} from "quiron_classes/dist/entities";

@Component({
  components: {
    MostrarCampo
  }
})
export default class CrearRolPagina extends Vue {
  public rol: Rol = new Rol({});
  public permisos: Record<string, Permission> = {};
  public permisosBank: Record<string, Permission> = {};
  public permisosEnabled: Permission[] = [];

  public reiniciarDatos() {
    this.rol = new Rol({});
    this.permisos = this.permisosBank;
    this.permisosEnabled = [];
  }

  public processPermisos(): Record<string, Permission> {
    const permisos: Record<string, Permission> = {};
    for (const permission of this.permisosEnabled) {
      permisos[`${permission.action}@${permission.resource}`] = permission;
    }
    return permisos;
  }

  public async crearRol() {
    try {
      await Controller.post('rol', {
        identificador: this.rol.identificador,
        descripcion: this.rol.descripcion,
        permisos: this.processPermisos()
      });
      this.reiniciarDatos();
      this.$q.notify({message: "Rol creado correctamente"});
    } catch (e) {
      console.log(e);
      this.$q.notify({message: e.message});
    }
  }

  public async mounted() {
    this.permisos = <Record<string, Permission>>(await Controller.get<Record<string, Permission>>('permisos'));
    console.log(this.permisos);
    this.permisosBank = JSON.parse(JSON.stringify(this.permisos));
  }

  get permisosTable(): Permission[] {
    const table: Permission[] = [];
    for (const permission of Object.values(this.permisos)) {
      table.push(permission);
    }
    return table;
  }

  public enablePermiso(index: number): void {
    const permiso = this.permisosTable[index];
    this.$set(this.permisosEnabled, this.permisosEnabled.length, this.permisosTable[index]);
    this.$delete(this.permisos, `${permiso.action}@${permiso.resource}`);
  }

  public disablePermiso(index: number): void {
    const permiso = this.permisosEnabled[index];
    this.$delete(this.permisosEnabled, this.permisosEnabled.indexOf(permiso));
    this.$set(this.permisos, `${permiso.action}@${permiso.resource}`, permiso);
  }

  public syncPermissionsToRol(rol: Rol) {
    for (const permission of Object.values(rol.permisos)) {
      this.$set(this.permisosEnabled, this.permisosEnabled.length, permission);
      this.$delete(this.permisos, `${permission.action}@${permission.resource}`);
    }
  }

  public buscarRol() {
    let opciones_buscador: OpcionesDialogo = {
      campos_busqueda: [
        {etiqueta: 'Identificador', valor: 'identificador'}
      ],
      campos_presentacion: [
        {etiqueta: 'Identificador', valor: 'identificador'},
        {etiqueta: 'Descripcion', valor: 'descripcion'}
      ],
      opciones_busqueda: {}
    };
    this.$q
      .dialog({
        component: BuscadorGenerico,
        parent: this,
        endpoint: 'roles',
        clase: Rol,
        opciones: opciones_buscador,
        persistent: true
      })
      .onOk((resultado: Rol) => {
        this.rol = resultado;
        this.syncPermissionsToRol(resultado);
      })
      .onCancel(cancel => {
        console.log(cancel);
      });
  }
}
</script>

<style></style>
