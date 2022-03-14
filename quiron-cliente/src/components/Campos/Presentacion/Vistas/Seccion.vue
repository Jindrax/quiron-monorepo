<template>
  <q-card class="q-pa-none q-ma-none" flat bordered>
    <q-card-section class="q-pa-none q-ma-none bg-blue-3 vertical-middle" v-if="elemento.etiqueta !== 'raiz'" >
      <q-item>
        <q-item-section>
          <q-item-label>{{ elemento.presentacion }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-section class="q-pa-none q-ma-none">
      <div class="row justify-evenly wrap">
        <campo-presentacion
          v-for="elementoHijo in elemento.elementos"
          :key="'pc-'+elementoHijo.etiqueta"
          :data="dataSync"
          :elemento="elementoHijo"
          :path="path"
          :class="getEspacio(elementoHijo.elemento)"
        />
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import {CampoSeccion} from '@quiron/classes/dist/components/campos/edicion';
import {TiposElementos} from "@quiron/classes/dist/components/campos";

@Component({
  name: 'seccion-presentacion',
  components: {
    'campo-presentacion': () => import('../CampoPresentacion.vue')
  }
})
export default class Seccion extends Vue {
  @Prop() elemento: CampoSeccion;
  @Prop() path: string;
  @PropSync('data') dataSync;

  getEspacio(elemento: TiposElementos) {
    let espacio = "0";
    switch (elemento) {
      case TiposElementos["entrada-texto"]:
      case TiposElementos["entrada-numerica"]:
      case TiposElementos.seleccion:
      case TiposElementos.fecha:
      case TiposElementos.informacion:
        espacio = "auto";
        break;
      case TiposElementos.chequeo:
        espacio = "auto";
        break;
      case TiposElementos.firma:
      case TiposElementos.imagen:
        espacio = "auto";
        break;
      case TiposElementos.tabla:
      case TiposElementos["tabla-compuesta"]:
      case TiposElementos.checkList:
      case TiposElementos.mediciones:
      case TiposElementos.seccion:
        espacio = "12";
        break;
      default:
        espacio = "2";
    }
    return `col-${espacio}`;
  }
}
</script>
<style></style>
