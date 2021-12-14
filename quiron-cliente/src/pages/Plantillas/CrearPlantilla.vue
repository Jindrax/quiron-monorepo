<template>
  <q-page>
    <q-list bordered padding separator>
      <q-item>
        <q-item-section>
          <div class="row">
            <div class="col">
              <q-btn
                :label="'Buscar plantilla a editar'"
                @click="buscarPlantilla"
                class="full-width q-px-xs"
                outline
              />
            </div>
            <div class="col">
              <q-btn
                :label="'Buscar plantilla a copiar'"
                @click="clonarPlantilla"
                class="full-width q-px-xs"
                outline
              />
            </div>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <mostrar-campo :etiqueta="'Identificador'">
            <q-input
              debounce="1000"
              placeholder="Identificador"
              v-model="plantilla.identificador"
            ></q-input>
          </mostrar-campo>
          <mostrar-campo :etiqueta="'Serial'">
            {{ plantilla.serial }}
          </mostrar-campo>
          <mostrar-campo :etiqueta="'Version'">
            <q-input
              debounce="1000"
              placeholder="Version"
              type="number"
              v-model="plantilla.version"
            ></q-input>
          </mostrar-campo>
        </q-item-section>
      </q-item>
      <q-card class="q-ma-sm" style="{border-color: #1D1D1D}">
        <q-card-section>
          <p>Plantillas relacionadas</p>
          <q-list bordered separator>
            <q-item v-for="(relacionada, index) in plantilla.relacionadas" :key="'rel-'+relacionada.identificador"
                    clickable @click="quitarPlantillasRelacionada(index)">
              <q-item-label>{{ `${relacionada.identificador}::${relacionada.version}` }}</q-item-label>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions>
          <q-btn
            :label="'Añadir plantilla relacionada'"
            @click="sumarPlantillaRelacionada"
            class="full-width"
            outline
          />
        </q-card-actions>
      </q-card>
      <q-expansion-item
        expand-separator
        header-class="collapsible"
        label="Diseño"
        switch-toggle-side
      >
        <seccion
          :elemento="plantilla.modelo"
          :indice="0"
          :key="plantilla.serial + 'raiz'"
          :path="''"
        />
      </q-expansion-item>
      <q-expansion-item
        expand-separator
        header-class="collapsible"
        label="Previsualizacion"
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
              <previsualizador
                :plantilla="plantillaJ"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-expansion-item>
      <!--q-expansion-item
        expand-separator
        header-class="collapsible"
        label="Diseñador"
        switch-toggle-side
      >
        <disposicion
          :key="obtenerKey(plantilla)"
          :plantilla="plantilla"
        />
      </q-expansion-item-->
      <q-item>
        <q-item-section>
          <div class="row">
            <q-btn :class="unsavedChanges? ['col', 'full-width', 'unsaved_changes'] : ['col', 'full-width']"
                   @click="cache" label="Cache"/>
            <q-btn @click="discard" class="col full-width" label="Descartar"/>
            <q-btn
              @click="crearPlantilla"
              class="col full-width"
              label="Crear Plantilla"
              v-if="accion === 'crear'"
            />
            <q-btn
              @click="actualizarPlantilla"
              class="col full-width"
              label="Actualizar Plantilla"
              v-if="accion === 'actualizar'"
            />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <q-inner-loading :showing="cargando">
      <q-spinner-facebook color="primary" size="50px"/>
      Cargando cache/plantilla
    </q-inner-loading>
  </q-page>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import MostrarCampo from 'components/Campos/MostrarCampo.vue';
import Previsualizador from '../../components/Campos/Previsualizador.vue';
import Disposicion from '../../components/Campos/Disposicion.vue';
import {OpcionesDialogo} from 'components/Utils/Interfaces';
import BuscadorGenerico from '../../components/Utils/BuscadorGenerico.vue';
import Plantilla from 'quiron_classes/dist/entities/Plantilla';
import ControladorCache from "clases/Plantillas/Campos/Editores/ControladorCache";
import {getModule} from 'vuex-module-decorators';
import ModuloEditorPlantilla from '../../store/modules/ModuloEditorPlantilla';
import {Seccion} from "components/Campos/Editores/Vistas";
import {CampoSeccion} from "quiron_classes/dist/components/campos/edicion";
import {TiposElementos} from "quiron_classes/dist/components/campos";

@Component({
  components: {
    Previsualizador,
    Disposicion,
    MostrarCampo,
    Seccion
  }
})
export default class CrearPlantilla extends Vue {
  @Prop() id: any;
  public plantilla: Plantilla = new Plantilla({});
  public plantillaUnica: any = {};
  public cargando: boolean = false;
  public unsavedChanges = false;
  public controladorPlantilla = new ControladorCache<Plantilla>('plantilla', Plantilla);
  private editorStore = getModule(ModuloEditorPlantilla);


  public async crearCache() {
    await this.controladorPlantilla.saveToServer(this.plantilla);
  }

  public get accion(): string {
    if (this.plantilla.serial != "") {
      return 'actualizar';
    }
    return 'crear';
  }

  public get contexto() {
    return this.editorStore.contexto;
  }

  @Watch('plantilla', {deep: true})
  async onRaizChanged() {
    if (this.plantilla.identificador != '') {
      this.unsavedChanges = true;
    }
    const contextoEditor = [
      ...this.plantilla.relacionadas,
      this.plantilla
    ];
    this.editorStore.setContexto(contextoEditor);
  }

  public async saveCache() {
    if (this.plantilla.identificador != '') {
      try {
        await this.controladorPlantilla.cache(this.plantilla);
        this.$q.notify({
          message: 'Cache actualizada.',
          timeout: 700,
          closeBtn: 'Cerrar'
        });
        this.unsavedChanges = false;
      } catch (error) {
        //this.$q.notify(error);
      }
    } else {
      this.$q.notify('No se puede guardar una plantilla en cache sin identificador.');
    }
  }

  async cache() {
    await this.saveCache();
  }

  reiniciarDatos() {
    this.plantilla = new Plantilla({});
    this.plantillaUnica = {
      '\\raiz': 'seccion'
    };
    this.unsavedChanges = false;
  }

  sumarPlantillaRelacionada() {
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
        this.plantilla.relacionadas.push(resultado);
      })
      .onCancel(cancel => {
        console.log(cancel);
      });
  }

  quitarPlantillasRelacionada(index: number) {
    this.$delete(this.plantilla.relacionadas, index);
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
        this.plantilla = resultado;
      })
      .onCancel(cancel => {
        console.log(cancel);
      });
  }

  actualizarClonacion(nuevoIdentificador: string, seccion: CampoSeccion) {
    console.log(seccion);
    for (const seccionElement of seccion.elementos) {
      if (seccionElement.elemento == TiposElementos.seccion) {
        this.actualizarClonacion(nuevoIdentificador, <CampoSeccion>seccionElement);
      } else {
        if (seccionElement.referencia.activated) {
          const index = seccionElement.referencia.identificador.indexOf("/");
          seccionElement.referencia.identificador = nuevoIdentificador + seccionElement.referencia.identificador.substring(index);
        }
        if (seccionElement.dependiente.activated) {
          for (const condition of seccionElement.dependiente.conditions) {
            const index = condition.parent.indexOf("/");
            condition.parent = nuevoIdentificador + condition.parent.substring(index);
          }
        }
      }
    }
  }

  clonarPlantilla() {
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
        resultado.serial = "";
        this.$q.dialog({
          message: "Nuevo nombre de la plantilla",
          prompt: {
            model: resultado.identificador,
            type: "text",
            isValid: (identificador) => {
              return identificador !== "";
            }
          }
        }).onOk((identificador: string) => {
          const prevIdentificador: string = resultado.identificador;
          resultado.identificador = identificador;
          this.actualizarClonacion(identificador, resultado.modelo);
          this.plantilla = resultado;
        });
      })
      .onCancel(cancel => {
        console.log(cancel);
      });
  }

  async crearPlantilla() {
    if (
      this.plantilla.identificador == '' ||
      this.plantilla.identificador == undefined
    ) {
      this.$q.notify('Toda plantilla debe tener un identificador');
      return;
    }
    try {
      this.$q
        .dialog({
          title: 'Crear Plantilla',
          message: '¿Esta seguro que desea crear la plantilla actual?',
          cancel: 'Cancelar',
          persistent: true
        })
        .onOk(async () => {
          try {
            await this.controladorPlantilla.cache(this.plantilla);
            let response = await this.controladorPlantilla.materializeCache();
            this.$q.dialog({
              title: 'Confirmacion de creacion',
              message: `<p>Identificador: ${response.object.identificador}</p><p>Serial: ${response.object.serial}</p><p>Version: ${response.object.version}</p><h5>Codigo confirmacion: ${response.logID}</h5>`,
              html: true,
              persistent: true,
              dark: true
            }).onOk(() => {
              // console.log('OK')
            });
            this.reiniciarDatos();
          } catch (error) {
            this.$q.notify(error.toString());
            console.log(error);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  async actualizarPlantilla() {
    if (
      this.plantilla.identificador == '' ||
      this.plantilla.identificador == undefined
    ) {
      this.$q.notify('Toda plantilla debe tener un identificador');
      return;
    }
    try {
      this.$q
        .dialog({
          title: 'Actualizar Plantilla',
          message: '¿Esta seguro que desea actualizar la plantilla actual?',
          cancel: 'Cancelar',
          persistent: true
        })
        .onOk(async () => {
          try {
            await this.controladorPlantilla.cache(this.plantilla);
            let response = await this.controladorPlantilla.materializeCache();
            console.log(response);
            this.$q.dialog({
              title: 'Confirmacion de actualizacion',
              message: `<p>Identificador: ${response.object.identificador}</p><p>Serial: ${response.object.serial}</p><p>Version: ${response.object.version}</p><h5>Codigo confirmacion: ${response.logID}</h5>`,
              html: true,
              persistent: true,
              dark: true
            }).onOk(() => {
              // console.log('OK')
            });
            this.reiniciarDatos();
          } catch (error) {
            this.$q.notify(error.toString());
            console.log(error);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  public discard() {
    this.$q
      .dialog({
        title: 'Descartar Plantilla',
        message:
          '¿Esta seguro que desea eliminar la plantilla actual? esta accion no se puede deshacer.',
        cancel: 'Cancelar',
        persistent: true
      })
      .onOk(async () => {
        try {
          await this.controladorPlantilla.discardCache();
          this.reiniciarDatos();
          this.$q.notify('Plantilla descartada correctamente');
        } catch (error) {
          this.$q.notify('Ocurrio un error en el servidor.');
        }
      });
  }

  public async mounted() {
    try {
      let cache: Plantilla = await this.controladorPlantilla.getValue();
      if (cache) {
        this.plantilla = cache;
      } else if (this.id != 0) {
        this.plantilla = await this.controladorPlantilla.getValue();
      }
    } catch (error) {
      console.log(error);
      this.$q.notify('Ocurrio un error en el servidor.');
    }
    this.cargando = false;
  }

  public obtenerKey(plantilla: Plantilla) {
    return 'preview' + Date.now() + plantilla.serial;
  }
}
</script>

<style>
.color_negro {
  color: black;
}

.collapsible {
  background-color: darkgray;
}

.unsaved_changes {
  background: #C10015;
  color: white;
}
</style>
