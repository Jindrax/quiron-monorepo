<template>
  <q-card>
    <q-card-section>
      <mostrar-campo etiqueta="Nombres">
        <q-input v-model="nuevoContacto.nombres"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Apellidos">
        <q-input v-model="nuevoContacto.apellidos"/>
      </mostrar-campo>
      <acumulador ref="acumuladorTelefono" v-model="nuevoContacto.telefonos" acumulable="Telefonos"/>
      <acumulador ref="acumuladorEmail" v-model="nuevoContacto.emails" acumulable="E-mails" :rules="emailRules"/>
      <q-btn class="full-width" label="Crear Contacto" @click="crear"/>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import {Contacto} from '@quiron/classes/dist/entities';
import Acumulador, {AcumuladorValidator} from "components/Utils/Acumulador.vue";

@Component({
  name: 'crear-contacto',
  components: {
    Acumulador,
    MostrarCampo
  }
})
export default class CrearContacto extends Vue {
  nuevoContacto: Contacto = new Contacto({});
  @Ref("acumuladorTelefono") acumuladorTelefono: Acumulador;
  @Ref("acumuladorEmail") acumuladorEmail: Acumulador;

  emailRules: AcumuladorValidator[] = [value => {
    const mailFormat: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(value.match(mailFormat)){
      return true
    }else{
      return "El formato del e-mail es invalido"
    }
  }];

  public crear() {
    if(this.nuevoContacto.nombres == "")
      return this.$q.notify("No se puede crear un contacto sin nombres");
    if(this.nuevoContacto.apellidos == "")
      return this.$q.notify("No se puede crear un contacto sin apellidos");
    if (this.acumuladorTelefono.error)
      return this.$q.notify("Existen errores en los telefonos");
    if (this.acumuladorEmail.error)
      return this.$q.notify("Existen errores en los e-mails");
    this.$emit("creado", Object.assign(new Contacto({}), this.nuevoContacto));
    this.nuevoContacto = new Contacto({});
  }
}
</script>
<style>

</style>
