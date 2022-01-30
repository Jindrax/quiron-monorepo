<template>
  <div class="q-my-sm">
    <q-list bordered separator>
      <q-item-label header>
        <mostrar-campo :etiqueta="acumulable">
          <q-input ref="input" v-model="valor" :error="error" :error-message="errorMessage" @blur="onBlur"
                   @focus="onFocus" @keypress.enter.native="acumular" :rules="rules">
            <template v-slot:append>
              <q-btn class="q-my-sm" dense flat icon="ion-add-circle-outline" round @click="acumular"/>
            </template>
          </q-input>
        </mostrar-campo>
      </q-item-label>
      <q-separator/>
      <q-item v-for="(elemento, indiceElemento) in value" :key="`elemento-${elemento}-${indiceElemento}`">
        <q-item-section>
          {{ elemento }}
        </q-item-section>
        <q-item-section v-if="indiceElemento!==0" side>
          <q-btn color="blue" icon="arrow_upward" @click="move(indiceElemento)"/>
        </q-item-section>
        <q-item-section side>
          <q-btn color="red" icon="ion-close-circle-outline" @click="remove(indiceElemento)"/>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue, Ref} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';

export interface AcumuladorValidator {
  (value: string): boolean | string
}

@Component({
  name: 'acumulador',
  components: {
    MostrarCampo
  }
})
export default class Acumulador extends Vue {
  @Prop({required: true}) acumulable: string;
  @Prop({required: true}) value: any[];
  @Prop({required: false, default: () => []}) rules: AcumuladorValidator[];
  valor = "";
  error = false;
  errorMessage = "";
  @Ref("input") input: any;

  mounted() {
  }

  public acumular() {
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

  public validate(validator: AcumuladorValidator): boolean {
    let validatedValue = validator(this.valor);
    if (typeof validatedValue === "string") {
      this.error = true;
      this.errorMessage = validatedValue;
      return false;
    } else {
      this.error = !validatedValue;
      this.errorMessage = "";
      return validatedValue;
    }
  }

  public onFocus() {
    this.error = false;
    this.errorMessage = "";
  }

  public onBlur() {
    if (this.valor !== "") {
      this.error = true;
      this.errorMessage = "Recuerde guardar el valor con el boton o enter";
    }else{
      this.input.resetValidation();
      this.error = false;
      this.errorMessage = "";
    }
  }
}
</script>
<style>

</style>
