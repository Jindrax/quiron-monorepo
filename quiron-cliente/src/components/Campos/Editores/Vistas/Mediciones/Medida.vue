<template>
  <tr>
    <td>
      <q-input v-model="medidaSync.instruccion"/>
    </td>
    <template v-if="rangoRequerido">
      <td>
        <q-input v-model.number="medidaSync.rango.inferior" type="number"/>
      </td>
      <td>
        <q-input v-model.number="medidaSync.rango.superior" type="number"/>
      </td>
      <td>
        <q-btn icon="cancel"/>
      </td>
    </template>
  </tr>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from "../../../MostrarCampo.vue";
import {Medida as MedidaClass} from "@quiron/classes/dist/components/campos/edicion";

@Component({
  name: 'medida',
  components: {
    MostrarCampo
  }
})
export default class Medida extends Vue {
  @PropSync('medida') medidaSync: MedidaClass;
  @Prop() indice: number;
  @Prop({default: true}) rangoRequerido: boolean;

  removeMedida() {
    this.$emit("remove", this.indice);
  }
}
</script>
<style>

</style>
