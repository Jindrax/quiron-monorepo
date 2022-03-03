<template>
  <q-card>
    <q-card-section>
      <q-card>
        <q-card-section class="bg-blue-3">
          Validadores
        </q-card-section>
        <q-card-section>
          <mostrar-campo etiqueta="Tipo Validador">
            <q-select v-model="validadorValue" :options="opciones"/>
          </mostrar-campo>
          <mostrar-campo etiqueta="Etiqueta Validador">
            <q-input v-model="etiquetaValidador" placeholder="Etiqueta"/>
          </mostrar-campo>
          <q-btn label="Añadir" class="full-width" @click="nuevoValidador"/>
        </q-card-section>
        <q-card-section>
          <q-expansion-item v-for="validador in elementoSync.validadores" :key="elementoSync.etiqueta + '-ch-val-' + validador.etiqueta"
                            :label="validador.etiqueta"
                            style="border-style: solid; border-width: thin">
            <component
              :is="validador.elemento"
              v-bind="{elemento: validador}"
            />
            <q-separator/>
            <q-card>
              <q-card-section>
                <mostrar-campo etiqueta="Depende de">
                  <q-select v-model="validadorCondicional" :options="validadoresOpciones" class="col"/>
                </mostrar-campo>
                <mostrar-campo v-if="validadorCondicional.label!==''" etiqueta="Valor">
                  <q-input
                    v-if="validadorCondicional.value.elemento === 'entrada-texto' || validadorCondicional.value.elemento === 'entrada-numerica'"
                    v-model="valorCondicional" :placeholder="validadorCondicional.label"/>
                  <q-select v-else v-model="valorCondicional" :options="validadorCondicional.value.opciones" class="col"
                            emit-value/>
                </mostrar-campo>
              </q-card-section>
              <q-card-section>
                <q-btn class="full-width" icon="save" @click="guardarCondicional(validador)"/>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card-section>
      </q-card>
    </q-card-section>
    <q-card-section>
      <q-card>
        <q-card-section class="bg-blue-3">
          Items
        </q-card-section>
        <q-card-section>
          <q-list>
            <q-item-label header>
              Items
            </q-item-label>
            <q-item v-for="(item, index) in elementoSync.items" :key="`item-${index}-${item.substring(0, 10)}`">
              <q-item-section>
                {{item}}
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <div class="row">
                  <q-input class="col" v-model="nuevoItem" placeholder="Nuevo item"/>
                  <q-btn class="col-2" icon="add" @click="addItem"/>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-card-section>
  </q-card>
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
