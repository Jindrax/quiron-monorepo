<template>
  <q-dialog @hide="onDialogHide" persistent ref="dialog">
    <q-card class="q-dialog-plugin">
      <q-card-section class="q-px-none">
        <q-list class="q-px-none">
          <q-item-label class="seccion" header>Campos</q-item-label>
          <q-item>
            <q-item-section>
              <q-input
                :key="'campo_creacion_' + campo_creacion.etiqueta"
                :placeholder="campo_creacion.etiqueta"
                @keyup.enter.native="crear"
                v-for="(campo_creacion,
                indice_busqueda) in opciones.campos_creacion"
                v-model="valores_creacion[campo_creacion.valor]"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn @click="onOKClick" color="primary" label="OK"/>
        <q-btn @click="onCancelClick" color="primary" label="Cancelar"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'vue-property-decorator';
import Controller from 'api/Controller';
import { OpcionesDialogo } from './Interfaces';

interface DialogPlugin {
  show();
  hide();
}

@Component
export default class CreadorGenerico extends Vue implements DialogPlugin {
  @Ref('dialog') dialog_element: DialogPlugin;
  @Prop() clase: string;
  @Prop() opciones: OpcionesDialogo;
  public valores_creacion: any = {};

  public get api_endpoint() {
    return (
      this.clase +
      '.crear' +
      this.clase.charAt(0).toUpperCase() +
      this.clase.slice(1)
    );
  }

  public mounted() {
    for (let campo_creacion of this.opciones.campos_creacion) {
      this.valores_creacion[campo_creacion.valor] = '';
    }
  }

  public crear() {
    // Controlador.rpc(this.api_endpoint, [this.valores_creacion])
    //   .then((resultado: any) => {
    //     this.$emit('ok', resultado);
    //     this.hide();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     this.$q.notify('Ocurrio un error en el servidor');
    //   });
  }

  public show() {
    this.dialog_element.show();
  }

  public hide() {
    this.dialog_element.hide();
  }

  public onDialogHide() {
    this.$emit('hide');
  }

  public onOKClick() {
    this.crear();
  }

  public onCancelClick() {
    this.hide();
  }
}
</script>
<style>
.seccion {
  font-size: 120%;
  color: black;
}
</style>
