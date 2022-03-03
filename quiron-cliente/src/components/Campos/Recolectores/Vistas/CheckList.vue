<template>
  <q-card>
    <q-card-section class="bg-blue-3">{{elemento.etiqueta}}</q-card-section>
    <q-card-section>
      <mostrar-campo v-for="(item, index) in elemento.items" :key="`checklist-${elemento.etiqueta}-${index}`" :etiqueta="item">
        <component
          v-for="(validador, indexValidador) in elemento.validadores"
          :key="`checklist-${elemento.etiqueta}-${index}-${validador.etiqueta}`"
          :is="validador.elemento"
          v-bind="{
          elemento: validador,
          path: `/${index}/${validador.etiqueta}`,
          printable: true,
          data: localData,
          checkList: true
        }"
          v-if="indexValidador === 0 || visto(index, validador)"
        />
      </mostrar-campo>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {Campo, CampoCheckList, CondicionalValidador} from '@quiron/classes/dist/components/campos/edicion';
import {Chequeo, EntradaNumerica, EntradaTexto, Seleccion} from "../Vistas";

@Component({
  name: 'checkList',
  components: {
    MostrarCampo,
    EntradaNumerica,
    EntradaTexto,
    Seleccion,
    Chequeo
  }
})
export default class CheckList extends Vue {
  @Prop() elemento: CampoCheckList;
  @Prop() path: string;
  @Prop({default: false}) readonly printable;
  @PropSync('data') dataSync;
  localData = {};

  visto(itemIndex: number, dependiente: Campo){
    for(let condicion of this.elemento.condicionales){
      if(condicion.campoValidado.etiqueta === dependiente.etiqueta){
        if(this.localData[`/${itemIndex}/${condicion.validador.etiqueta}`]==condicion.valor){
          return true;
        }
      }
    }
    return false;
  }
}
</script>
<style></style>
