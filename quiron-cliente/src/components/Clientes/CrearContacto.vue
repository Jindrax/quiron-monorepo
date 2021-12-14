<template>
  <q-card>
    <q-card-section>
      <mostrar-campo etiqueta="Identificacion">
        <q-input v-model="nuevoContacto.identificacion"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Nombres">
        <q-input v-model="nuevoContacto.nombres"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Apellidos">
        <q-input v-model="nuevoContacto.apellidos"/>
      </mostrar-campo>
      <acumulador acumulable="Telefonos" v-model="nuevoContacto.telefonos"/>
      <acumulador acumulable="E-mails" v-model="nuevoContacto.emails"/>
      <q-btn label="Crear Contacto" @click="crear" class="full-width"/>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import {Contacto} from 'quiron_classes/dist/entities';
import Acumulador from "components/Utils/Acumulador.vue";

@Component({
  name: 'crear-contacto',
  components: {
    Acumulador,
    MostrarCampo
  }
})
export default class CrearContacto extends Vue {
  nuevoContacto: Contacto = new Contacto({});

  public crear() {
    this.$emit("creado", Object.assign(new Contacto({}), this.nuevoContacto));
    this.nuevoContacto = new Contacto({});
  }
}
</script>
<style>

</style>
