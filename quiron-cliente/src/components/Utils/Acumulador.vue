<template>
  <div class="q-my-sm">
    <q-list bordered separator>
      <q-item-label header>
        <mostrar-campo :etiqueta="acumulable">
          <q-input @keypress.enter.native="acumular" v-model="valor">
            <template v-slot:append>
              <q-btn @click="acumular" class="q-my-sm" icon="ion-add-circle-outline" round dense flat/>
            </template>
          </q-input>
        </mostrar-campo>
      </q-item-label>
      <q-separator/>
      <q-item :key="`elemento-${elemento}-${indiceElemento}`" v-for="(elemento, indiceElemento) in value">
        <q-item-section>
          {{ elemento }}
        </q-item-section>
        <q-item-section side v-if="indiceElemento!==0">
          <q-btn @click="move(indiceElemento)" color="blue" icon="arrow_upward"/>
        </q-item-section>
        <q-item-section side>
          <q-btn @click="remove(indiceElemento)" color="red" icon="ion-close-circle-outline"/>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';

@Component({
  name: 'acumulador',
  components: {
    MostrarCampo
  }
})
export default class Acumulador extends Vue {
  @Prop() acumulable: string;
  @Prop() value: any[];
  valor = "";

  mounted() {
    console.log(this.value);
  }

  public acumular() {
    console.log(this.value);
    this.$set(this.value, this.value.length, this.valor);
    this.valor = "";
    this.$emit("value", this.value);
  }

  public remove(index) {
    this.$delete(this.value, index);
    this.$emit("value", this.value);
  }

  public move(index) {
    let temp = this.value[index];
    this.$set(this.value, index, this.value[index - 1]);
    this.$set(this.value, index - 1, temp);
    this.$emit("value", this.value);
  }
}
</script>
<style>

</style>
