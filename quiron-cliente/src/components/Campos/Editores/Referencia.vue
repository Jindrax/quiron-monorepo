<template>
  <q-expansion-item v-if="referencia.activated" :header-class="referencia.activated? 'bg-teal-10 text-white' : ''"
                    class="full-width"
                    switch-toggle-side>
    <template #header>
      <q-item-section>
        Referencia
      </q-item-section>
      <q-item-section side>
        <q-toggle v-model="referencia.activated"/>
      </q-item-section>
    </template>
    <div class="column q-ma-sm q-gutter-y-sm">
      <q-select v-model="referencia.tipo" :options="tiposRef" class="col"/>
      <div v-if="referencia.tipo === selectorPlantilla" class="col row q-gutter-sm">
        <div class="col">
          <selector-por-capas v-model="referencia.identificador" :arbol="contexto"/>
        </div>
      </div>
      <div v-if="referencia.tipo === selectorEquipo" class="col column q-gutter-sm">
        <div class="col">
          <buscador-unitario v-model="referenciaEquipo" :buscador="buscadorReferenciaEquipo"
                             etiqueta="Referencia Equipo"/>
        </div>
        <mostrar-campo :last="true" class="col" etiqueta="Atributo">
          <q-select v-model="referencia.identificador" :options="opcionesSelector" map-options/>
        </mostrar-campo>
      </div>
      <div v-if="referencia.tipo === selectorCliente" class="col row q-gutter-sm">
        <mostrar-campo :last="true" class="col" etiqueta="Atributo">
          <q-select v-model="referencia.identificador" :options="opcionesSelector" map-options/>
        </mostrar-campo>
      </div>
    </div>
  </q-expansion-item>
  <q-item v-else>
    <q-item-section>
      Referencia
    </q-item-section>
    <q-item-section side>
      <q-toggle v-model="referencia.activated"/>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import {Component, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../MostrarCampo.vue';
import SelectorPorCapas from "components/Utils/SelectorPorCapas.vue";
import {Referencia as ReferenciaClass, TipoReferencia} from "@quiron/classes/dist/components/campos/edicion";
import {getModule} from 'vuex-module-decorators';
import ModuloEditorPlantilla from '../../../store/modules/ModuloEditorPlantilla';
import {BuscadorReferenciaEquipo} from "api/entidades/Buscador";
import {ReferenciaEquipo} from "@quiron/classes/dist/entities";
import BuscadorUnitario from "components/Utils/BuscadorUnitario.vue";

@Component({
  components: {
    MostrarCampo,
    SelectorPorCapas,
    BuscadorUnitario
  }
})
export default class Referencia extends Vue {
  @PropSync('elreferencia') referencia: ReferenciaClass;
  buscadorReferenciaEquipo = new BuscadorReferenciaEquipo(["identificador", "marca"]);
  referenciaEquipo = new ReferenciaEquipo({});
  private editorStore = getModule(ModuloEditorPlantilla);
  private selectorPlantilla = TipoReferencia.PLANTILLA;
  private selectorEquipo = TipoReferencia.EQUIPO;
  private selectorCliente = TipoReferencia.CLIENTE;

  public get contexto() {
    return this.editorStore.contexto;
  }

  public get tiposRef() {
    return [
      TipoReferencia.PLANTILLA,
      TipoReferencia.EQUIPO,
      TipoReferencia.CLIENTE
    ]
  }

  public get opcionesSelector() {
    let opcionesRet = [];
    if (this.referencia.tipo === TipoReferencia.EQUIPO) {
      let opciones = [
        {
          label: "Serial",
          value: "serial"
        },
        {
          label: "Marca",
          value: "marca"
        },
        {
          label: "Modelo",
          value: "modelo"
        },
        {
          label: "Activo Fijo",
          value: "activoFijo"
        }
      ];
      let atributos = this.referenciaEquipo.atributos.elementos;
      let atributosArray = atributos.filter((atributo) => {
        return atributo.elemento === this.referencia.elemento;
      }).map((atributo) => {
        return {
          label: atributo.etiqueta,
          value: atributo.etiqueta
        };
      });
      opcionesRet = [
        ...opciones,
        ...atributosArray
      ];
    }
    if (this.referencia.tipo === TipoReferencia.CLIENTE) {
      let opciones = [
        {
          label: "Institucion",
          value: "institucion.identidad"
        },
        {
          label: "Direccion",
          value: "institucion.direccion"
        },
        {
          label: "Ciudad",
          value: "institucion.ciudad"
        },
        {
          label: "Departamento",
          value: "institucion.departamento"
        }
      ];
      opcionesRet = [
        ...opciones
      ];
    }
    return opcionesRet;
  }
}
</script>
<style>
</style>
