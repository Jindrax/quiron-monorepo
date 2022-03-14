<template>
  <q-card>
    <q-card-section class="bg-blue-3">{{ elemento.etiqueta }}</q-card-section>
    <q-card-section>
      <mostrar-campo v-for="(item, index) in elemento.items" :key="`checklist-${elemento.etiqueta}-${index}`"
                     :etiqueta="item">
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
        }"
        />
      </mostrar-campo>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import {Campo, CampoCheckList} from '@quiron/classes/dist/components/campos/edicion';
import {Chequeo, EntradaNumerica, EntradaTexto, Seleccion} from "../Vistas";
import {TiposElementos} from '@quiron/classes/dist/components/campos';

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

  created() {
    this.elemento.items.forEach((value, index) => {
      this.prepareData(index, this.elemento.validadores[0]);
    })
  }

  prepareData(itemIndex: number, dependiente: Campo) {
    console.log("Preparando: ", dependiente);
    switch (dependiente.elemento) {
      case TiposElementos.chequeo:
        this.$set(this.dataSync[this.path], `/${itemIndex}/${dependiente.etiqueta}`, []);
        break;
      case TiposElementos["entrada-numerica"]:
        this.$set(this.dataSync[this.path], `/${itemIndex}/${dependiente.etiqueta}`, 0);
        break;
      default:
        this.$set(this.dataSync[this.path], `/${itemIndex}/${dependiente.etiqueta}`, "");
    }
    console.log(this.dataSync[this.path]);
  }

  visto(itemIndex: number, dependiente: Campo) {
    for (let condicion of this.elemento.condicionales) {
      if (condicion.campoValidado.etiqueta === dependiente.etiqueta) {
        if (this.dataSync[this.path][`/${itemIndex}/${condicion.validador.etiqueta}`] == condicion.valor) {
          if (this.dataSync[this.path][`/${itemIndex}/${dependiente.etiqueta}`] === undefined) {
            this.prepareData(itemIndex, dependiente);
          }
          return true;
        }
      }
    }
    return false;
  }
}
</script>
<style></style>
