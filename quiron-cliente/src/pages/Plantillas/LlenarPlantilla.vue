<template>
  <q-page>
    <q-list bordered padding separator>
      <q-item>
        <q-item-section>
          <q-btn
            :label="'Buscar plantilla a editar'"
            @click="buscarPlantilla"
            class="full-width q-px-xs"
            outline
          />
        </q-item-section>
      </q-item>
      <q-expansion-item
        expand-separator
        header-class="collapsible"
        label="Contexto"
        switch-toggle-side
      >
        <q-expansion-item
          v-for="plantillaJ in contexto"
          expand-separator
          :label="plantillaJ.identificador"
          switch-toggle-side
          :key="obtenerKey(plantillaJ)"
        >
          <q-card bordered>
            <q-card-section>
              <q-card v-if="plantillaJ.modelo !== {}">
                <q-card-section class="q-px-none">
                  <campo
                    :data="compendio"
                    :elemento="elemento"
                    :key="'pc-' + elemento.etiqueta"
                    :path="plantillaJ.identificador"
                    :printable="false"
                    v-for="(elemento, indice) in plantillaJ.modelo.elementos"
                  />
                </q-card-section>
              </q-card>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-expansion-item>
      <q-card v-if="plantilla.modelo !== {}">
        <q-card-section class="q-px-none">
          <campo
            :data="compendio"
            :elemento="elemento"
            :key="'pc-' + elemento.etiqueta"
            :path="plantilla.identificador"
            :printable="false"
            v-for="(elemento, indice) in plantilla.modelo.elementos"
          />
        </q-card-section>
      </q-card>
      <q-item>
        <q-item-section>
          <q-btn
            @click="test"
            class="col full-width"
            label="Guardar"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import {OpcionesDialogo} from 'components/Utils/Interfaces';
import BuscadorGenerico from '../../components/Utils/BuscadorGenerico.vue';
import Plantilla from 'quiron_classes/dist/entities/Plantilla';
import {getModule} from "vuex-module-decorators";
import ModuloLlenadoPlantilla from "../../store/modules/ModuloLlenadoPlantilla";
import Campo from "components/Campos/Recolectores/Campo.vue";

@Component({
  components: {
    Campo,
    MostrarCampo
  }
})
export default class LlenarPlantilla extends Vue {
  public plantilla: Plantilla = new Plantilla({});
  public contexto: Plantilla[] = [];
  private store = getModule(ModuloLlenadoPlantilla);

  public get compendio() {
    return this.store.compendio;
  }

  public test() {
    console.log(this.compendio);
  }

  reiniciarDatos() {
    this.plantilla = new Plantilla({});
  }

  buscarPlantilla() {
    let opciones_buscador: OpcionesDialogo = {
      campos_busqueda: [
        {etiqueta: 'Identificador', valor: 'identificador'},
        {etiqueta: 'Serial', valor: 'serial'}
      ],
      campos_presentacion: [
        {etiqueta: 'Identificador', valor: 'identificador'},
        {etiqueta: 'Serial', valor: 'serial'},
        {etiqueta: 'Version', valor: 'version'}
      ],
      opciones_busqueda: {}
    };
    this.$q
      .dialog({
        component: BuscadorGenerico,
        parent: this,
        endpoint: 'plantilla',
        clase: Plantilla,
        opciones: opciones_buscador,
        persistent: true
      })
      .onOk((resultado: Plantilla) => {
        console.log(resultado);
        this.store.nuevoCompendio();
        this.contexto = resultado.relacionadas;
        this.plantilla = resultado;
      })
      .onCancel(cancel => {
        console.log(cancel);
      });
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
