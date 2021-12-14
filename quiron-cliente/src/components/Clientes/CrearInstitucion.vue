<template>
  <div>
    <mostrar-campo etiqueta="Identificacion">
      <q-input v-model="nuevaInstitucion.identificacion"/>
    </mostrar-campo>
    <q-btn label="Get Coords" @click="getCoords" class="full-width"/>
    <mostrar-campo etiqueta="Latitud">
      <q-input v-model.number="nuevaInstitucion.latitud" type="number"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Longitud">
      <q-input v-model.number="nuevaInstitucion.longitud" type="number"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Direccion">
      <q-input v-model="nuevaInstitucion.direccion"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Departamento">
      <q-select v-model="nuevaInstitucion.departamento" :options="listaDepartamentos" @input="municipios"/>
    </mostrar-campo>
    <mostrar-campo etiqueta="Ciudad">
      <q-select v-model="nuevaInstitucion.ciudad" :options="listaMunicipios"/>
    </mostrar-campo>
    <q-card>
      <q-card-section>
        Contactos
      </q-card-section>
      <q-card-section>
        <q-btn
          :label="'Buscar contacto'"
          @click="buscarContacto"
          class="full-width"
        />
        <presentador-por-tabla :esquema="['nombres', 'apellidos']" :datos="nuevaInstitucion.contactos" @selected="remove"/>
      </q-card-section>
    </q-card>
    <br>
    <q-btn label="Crear Institucion" class="full-width" @click="crear"/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import {Contacto, Institucion} from "quiron_classes/dist/entities";
import Controller from "api/Controller";
import {OpcionesDialogo} from "components/Utils/Interfaces";
import BuscadorGenerico from "components/Utils/BuscadorGenerico.vue";
import PresentadorPorTabla from "components/Utils/PresentadorPorTabla.vue";

@Component({
  name: 'crear-institucion',
  components: {
    PresentadorPorTabla,
    MostrarCampo
  }
})
export default class CrearInstitucion extends Vue {
  nuevaInstitucion: Institucion = new Institucion({});
  listaDepartamentos: string[] = [];
  listaMunicipios: string[] = [];

  async departamentos() {
    return await Controller.get<string>("info/departamentos");
  }

  async municipios() {
    this.nuevaInstitucion.ciudad = "";
    this.listaMunicipios = <string[]>(await Controller.get<string>(`info/municipios?departamento=${this.nuevaInstitucion.departamento}`));
  }

  public getCoords() {
    navigator.geolocation.getCurrentPosition(position => {
      this.nuevaInstitucion.latitud = position.coords.latitude;
      this.nuevaInstitucion.longitud = position.coords.longitude;
    })
  }

  async mounted() {
    this.listaDepartamentos = <string[]>(await this.departamentos());
  }

  buscarContacto() {
    let opciones_buscador: OpcionesDialogo = {
      campos_busqueda: [
        {etiqueta: 'Nombres', valor: 'nombres'},
        {etiqueta: 'Apellidos', valor: 'apellidos'},
        {etiqueta: 'Identificacion', valor: 'identificacion'}
      ],
      campos_presentacion: [
        {etiqueta: 'Nombres', valor: 'nombres'},
        {etiqueta: 'Apellidos', valor: 'apellidos'},
        {etiqueta: 'Identificacion', valor: 'identificacion'}
      ],
      opciones_busqueda: {}
    };
    this.$q
      .dialog({
        component: BuscadorGenerico,
        parent: this,
        endpoint: 'clientes/contactos',
        clase: Contacto,
        opciones: opciones_buscador,
        persistent: true
      })
      .onOk((resultado: Contacto) => {
        this.$set(this.nuevaInstitucion.contactos, this.nuevaInstitucion.contactos.length, resultado);
      })
      .onCancel(cancel => {
        console.log(cancel);
      });
  }

  remove(contacto: Contacto, index: number) {
    this.$delete(this.nuevaInstitucion.contactos, index);
  }

  public crear() {
    this.$emit("creado", Object.assign(new Institucion({}), this.nuevaInstitucion));
    this.nuevaInstitucion = new Institucion({});
  }

}
</script>
<style>

</style>
