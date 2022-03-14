<template>
  <q-item class="q-ma-none q-px-xs">
    <q-item-section>
      <q-expansion-item v-model="active" class="q-card--bordered"
                        :header-class="active? elementoSync.elemento === 'seccion'? 'bg-green-10 text-white' : 'bg-primary text-white' : ''"
                        switch-toggle-side>
        <template v-slot:header>
          <q-item-section draggable="true">
            {{ diccionario[elementoSync.elemento] + ' : ' + elementoSync.etiqueta }}
          </q-item-section>
          <q-item-section side>
            <div class="row q-gutter-sm">
              <q-btn v-if="indice > 0" icon="arrow_upward" class="col-auto advance-btn" size="sm" round
                     @click.stop="moveUp"/>
              <q-btn v-if="indice < maxindice - 1" icon="arrow_downward" class="col-auto advance-btn" size="sm"
                     round @click.stop="moveDown"/>
              <q-btn icon="content_copy" class="col-auto warn-btn" size="sm" round @click.stop="clone"/>
              <q-btn icon="delete_forever" class="col-auto revert-btn" size="sm" round @click.stop="deleteCampo(indice)"/>
            </div>
          </q-item-section>
        </template>
        <div :class="{'bg-grey-2': active && elementoSync.elemento !== 'seccion',
        'bg-green-2': active && elementoSync.elemento === 'seccion'}">
          <referencia :elreferencia="elementoSync.referencia"
                      v-if="isReferenciable && !patron"/>
          <q-separator/>
          <dependiente
            v-if="!patron"
            :dep="elementoSync.dependiente"
          />
          <q-separator/>
          <mostrar-campo :etiqueta="'Presentación'">
            <q-input
              debounce="1000"
              placeholder="Presentacion"
              type="text"
              v-model="elementoSync.presentacion"
            />
          </mostrar-campo>
          <q-separator/>
          <component
            :is="elementoSync.elemento"
            :key="'ce-' + elementoSync.path"
            v-bind="{elemento: elementoSync, path: localPath}"
          />
        </div>
      </q-expansion-item>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import {Prop, PropSync, Vue} from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators';
import ModuloEditorPlantilla from '../../../store/modules/ModuloEditorPlantilla';
import {Campo, Referencia as ReferenciaClass} from '@quiron/classes/dist/components/campos/edicion';
import {CAMPOS_REFERENCIABLES, DiccionarioTiposElementos} from "@quiron/classes/dist/components/campos";
import {Dialog} from "quasar";

@Component({
  name: 'campo-editar',
  components: {
    'informacion': () => import("./Vistas/Informacion.vue"),
    'referencia': () => import("./Referencia.vue"),
    'chequeo': () => import("./Vistas/Chequeo.vue"),
    'entrada-numerica': () => import("./Vistas/EntradaNumerica.vue"),
    'entrada-texto': () => import("./Vistas/EntradaTexto.vue"),
    'fecha': () => import("./Vistas/Fecha.vue"),
    'firma': () => import("./Vistas/Firma.vue"),
    'imagen': () => import("./Vistas/Imagen.vue"),
    'seccion': () => import("./Vistas/Seccion.vue"),
    'seleccion': () => import("./Vistas/Seleccion.vue"),
    'tabla': () => import("./Vistas/Tabla.vue"),
    'tabla-compuesta': () => import("./Vistas/TablaCompuesta.vue"),
    'dependiente': () => import("./Dependiente.vue"),
    'mediciones': () => import("./Vistas/Mediciones/Mediciones.vue"),
    'checkList': () => import("./Vistas/CheckList/CheckList.vue")
  }
})
export default class CampoEditar extends Vue {
  @PropSync('elemento') elementoSync: Campo;
  @Prop() indice: number;
  @Prop() path: string;
  @Prop() maxindice: number;
  @Prop({default: false}) patron: boolean;
  diccionario = DiccionarioTiposElementos;
  public active: boolean = false;
  private editorStore = getModule(ModuloEditorPlantilla);

  public get localPath() {
    return this.path + '\\' + this.elementoSync.etiqueta;
  }

  public created() {
    if (!this.elementoSync.referencia) {
      this.elementoSync.referencia = new ReferenciaClass();
    }
  }

  public mounted() {
    this.editorStore.insertElementoEditar({path: this.localPath, elemento: this.elementoSync.elemento});
    this.editorStore.editorStateChanged();
  }

  public get isReferenciable() {
    return CAMPOS_REFERENCIABLES.includes(this.elementoSync.elemento);
  }

  public clone() {
    const elementoClonado = JSON.parse(JSON.stringify(this.elementoSync));
    Dialog.create({
      title: "Clonar campo",
      message: "Etiqueta del campo clonado",
      prompt: {
        model: "",
        type: "text"
      },
      cancel: true,
      persistent: true
    }).onOk(data => {
      elementoClonado.etiqueta = data;
      console.log(elementoClonado);
      this.$emit("cloned", elementoClonado);
    })
  }

  public deleteCampo(index: number) {
    Dialog.create({
      title: "Eliminar campo",
      message: "¿Desea eliminar el campo?",
      cancel: true
    }).onOk(() => {
      this.$emit('remove', index);
    })
  }

  public moveUp() {
    this.$emit("moveup");
  }

  public moveDown() {
    this.$emit("movedown");
  }
}
</script>
<style>

</style>
