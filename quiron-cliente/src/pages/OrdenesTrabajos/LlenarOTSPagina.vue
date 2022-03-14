<template>
  <q-page class="column q-gutter-sm">
    <q-stepper
      ref="stepper"
      v-model="step"
      alternative-labels
      animated
      class="col"
      color="primary"
    >
      <q-step
        :done="step > 1"
        :name="1"
        active-icon="format_list_bulleted"
        class="column"
        title="Escoger plantilla o formulario"
      >
        <div class="col-auto">
          <buscador-unitario v-model="ot" :buscador="buscadorOT" etiqueta="OT" @input="otSelected"/>
        </div>
        <q-list v-if="plantillas.length > 0" class="col-auto column q-pa-sm" separator>
          <span class="col-auto">Plantillas</span>
          <q-separator/>
          <q-item v-for="plantilla in plantillas" :key="plantilla.serial" class="col-auto">
            <q-item-section>
              <q-item-label>{{ plantilla.identificador }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn class="advance-btn" label="Llenar" @click="selectPlantilla(plantilla)"/>
            </q-item-section>
          </q-item>
        </q-list>
        <q-list v-if="ot.formularios.length > 0" class="col-auto column q-pa-sm" separator>
          <span class="col-auto">Formularios</span>
          <q-separator/>
          <q-item v-for="formulario in ot.formularios" :key="formulario.id" class="col-auto">
            <q-item-section>
              <q-item-label>{{ formulario.identificadorPlantilla }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn class="advance-btn" label="Visualizar" @click="visualizeFormulario(formulario)"/>
            </q-item-section>
          </q-item>
        </q-list>
      </q-step>

      <q-step
        :done="step > 2"
        :name="2"
        class="column q-gutter-sm"
        icon="mode"
        title="Llenar plantilla"
      >
        <campo
          v-for="elemento in formulario.plantilla.modelo.elementos"
          v-if="formulario.plantilla.modelo !== {}"
          :key="'pc-' + elemento.etiqueta"
          :data="compendio"
          :elemento="elemento"
          :path="formulario.plantilla.identificador"
          :printable="false"
          class="col"
        />
        <div class="col-auto row items-end justify-end q-gutter-sm">
          <q-btn class="col revert-btn" label="Cancelar" @click="cancelPlantilla"/>
          <q-btn class="col warn-btn" label="Borrador"/>
          <q-btn class="col advance-btn" label="Guardar" @click="crear"/>
        </div>
      </q-step>
      <q-step
        :done="step > 3"
        :name="3"
        class="col"
        icon="mode"
        title="Visualizar plantilla"
      >
        <seccion-presentacion
          v-if="formulario.plantilla.modelo !== {}"
          :data="formulario.datos"
          :elemento="formulario.plantilla.modelo"
          :path="formulario.plantilla.identificador"
          class="a4"
        />
        <div class="col-auto row items-end justify-end q-gutter-sm">
          <q-btn class="col revert-btn" label="Cancelar" @click="cancelPlantilla"/>
          <q-btn class="col advance-btn" label="Imprimir" @click="imprimir(formulario)"/>
        </div>
      </q-step>
    </q-stepper>
  </q-page>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import BuscadorUnitario from "components/Utils/BuscadorUnitario.vue";
import {Formulario, OrdenTrabajo, Plantilla} from "@quiron/classes/dist/entities";
import Controller from "api/Controller";
import Campo from "components/Campos/Recolectores/Campo.vue";
import {BuscadorOT} from "api/entidades/Buscador/Buscadores/BuscadorOT";
import Servicio from "@quiron/classes/dist/entities/Servicio";
import {getModule} from "vuex-module-decorators";
import ModuloLlenadoPlantilla from "../../store/modules/ModuloLlenadoPlantilla";
import CampoPresentacion from "components/Campos/Presentacion/CampoPresentacion.vue";
import SeccionPresentacion from "components/Campos/Presentacion/Vistas/Seccion.vue";

@Component({
  name: 'llenar-ots-pagina',
  components: {
    SeccionPresentacion,
    CampoPresentacion,
    Campo,
    BuscadorUnitario
  }
})
export default class CrearOTSPagina extends Vue {
  buscadorOT = new BuscadorOT(["id"]);
  ot = new OrdenTrabajo({});
  step = 1;
  formulario = new Formulario({});
  store = getModule(ModuloLlenadoPlantilla);
  directorio: any = {};

  public get compendio() {
    return this.store.compendio;
  }

  get plantillas() {
    const arr = this.ot.formularios.map(formulario => {
      return formulario.serial;
    })
    return this.ot.servicio.plantillas.filter(plantilla => {
      if (arr.includes(plantilla.serial)) {
        this.directorio[plantilla.serial] = plantilla;
        return false;
      } else {
        return true;
      }
    });
  }

  async otSelected(ot: OrdenTrabajo) {
    console.log(ot);
    this.ot.servicio = (await Controller.get<Servicio>("servicios", {
      params: {
        filtro: {
          id: ot.servicio.id
        },
        relaciones: ["plantillas"]
      }
    }))[0];
  }

  selectPlantilla(plantilla: Plantilla) {
    this.store.nuevoCompendio();
    this.formulario = new Formulario({
      plantilla: plantilla,
      ot: this.ot
    });
    this.step = 2;
  }

  cancelPlantilla() {
    this.formulario = new Formulario({});
    this.step = 1;
    this.store.nuevoCompendio();
  }

  visualizeFormulario(formulario: Formulario) {
    this.store.nuevoCompendio();
    this.formulario = formulario;
    this.formulario.plantilla = this.directorio[formulario.serial];
    this.step = 3;
    console.log(this.formulario);
  }

  async crear() {
    this.formulario.datos = JSON.parse(JSON.stringify(this.compendio));
    this.formulario.serial = this.formulario.plantilla.serial;
    this.formulario.identificadorPlantilla = this.formulario.plantilla.identificador;
    try {
      await Controller.post<Formulario>("formularios", {
        formulario: this.formulario
      }, null, Formulario);
      this.$q.notify("Formulario guardado correctamente");
    } catch (e) {
      console.log(e);
    }
  }

  imprimir(form: Formulario) {
    this.store.asignarImpresion(form);
    this.$router.push("/imprimir")
  }
}
</script>
<style>
.a4 {
  width: 842px;
}
</style>
