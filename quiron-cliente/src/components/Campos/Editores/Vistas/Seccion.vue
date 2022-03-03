<template>
  <div>
    <selector :elemento="elemento.elemento" :reducido="reducido" @nuevo="nuevoElementoSeleccionado"/>
    <br>
    <div
      @dragenter.prevent
      @dragover.prevent
      @drop.stop.prevent="dropAtFirst"
      class="espacio-blanco full-width"
    >
      Zona de insercion de elementos
    </div>
    <q-list>
      <campo-editar
        :elemento="elementoHijo"
        :indice="indice"
        :maxindice="elemento.elementos.length"
        :path="path"
        :patron="patron"
        :key="elementoHijo.elemento + elementoHijo.etiqueta"
        @dragend.native.stop="stopDragging($event)"
        @dragenter.prevent
        @dragstart.native.stop="startDragging($event, elementoHijo, indice)"
        @remove="remove(indice)"
        @drag.native.stop="dragScroll($event)"
        class="texto-generico campo-editar-draggable"
        v-for="(elementoHijo, indice) in elemento.elementos"
        @cloned="nuevoElementoSeleccionado"
        @moveup="moveUp(indice)"
        @movedown="moveDown(indice)"
      />
    </q-list>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import {Prop, Vue} from 'vue-property-decorator';
import Selector from '../Selector.vue';
import {Campo, CampoSeccion} from '@quiron/classes/dist/components/campos/edicion';
import {getModule} from 'vuex-module-decorators';
import ModuloEditorPlantilla from '../../../../store/modules/ModuloEditorPlantilla';
import {TiposElementos} from "@quiron/classes/dist/components/campos";

let stop = true;

function scrollDrag(step: number) {
  window.scrollBy(0, step);
  if (!stop) {
    setTimeout(function () {
      scrollDrag(step)
    }, 100);
  }
}

@Component({
  name: 'seccion',
  components: {
    'campo-editar': () => import("components/Campos/Editores/CampoEditar.vue"),
    'selector': Selector
  }
})
export default class Seccion extends Vue {
  @Prop() elemento: CampoSeccion;
  @Prop() path: string;
  @Prop({default: ()=>[]}) reducido: TiposElementos[];
  @Prop({default: false}) patron: boolean;
  private editorStore = getModule(ModuloEditorPlantilla);

  nuevoElementoSeleccionado(elementoNuevo: Campo) {
    this.$set(this.elemento.elementos, this.elemento.elementos.length, elementoNuevo);
  }

  startDragging(event: DragEvent, elemento: Campo, indice: number) {
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.effectAllowed = 'move';
    let holder = {
      elemento: elemento,
      indiceFinal: 0,
      terminado: false
    };
    this.editorStore.iniciarDrag(holder);
    setTimeout(() => {
      this.remove(indice);
    }, 0);
  }

  dragScroll(event: DragEvent) {
    stop = true;
    if (event.clientY < 150) {
      stop = false;
      scrollDrag(-1)
    }
    if (event.clientY > (window.innerHeight - 150)) {
      stop = false;
      scrollDrag(1)
    }
  }

  stopDragging(event: DragEvent) {
    if (!this.editorStore.dragHolder.terminado) {
      setTimeout(() => {
        this.nuevoElementoSeleccionado(this.editorStore.dragHolder.elemento);
      }, 0);
    }
    stop = true;
  }

  dropAtFirst(event: DragEvent) {
    this.editorStore.finalizarDrag();
    this.elemento.elementos.splice(0, 0, this.editorStore.dragHolder.elemento);
  }

  public remove(index) {
    this.editorStore.removeElementoEditar(this.path + '\\' + this.elemento.elementos[index].etiqueta);
    this.editorStore.editorStateChanged();
    this.$delete(this.elemento.elementos, index);
  }

  public moveUp(index: number) {
    console.log("Intentando mover arriba con index = " + index);
    if (index - 1 >= 0) {
      const buffer = this.elemento.elementos[index];
      this.$delete(this.elemento.elementos, index);
      this.elemento.elementos.splice(index - 1, 0, buffer);
    }
  }

  public moveDown(index: number) {
    console.log("Intentando mover abajo");
    if (index + 1 < this.elemento.elementos.length) {
      const buffer = this.elemento.elementos[index];
      this.$delete(this.elemento.elementos, index);
      this.elemento.elementos.splice(index + 1, 0, buffer);
    }
  }
}
</script>
<style>

.espacio-blanco {
  background: #9e9e9e;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.espacio-contenedor {
  background: #9e9e9e;
}

.campo-editar-draggable {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
