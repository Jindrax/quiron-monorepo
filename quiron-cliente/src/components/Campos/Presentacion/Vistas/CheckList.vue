<template>
  <q-card flat>
    <q-card-section class="bg-blue-3 q-pa-none q-ma-none">
      <q-item>
        <q-item-section>
          <q-item-label>{{ elemento.presentacion }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-section class="q-pa-none q-ma-none">
      <q-item v-for="(item, index) in elemento.items" :key="`checklist-${elemento.etiqueta}-${index}`">
        <q-item-section side>
          <q-item-label>
            {{ item }}
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <component
            :is="validador.elemento"
            v-for="(validador, indexValidador) in elemento.validadores"
            v-if="indexValidador === 0 || visto(index, validador)"
            :key="`checklist-${elemento.etiqueta}-${index}-${validador.etiqueta}`"
            v-bind="{
          elemento: validador,
          path: `/${index}/${validador.etiqueta}`,
          printable: true,
          data: dataSync[path],
          checkList: true
        }"/>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {Campo, CampoCheckList} from '@quiron/classes/dist/components/campos/edicion';
import {Chequeo, EntradaNumerica, EntradaTexto, Seleccion} from "../Vistas";

@Component({
  name: 'checkList-presentacion',
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

  visto(itemIndex: number, dependiente: Campo) {
    for (let condicion of this.elemento.condicionales) {
      if (condicion.campoValidado.etiqueta === dependiente.etiqueta) {
        if (this.dataSync[this.path][`/${itemIndex}/${condicion.validador.etiqueta}`] == condicion.valor) {
          return true;
        }
      }
    }
    return false;
  }
}
</script>
<style></style>
