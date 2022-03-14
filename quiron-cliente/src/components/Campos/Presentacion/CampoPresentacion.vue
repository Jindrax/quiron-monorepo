<template>
  <component :is="elemento.elemento" v-if="dataSync[localPath]!==undefined || elemento.elemento === 'seccion'" v-bind="params"/>
</template>

<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import {
  CheckList,
  Chequeo,
  EntradaNumerica,
  EntradaTexto,
  Fecha,
  Firma,
  Imagen,
  Informacion,
  Mediciones,
  Seccion,
  Seleccion,
  Tabla,
  TablaCompuesta
} from './Vistas';
import {Campo as CampoGenerico} from '@quiron/classes/dist/components/campos/edicion';

@Component({
  name: 'campo-presentacion',
  components: {
    EntradaNumerica,
    EntradaTexto,
    Seccion,
    Chequeo,
    Seleccion,
    Tabla,
    TablaCompuesta,
    Fecha,
    Firma,
    Imagen,
    Mediciones,
    Informacion,
    CheckList
  }
})
export default class Campo extends Vue {
  @Prop() elemento: CampoGenerico;
  @Prop() path: string;
  @PropSync('data') dataSync;

  public get localPath() {
    return this.path + '/' + this.elemento.etiqueta;
  }

  public get params() {
    return {
      elemento: this.elemento,
      path: this.localPath,
      data: this.dataSync
    };
  }
}
</script>

<style></style>
