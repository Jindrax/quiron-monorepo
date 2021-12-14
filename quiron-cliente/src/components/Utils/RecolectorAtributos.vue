<template>
  <q-card class="bg-grey-2 q-my-xs" flat>
    <q-card-section>
      {{etiqueta}}
    </q-card-section>
    <q-card-section>
      <q-markup-table>
        <thead>
        <tr>
          <th>Atributo</th>
          <th>Valor</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(valor, atributo) in value"
          :key="`attribute-${atributo}`"
        >
          <td @click="remove(atributo)" class="q-chip--clickable">
            {{ atributo }}
          </td>
          <td>
            <q-input v-model="value[atributo]"/>
          </td>
        </tr>
        </tbody>
      </q-markup-table>
    </q-card-section>
    <q-card-section>
      <q-item>
        <q-item-section side>
          <q-btn label="Nuevo atributo" @click="nuevo" class="text-black bg-white"/>
        </q-item-section>
        <q-item-section>
          <q-select :options="opciones" v-model="nuevoAtributo"/>
        </q-item-section>
        <q-item-section side>
          <q-btn label="Añadir atributo" @click="add" class="text-black bg-white"/>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: 'recolector-atributos',
  components: {}
})
export default class RecolectorAtributos extends Vue {
  @Prop() etiqueta: string;
  @Prop() value: Record<string, any>;
  opciones: string[] = [];
  nuevoAtributo: string = "";

  nuevo() {
    this.$q.dialog({
      message: "Ingrese el nombre del nuevo atributo",
      prompt: {
        model: ""
      }
    }).onOk((value) => {
      this.$set(this.opciones, this.opciones.length, value);
    });
  }

  add() {
    this.$set(this.value, this.nuevoAtributo, "");
  }

  remove(atributo: string) {
    this.$delete(this.value, atributo);
  }
}
</script>
<style>

</style>
