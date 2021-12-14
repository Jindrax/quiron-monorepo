<template>
  <component :is="elemento.elemento" v-bind="params" v-if="existo" class="q-mx-sm"/>
</template>

<script lang="ts">
import {Component, Prop, PropSync, Vue, Watch} from 'vue-property-decorator';
import MostrarCampo from '../MostrarCampo.vue';
import {
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
import {Campo as CampoGenerico, Referencia} from 'quiron_classes/dist/components/campos/edicion';
import Validador from '../../../api/clases/Plantillas/Campos/Recolectores/Condicionales/Validador';
import Verificador from '../../../api/clases/Plantillas/Campos/Recolectores/Condicionales/Verificador';
import {getModule} from "vuex-module-decorators";
import {TiposElementos} from "quiron_classes/dist/components/campos";
import ModuloLlenadoPlantilla from "../../../store/modules/ModuloLlenadoPlantilla";

@Component({
  name: 'campo',
  components: {
    MostrarCampo,
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
    Informacion
  }
})
export default class Campo extends Vue {
  @Prop() elemento: CampoGenerico;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;
  public existo: boolean = true;
  public validador: Validador = new Validador();
  private store = getModule(ModuloLlenadoPlantilla);

  public get localPath() {
    return this.path + '/' + this.elemento.etiqueta;
  }

  public get params() {
    return {
      elemento: this.elemento,
      path: this.localPath,
      printable: this.printable,
      data: this.dataSync
    };
  }

  created() {
    this.setConditions();
    this.setReferences();
  }

  @Watch('elemento.dependiente', {deep: true})
  onDependiente() {
    this.setConditions();
  }

  @Watch('elemento.referencia', {deep: true})
  onReferenciaChange() {
    this.setReferences();
  }

  private actualizarCompendio() {
    if (this.existo) {
      if (this.elemento.elemento != TiposElementos.seccion) {
        this.store.insertarElemento({path: this.localPath, elemento: this.elemento.elemento});
      }
    } else {
      this.store.removerElemento(this.localPath);
    }
  }

  public setConditions() {
    this.elemento.dependiente.conditions.forEach((condition) => {
      let verificador: Verificador = this.validador.instalarVerificador(condition, '');
      this.$watch(() => {
        return this.dataSync[condition.parent];
      }, (val) => {
        verificador.verificar(val);
        this.existo = this.validador.validar();
        this.actualizarCompendio();
      });
    });
    this.existo = this.validador.validar();
    this.actualizarCompendio();
  }

  public setReferences() {
    if (!this.elemento.referencia) {
      this.elemento.referencia = new Referencia();
    }
    if (this.elemento.referencia?.activated) {
      this.$watch(() => {
        return this.store.compendio[this.elemento.referencia.identificador];
      }, (val) => {
        this.$set(this.dataSync, this.localPath, val);
      });
    }
  }
}
</script>

<style></style>
