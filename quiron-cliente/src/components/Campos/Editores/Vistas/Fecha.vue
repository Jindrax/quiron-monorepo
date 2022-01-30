<template>
  <q-item class="q-ma-none q-pa-none">
    <q-item-section>
      <mostrar-campo :etiqueta="'Tipo de fecha'">
        <q-option-group :options="options" v-model="elementoSync.date_type"/>
      </mostrar-campo>
      <mostrar-campo
        :etiqueta="'Componentes de fecha'"
        v-if="elementoSync.date_type === types.explicit"
      >
        <q-checkbox label="Fecha" v-model="elementoSync.date"/>
        <q-checkbox label="Hora" v-model="elementoSync.hour"/>
        <mostrar-campo :etiqueta="'Formato'">
          <q-input
            v-model="elementoSync.format"
          ></q-input>
        </mostrar-campo>
      </mostrar-campo>
    </q-item-section>
  </q-item>
</template>
<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';
import MostrarCampo from '../../MostrarCampo.vue';
import { CampoFecha, DateType, DiccionarioDateType } from '@quiron/classes/dist/components/campos/edicion';

@Component({
  name: 'fecha',
  components: {
    MostrarCampo
  }
})
export default class Fecha extends Vue {
  @PropSync('elemento') elementoSync: CampoFecha;
  types = DateType;
  options = [
    {
      label: DiccionarioDateType.implicit,
      value: DateType.implicit
    },
    {
      label: DiccionarioDateType.explicit,
      value: DateType.explicit
    }
  ];
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
