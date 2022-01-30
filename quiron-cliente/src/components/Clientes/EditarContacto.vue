<template>
  <q-card>
    <q-card-section>
      <mostrar-campo etiqueta="Nombres">
        <q-input v-model="localContacto.nombres"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Apellidos">
        <q-input v-model="localContacto.apellidos"/>
      </mostrar-campo>
      <acumulador acumulable="Telefonos" v-model="localContacto.telefonos"/>
      <acumulador acumulable="E-mails" v-model="localContacto.emails"/>
      <q-btn label="Editar Contacto" @click="editar" class="full-width"/>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import {Contacto} from '@quiron/classes/dist/entities';
import Acumulador from "components/Utils/Acumulador.vue";

@Component({
  name: 'editar-contacto',
  components: {
    Acumulador,
    MostrarCampo
  }
})
export default class EditarContacto extends Vue {
  @Prop() contacto!: Contacto;
  localContacto: Contacto = Object.assign(new Contacto({}), this.contacto);

  public editar() {
    this.$emit("editado", this.contacto, this.localContacto);
  }
}
</script>
<style>

</style>
