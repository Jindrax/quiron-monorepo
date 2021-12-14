<template>
  <q-expansion-item
    expand-separator
    :label="value !== '' ? value : 'Seleccionar Padre'"
    switch-toggle-side
  >
    <q-tree
      :nodes="nodos"
      default-expand-all
      :selected.sync="seleccionado"
      node-key="ruta"
      label-key="label"
      @update:selected="seleccionarNodo"
    />
  </q-expansion-item>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Campo, CampoSeccion} from "quiron_classes/dist/components/campos/edicion";
import {TiposElementos} from "quiron_classes/dist/components/campos";
import {Plantilla} from "quiron_classes/dist/entities";

@Component({
  name: 'SelectorPorCapas'
})
export default class SelectorPorCapas extends Vue {
  @Prop() arbol: Plantilla[];
  @Prop() value: string;
  seleccionado = null;
  dict: Record<string, Campo> = {};

  public generadorRecursivo(seccion: CampoSeccion, rutaAcumulada: string) {
    if (seccion.elemento != TiposElementos.seccion) {
      const ruta = rutaAcumulada + "/" + seccion.etiqueta;
      this.dict[ruta] = seccion;
      return {
        ruta: ruta,
        label: `${seccion.etiqueta} : ${seccion.elemento}`,
        selectable: true
      }
    } else {
      const rama = {
        ruta: rutaAcumulada + "/" + seccion.etiqueta,
        label: seccion.etiqueta,
        selectable: false,
        children: []
      };
      for (let el of seccion.elementos) {
        rama.children.push(this.generadorRecursivo(<CampoSeccion>el, rama.ruta));
      }
      return rama;
    }
  }

  public generadorPlantilla(plantilla: Plantilla) {
    const ramaPrincipal = {
      ruta: plantilla.identificador,
      label: plantilla.identificador,
      selectable: false,
      children: []
    };
    for (let el of plantilla.modelo.elementos) {
      ramaPrincipal.children.push(this.generadorRecursivo(<CampoSeccion>el, ramaPrincipal.ruta));
    }
    return ramaPrincipal;
  }

  get nodos() {
    return this.arbol.map(value => {
      const test = this.generadorPlantilla(value);
      return test;
    });
  }

  public seleccionarNodo(value) {
    this.$emit('elemento', this.dict[value]);
    this.$emit('input', this.seleccionado);
  }
}
</script>
<style>
</style>
