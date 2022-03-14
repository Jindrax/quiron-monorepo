<template>
  <q-page>
    <q-list bordered padding separator>
      <buscador-unitario v-model="formulario.plantilla" :buscador="buscadorPlantilla"/>
      <q-expansion-item
        expand-separator
        header-class="collapsible"
        label="Contexto"
        switch-toggle-side
      >
        <q-expansion-item
          v-for="plantillaRelacionada in formulario.plantilla.relacionadas"
          :key="obtenerKey(plantillaRelacionada)"
          :label="plantillaRelacionada.identificador"
          expand-separator
          switch-toggle-side
        >
          <q-card bordered>
            <q-card-section>
              <q-card v-if="plantillaRelacionada.modelo !== {}">
                <q-card-section class="q-px-none">
                  <campo
                    v-for="elemento in plantillaRelacionada.modelo.elementos"
                    :key="'pc-' + elemento.etiqueta"
                    :data="compendio"
                    :elemento="elemento"
                    :path="plantillaRelacionada.identificador"
                    :printable="false"
                  />
                </q-card-section>
              </q-card>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-expansion-item>
      <q-card v-if="formulario.plantilla.modelo !== {}">
        <q-card-section class="q-px-none">
          <campo
            v-for="elemento in formulario.plantilla.modelo.elementos"
            :key="'pc-' + elemento.etiqueta"
            :data="compendio"
            :elemento="elemento"
            :path="formulario.plantilla.identificador"
            :printable="false"
          />
        </q-card-section>
      </q-card>
      <q-item>
        <q-item-section>
          <q-btn
            class="col full-width advance-btn"
            label="Guardar"
            @click="test"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import Plantilla from '@quiron/classes/dist/entities/Plantilla';
import {getModule} from "vuex-module-decorators";
import ModuloLlenadoPlantilla from "../../store/modules/ModuloLlenadoPlantilla";
import Campo from "components/Campos/Recolectores/Campo.vue";
import {Formulario, Patron} from "@quiron/classes/dist/entities";
import BuscadorUnitario from "components/Utils/BuscadorUnitario.vue";
import {BuscadorPlantilla} from "api/entidades/Buscador";
import Controller from "api/Controller";

@Component({
  components: {
    BuscadorUnitario,
    Campo,
    MostrarCampo
  }
})
export default class LlenarPlantilla extends Vue {
  formulario = new Formulario({});
  buscadorPlantilla = new BuscadorPlantilla(["identificador", "serial"]);
  private store = getModule(ModuloLlenadoPlantilla);

  public get compendio() {
    return this.store.compendio;
  }

  public async test() {
    this.formulario.datos = JSON.parse(JSON.stringify(this.compendio));
    console.log(this.formulario.datos);
    console.log(this.compendio);
    try {
      await Controller.post<Formulario>("formularios", {
        formulario: this.formulario
      }, null, Patron);
      this.$q.notify("Patron creado correctamente");
    } catch (e) {
      console.log(e);
    }
  }

  reiniciarDatos() {
    this.formulario = new Formulario({});
  }

  public async mounted() {

  }

  public obtenerKey(plantilla: Plantilla) {
    return 'preview' + Date.now() + plantilla.serial;
  }
}
</script>

<style>
</style>
