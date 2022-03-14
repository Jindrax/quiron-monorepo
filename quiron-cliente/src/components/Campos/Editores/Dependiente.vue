<template>
  <q-expansion-item v-if="dependiente.activated" switch-toggle-side
                    :header-class="dependiente.activated? 'bg-blue-grey-10 text-white' : ''">
    <template #header>
      <q-item-section>
        Dependiente
      </q-item-section>
      <q-item-section side>
        <q-toggle v-model="dependiente.activated"/>
      </q-item-section>
    </template>
    <q-card class="bg-blue-grey-1" bordered>
      <q-card-section>
        <!--q-btn label="Show context" @click="showContext"/-->
        <selector-por-capas :arbol="contexto" v-model="parent" @elemento="processParent"/>
        <q-separator/>
        <mostrar-campo :etiqueta="'Valor esperado'">
          <q-select v-if="value_options !== null" v-model="expected_value" :options="value_options"/>
          <q-input v-else v-model="expected_value"/>
        </mostrar-campo>
        <q-separator/>
        <mostrar-campo :etiqueta="'Operador condicional'">
          <q-select
            :options="boolean_options"
            color="primary"
            inline
            v-model="boolean_component"
          />
        </mostrar-campo>
        <q-separator/>
        <mostrar-campo :etiqueta="'Operador comparativo'">
          <q-select
            :options="boolean_comparators"
            color="primary"
            inline
            v-model="boolean_comparator"
          />
        </mostrar-campo>
        <q-separator/>
        <q-btn @click="addCondition" class="full-width advance-btn" label="Añadir"/>
      </q-card-section>
      <q-card-section>
        <q-table
          :columns="conditions_columns"
          :data="table_data"
          @row-click="clickTabla"
          title="Condiciones"
          :grid="$q.screen.xs"
          table-header-class="cabecera"
          title-class="cabecera"
        />
      </q-card-section>
    </q-card>
  </q-expansion-item>
  <q-item v-else>
    <q-item-section>
      Dependiente
    </q-item-section>
    <q-item-section side>
      <q-toggle v-model="dependiente.activated"/>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue, Watch} from 'vue-property-decorator';
import MostrarCampo from '../MostrarCampo.vue';
import {CondicionDependiente, Dependiente} from '@quiron/classes/dist/components/campos/edicion/Dependiente';
import {getModule} from 'vuex-module-decorators';
import ModuloEditorPlantilla from '../../../store/modules/ModuloEditorPlantilla';
import SelectorPorCapas from "components/Utils/SelectorPorCapas.vue";
import Comparadores from "clases/Plantillas/Campos/Recolectores/Condicionales/Comparadores";
import VerificadorLogicoEnum from "enumeradores/Plantillas/Recolectores/Condicionales/VerificadorLogicoEnum";
import {Campo, CampoSeleccion} from "@quiron/classes/dist/components/campos/edicion";
import {TiposElementos} from "@quiron/classes/dist/components/campos";

@Component({
  components: {
    MostrarCampo,
    SelectorPorCapas
  }
})
export default class CampoEditarDependiente extends Vue {
  @PropSync('dep') dependiente: Dependiente;
  @Prop() banco_datos: Record<string, string>;
  public parent = '';
  public value_options: string[] | null = null;
  public expected_value = '';
  public boolean_component: string = '';
  public boolean_options: any = Object.getOwnPropertyNames(VerificadorLogicoEnum);
  public boolean_comparator: string = '';
  public boolean_comparators: any = Object.getOwnPropertyNames(Comparadores);
  public conditions_columns = [
    {
      name: 'parent',
      required: true,
      label: 'Padre',
      align: 'left',
      field: row => row.parent,
      format: val => `${val}`,
      sortable: true
    },
    {
      name: 'expected_value',
      required: true,
      label: 'Valor esperado',
      align: 'left',
      field: row => row.expected_value,
      format: val => `${val}`,
      sortable: true
    },
    {
      name: 'operator',
      required: true,
      label: 'Operador',
      align: 'left',
      field: row => row.operator,
      format: val => `${val}`,
      sortable: true
    },
    {
      name: 'comparator',
      required: true,
      label: 'Comparador',
      align: 'left',
      field: row => row.comparator,
      format: val => `${val}`,
      sortable: true
    }
  ];
  private editorStore = getModule(ModuloEditorPlantilla);

  public processParent(parent: Campo) {
    switch (parent.elemento) {
      case TiposElementos.seleccion:
      case TiposElementos.chequeo:
        this.value_options = (parent as CampoSeleccion).opciones;
        break;
      default:
        this.value_options = null;
    }
  }

  public showContext() {
    console.log(this.contexto);
  }

  public get contexto() {
    return this.editorStore.contexto;
  }

  public get table_data(): any {
    let table = [];
    this.dependiente.conditions.forEach((condition, indice) => {
      table.push({
        parent: condition.parent,
        expected_value: condition.expected_value,
        operator: condition.operator,
        comparator: condition.comparator,
        locator: indice
      });
    });
    return table;
  }

  public parents(): any {
    let parents_sanitized = [];
    //console.log('Banco de datos: ', this.banco_datos);
    if (!this.banco_datos) {
      //console.log('Calculando desde el Store');
      for (let elemento of Object.keys(this.editorStore.plantilaUnicaEditor)) {
        switch (this.editorStore.plantilaUnicaEditor[elemento]) {
          case 'entrada-texto':
          case 'entrada-numerica':
          case 'seleccion':
          case 'chequeo':
            parents_sanitized.push({
              label: `${elemento} : ${this.editorStore.plantilaUnicaEditor[elemento]}`,
              value: elemento
            });
            break;
        }
      }
    } else {
      //console.log('Calculando desde el Banco de datos');
      for (let elemento of Object.keys(this.banco_datos)) {
        switch (this.banco_datos[elemento]) {
          case 'entrada-texto':
          case 'entrada-numerica':
          case 'seleccion':
          case 'chequeo':
            parents_sanitized.push({
              label: `${elemento} : ${this.banco_datos[elemento]}`,
              value: elemento
            });
            break;
        }
      }
    }
    return parents_sanitized;
  }

  @Watch('dependiente', {deep: true})
  public dependienteChanged(val, old) {
    //console.log(this.dependiente);
  }

  public addCondition() {
    if (this.boolean_component != '') {
      console.log("Padre elemento", this.editorStore.elementoContexto(this.parent));
      this.dependiente.conditions.push(
        new CondicionDependiente(
          this.parent,
          this.editorStore.elementoContexto(this.parent).elemento,
          this.expected_value,
          this.boolean_component,
          this.boolean_comparator
        )
      );
      this.parent = '';
      this.expected_value = '';
      this.boolean_component = '';
      this.boolean_comparator = '';
    } else {
      this.$q.notify('Debe seleccionar un operador condicional');
    }
  }

  public clickTabla(evt, row) {
    this.$delete(this.dependiente.conditions, Number(row.locator));
  }
}
</script>
<style>
.cabecera {
  background: rgb(0, 80, 150);
  color: #ffffff;
  font-size: medium;
}

.fondo {
  background: #9FB5C3;
  color: #000000;
}

.fondo button {
  background: rgb(0, 80, 150);
  color: #ffffff;
}
</style>
