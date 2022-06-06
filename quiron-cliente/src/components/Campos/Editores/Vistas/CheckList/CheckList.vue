<template>
  <div class="column q-gutter-y-sm">
    <div class="col column q-gutter-y-sm q-ma-sm">
      <span class="col">Validadores</span>
      <q-expansion-item v-for="(validador, indice) in elementoSync.validadores" :key="elementoSync.etiqueta + '-ch-val-' + validador.etiqueta"
                        :label="validador.etiqueta" header-class="advance-btn" group="validador" class="bg-blue-1 col">
        <div class="column q-gutter-y-sm q-pa-sm q-my-sm">
          <component
            class="col"
            :is="validador.elemento"
            v-bind="{elemento: validador}"
          />
          <mostrar-campo etiqueta="Depende de" class="col">
            <q-select v-model="validadorCondicional" :options="validadoresOpciones" class="col"/>
          </mostrar-campo>
          <mostrar-campo v-if="validadorCondicional.label!==''" etiqueta="Valor" class="col">
            <q-input
              v-if="validadorCondicional.value.elemento === 'entrada-texto' || validadorCondicional.value.elemento === 'entrada-numerica'"
              v-model="valorCondicional" :placeholder="validadorCondicional.label"/>
            <q-select v-else v-model="valorCondicional" :options="validadorCondicional.value.opciones" class="col"
                      emit-value/>
          </mostrar-campo>
          <q-btn class="col full-width advance-btn" icon="save" @click="guardarCondicional(validador)"/>
          <q-btn class="col full-width revert-btn" icon="delete" @click="eliminarValidador(indice)"/>
        </div>
      </q-expansion-item>
      <mostrar-campo etiqueta="Tipo Validador" class="col">
        <q-select v-model="validadorValue" :options="opciones"/>
      </mostrar-campo>
      <mostrar-campo etiqueta="Etiqueta Validador" class="col" :last="true">
        <q-input v-model="etiquetaValidador" placeholder="Etiqueta" v-on:keypress.enter="nuevoValidador"/>
      </mostrar-campo>
      <q-btn label="Añadir" class="full-width advance-btn" @click="nuevoValidador"/>
    </div>
    <q-separator/>
    <div class="col column q-gutter-y-sm q-ma-sm">
      <q-list class="col" separator>
        <q-item-label header>
          Items
        </q-item-label>
        <q-item v-for="(item, index) in elementoSync.items" :key="`item-${index}-${item.substring(0, 10)}`">
          <q-item-section>
            {{item}}
          </q-item-section>
          <q-item-section side>
            <q-btn class="revert-btn" icon="delete" @click="removeItem(index)"/>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-input v-model="nuevoItem" placeholder="Nuevo item" v-on:keypress.enter="addItem"/>
          </q-item-section>
          <q-item-section side>
            <q-btn class="advance-btn" icon="add" @click="addItem"/>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, PropSync, Vue} from 'vue-property-decorator';
import {Campo, CampoCheckList, FabricaCampos} from '@quiron/classes/dist/components/campos/edicion';
import {DiccionarioTiposElementos, TiposElementos} from "@quiron/classes/dist/components/campos";
import {MostrarCampo} from "components/Campos";

@Component({
  name: 'checkList',
  components: {
    'informacion': () => import("../Informacion.vue"),
    'entrada-texto': () => import("../EntradaTexto.vue"),
    'entrada-numerica': () => import("../EntradaNumerica.vue"),
    'seleccion': () => import("../Seleccion.vue"),
    'chequeo': () => import("../Chequeo.vue"),
    'mostrar-campo': MostrarCampo
  }
})
export default class CheckList extends Vue {
  @PropSync('elemento') elementoSync: CampoCheckList;
  validadorValue: { label: string, value: TiposElementos } = {
    label: "",
    value: TiposElementos["entrada-texto"]
  };
  nuevoItem = "";
  etiquetaValidador: string = "";
  opciones = [
    {
      label: DiccionarioTiposElementos[TiposElementos["entrada-texto"]],
      value: TiposElementos["entrada-texto"]
    },
    {
      label: DiccionarioTiposElementos[TiposElementos["entrada-numerica"]],
      value: TiposElementos["entrada-numerica"]
    },
    {
      label: DiccionarioTiposElementos[TiposElementos.seleccion],
      value: TiposElementos.seleccion
    },
    {
      label: DiccionarioTiposElementos[TiposElementos.chequeo],
      value: TiposElementos.chequeo
    }
  ];
  validadorCondicional = {
    label: "",
    value: new Campo()
  };
  valorCondicional = "";

  get validadoresOpciones(){
    return this.elementoSync.validadores.map((validador)=>{
      return {
        label: validador.etiqueta,
        value: validador
      };
    })
  }

  nuevoValidador() {
    this.$set(this.elementoSync.validadores,
      this.elementoSync.validadores.length,
      FabricaCampos.fabricarCampoConEtiqueta(this.validadorValue.value, this.etiquetaValidador));
    this.etiquetaValidador = "";
  }

  eliminarValidador(indice: number) {
    this.$delete(this.elementoSync.validadores,
      indice);
  }

  guardarCondicional(validador: Campo) {
    this.elementoSync.condicionales.push({
      validador: this.validadorCondicional.value,
      valor: this.valorCondicional,
      campoValidado: validador
    });
    console.log(this.elementoSync.condicionales);
  }

  addItem(){
    this.elementoSync.items.push(this.nuevoItem);
    this.nuevoItem = "";
  }

  removeItem(indice: number){
    this.$delete(this.elementoSync.items, indice);
  }
}
</script>
<style>
.title {
  background-color: #00cc00;
}

.title:hover {
  background-color: #b80000;
}
</style>
