<template>
  <q-card v-if="plantilla.modelo !== {}">
    <q-card-section class="q-px-none">
      <div>
        <q-toolbar class="bg-indigo-11 shadow-11 q-mb-sm">
          <q-pagination
            :direction-links="true"
            :max="pages.length"
            :max-pages="5"
            v-model="current_page"
          >
          </q-pagination>
          <q-btn @click="addPage" icon="add"/>
          <q-space/>
          <q-select
            :options="opcionesListaElementos"
            @keypress.enter.native="addElementoCanvas"
            class="element_selector"
            emit-value
            map-options
            placeholder="Seleccione campo"
            v-model="selector_canvas"
          />
          <q-btn @click="addElementoCanvas" icon="add"/>
          <q-btn @click="addBlank" icon="aspect_ratio"/>
        </q-toolbar>
        <container :bubbleUp="true" :cellSize="cell_size" :defaultSize="default_size"
                   :layout.sync="pages[current_page-1]"
                   :maxColumnCount="400"
                   class="bg-grey-4 a4" id="toPDF">
          <box :boxId="indice_blank" :key="indice_blank" :resizeVisible="false" class="bg-amber box_border"
               v-for="(blank, indice_blank) in blanks_per_page[current_page-1]"></box>
          <box :boxId="elemento.etiqueta" :key="obtenerKey(elemento)" :resizeVisible="false" class="box_border"
               v-for="(elemento) in elements_per_page[current_page-1]">
            <campo
              :elemento="elemento"
              :path="'\\raiz'"
              :plantilla="plantilla_llena"
              :printable="true"
              @click.native.stop.prevent="test"
              class="campo"
              ref="campos"
            />
          </box>
        </container>
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Campo from './Recolectores/Campo.vue';
import { Box, Container } from '@dattn/dnd-grid';
import {Campo as ClaseCampo} from 'quiron_classes/dist/components/campos/edicion';
import { TiposElementos } from 'quiron_classes/dist/components/campos';

@Component({
  name: 'previsualizador',
  components: {
    Campo,
    Container,
    Box
  }
})
export default class Previsualizador extends Vue {
  @Prop() plantilla: any;
  public plantilla_llena: any = {};
  public current_page = 1;
  public pages = [[]];
  public elements_per_page: [ClaseCampo[]] = [[]];
  public blanks_per_page = [[]];
  public cell_size = {
    w: 1,
    h: 1
  };
  public default_size = {
    w: 100,
    h: 20
  };
  public captura = '';
  public selector_canvas: ClaseCampo = new ClaseCampo();

  get listaElementos() {
    let retorno = [];
    for (let elemento of this.plantilla.modelo.elementos) {
      retorno.push(elemento);
      if (elemento.elementos != undefined && elemento.elementos.length > 0) {
        retorno = retorno.concat(this.recursionElementos(elemento));
      }
    }
    return retorno;
  }

  get opcionesListaElementos() {
    let retorno = [];
    retorno.push({
      label: 'Identificador',
      value: new ClaseCampo(TiposElementos['entrada-texto'], 'Identificador')
    });
    retorno.push({
      label: 'Serial',
      value: new ClaseCampo(TiposElementos['entrada-texto'], 'Serial')
    });
    retorno.push({
      label: 'Version',
      value: new ClaseCampo(TiposElementos['entrada-texto'], 'Version')
    });
    retorno = retorno.concat(this.listaElementos.map((elemento: ClaseCampo) => {
      return {
        label: elemento.etiqueta,
        value: elemento
      };
    }));
    return retorno;
  }

  public test() {
  }

  public recursionElementos(elemento) {
    let retorno = [];
    for (let hijo of elemento.elementos) {
      retorno.push(hijo);
      if (hijo.elementos != undefined && hijo.elementos.length > 0) {
        retorno = retorno.concat(this.recursionElementos(hijo));
      }
    }
    return retorno;
  }

  public obtenerKey(elemento) {
    if (elemento.elementos) {
      return elemento.etiqueta + elemento.elementos.length;
    } else {
      return elemento.etiqueta;
    }
  }

  public addElementoCanvas() {
    this.elements_per_page[this.current_page - 1].push(this.selector_canvas);
    this.selector_canvas = new ClaseCampo();
  }

  public addBlank() {
    this.blanks_per_page[this.current_page - 1].push({});
  }

  public addPage() {
    this.current_page = this.pages.length;
    this.$set(this.pages, this.current_page, []);
    this.$set(this.elements_per_page, this.current_page, []);
    this.$set(this.blanks_per_page, this.current_page, []);
    this.current_page++;
  }
}
</script>
<style>
@import "../../../node_modules/@dattn/dnd-grid/dist/dnd-grid.css";

.a4 {
  width: 829px;
}

.box_border {
  border: 1px solid black;
  z-index: 10;
}

.element_selector {
  width: 20vw;
}

.campo {
  z-index: 0;
}
</style>
