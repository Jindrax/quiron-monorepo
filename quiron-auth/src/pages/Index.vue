<template>
  <q-page class="flex flex-center">
    <q-list separator>
      <mostrar-campo :etiqueta="'Identificacion'">
        <q-input v-model="objeto.identificacion"/>
      </mostrar-campo>
      <mostrar-campo :etiqueta="'Contraseña'">
        <q-input v-model="objeto.password" type="password" @keypress.enter.native="resolverAccion"/>
      </mostrar-campo>
      <template v-if="autenticacion_anormal">
        <mostrar-campo
          v-if="tipo_recolector==='c'||tipo_recolector==='i'||tipo_recolector==='ci'"
          ref="mostrar"
          :etiqueta="'Confirmar Contraseña'"
        >
          <q-input v-model="objeto.confirmacion" type="password"/>
        </mostrar-campo>
        <div v-if="tipo_recolector==='i'||tipo_recolector==='ci'">
          <div style="width: 100%">
            <div class="row text-subtitle1">Firma</div>
            <div class="row">
              <panel-firma ref="firma" style="width: 100%"/>
            </div>
          </div>
        </div>
      </template>
      <q-item>
        <q-item-section>
          <q-btn
            :label="labelResolver"
            @click="resolverAccion"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import MostrarCampo from "components/MostrarCampo.vue";
import PanelFirma from 'components/PanelFirma.vue';
import Controlador from "src/api/Controlador";
import {Usuario} from "@quiron/classes/dist/entities";
import {ErrorEnum} from '@quiron/classes/dist/errors';
import {LocalStorage} from "quasar";

@Component({
  components: {
    MostrarCampo,
    PanelFirma
  }
})
export default class PageIndex extends Vue {
  public objeto = {
    identificacion: "",
    password: "",
    confirmacion: "",
    cambios: {
      firma: ""
    }
  }
  public autenticacion_anormal: boolean = false;
  public tipo_recolector: string = '';
  @Ref('firma') firmaRef: PanelFirma;

  public get labelResolver() {
    switch (this.tipo_recolector) {
      case '':
        return 'Iniciar sesion';
      case 'c':
        return 'Cambiar contraseña';
      case 'i':
        return 'Actualizar usuario';
      case 'ci':
        return 'Actualizar usuario';
    }
  }

  public async login() {
    try {
      let respuesta = await Controlador.posteo<any>("session", this.objeto, {
        withCredentials: true
      });
      delete respuesta.token;
      LocalStorage.set("usuario", respuesta);
      this.reinicarComponente();
      if (!process.env.DEV) {
        window.location.replace(window.location.origin);
      }
    } catch (e) {
      this.$q.notify(e.message);
      switch (e.code) {
        case ErrorEnum.CAMBIO_PASS:
          this.autenticacion_anormal = true;
          this.tipo_recolector = 'c';
          break;
        case ErrorEnum.FALTA_INFORMACION:
          this.autenticacion_anormal = true;
          this.tipo_recolector = 'ci';
          break;
      }
    }
  }

  public async cambiarPassword() {
    if (this.objeto.password == this.objeto.confirmacion) {
      try {
        console.log(await Controlador.actualizar<Usuario>("session/pass", this.objeto, undefined, Usuario));
        this.$q.notify("Contraseña actualizada correctamente");
        this.reinicarComponente();
      } catch (e) {
        console.log(e);
      }
    } else {
      this.$q.notify('Las contraseñas no coinciden');
    }
  }

  public resolverAccion() {
    switch (this.tipo_recolector) {
      case '':
        this.login();
        break;
      case 'c':
        this.cambiarPassword();
        break;
      case 'i':
        this.nuevoUsuario();
        break;
      case 'ci':
        this.nuevoUsuario();
        break;
    }
  }

  public async nuevoUsuario() {
    if (this.objeto.password == this.objeto.confirmacion) {
      try {
        this.objeto.cambios.firma = this.firmaRef.guardar_firma();
        console.log(await Controlador.actualizar<Usuario>("session/info", this.objeto, undefined, Usuario));
        this.$q.notify(
          'Usuario actualizado correctamente puede iniciar sesion normalmente'
        );
      } catch (error) {
        this.$q.notify(error.message);
      }
    } else {
      this.$q.notify('Las contraseñas no coinciden');
    }
  }

  private reinicarComponente() {
    this.objeto.identificacion = '';
    this.objeto.password = '';
    this.objeto.confirmacion = '';
    this.objeto.cambios.firma = '';
    this.autenticacion_anormal = false;
    this.tipo_recolector = '';
  }
};
</script>
