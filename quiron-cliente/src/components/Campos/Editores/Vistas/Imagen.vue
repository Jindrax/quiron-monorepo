<template>
  <q-item class="q-ma-none q-pa-none">
    <q-item-section>
      <mostrar-campo :etiqueta="'Tipo de imagen'">
        <q-option-group :options="options" v-model="elementoSync.type"/>
      </mostrar-campo>
      <template v-if="elementoSync.type === 'preloaded'">
        <mostrar-campo
          :etiqueta="'Archivo de imagen'"
        >
          <q-file
            @input="archivoSeleccionado"
            accept="image/*"
            class="full-width"
            filled
            label="Seleccione una imagen"
            v-model="file"
          />
        </mostrar-campo>
        <mostrar-campo :etiqueta="'Titulo'">
          <q-checkbox v-model="elementoSync.title"/>
        </mostrar-campo>
        <mostrar-campo :etiqueta="'Imagen'">
          <img :height="elementoSync.height" :src="elementoSync.data" :width="elementoSync.width" alt="File">
        </mostrar-campo>
      </template>
      <mostrar-campo :etiqueta="'Alto'">
        <q-input v-model="elementoSync.height"/>
      </mostrar-campo>
      <mostrar-campo :etiqueta="'Ancho'">
        <q-input v-model="elementoSync.width"/>
      </mostrar-campo>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import { CampoImagen, DiccionarioImagenType, ImagenType } from 'quiron_classes/dist/components/campos/edicion';

@Component({
  name: 'imagen',
  components: {
    MostrarCampo
  }
})
export default class Imagen extends Vue {
  @PropSync('elemento') elementoSync: CampoImagen;
  options: any[] = [
    {
      label: DiccionarioImagenType.preloaded,
      value: ImagenType.preloaded
    },
    {
      label: DiccionarioImagenType.load,
      value: ImagenType.load
    }
  ];
  file: File = null;

  public getModel() {
    return this.elementoSync;
  }

  async archivoSeleccionado(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.elementoSync.data = <string>reader.result;
      console.log(reader.result);
    };
    reader.onerror = error => console.log(error);
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
