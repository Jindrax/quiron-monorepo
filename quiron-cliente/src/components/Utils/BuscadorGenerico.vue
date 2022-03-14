<template>
  <q-dialog @hide="onDialogHide" persistent ref="dialog">
    <q-card class="q-dialog-plugin">
      <q-card-section class="q-px-none">
        <q-list class="q-px-none">
          <q-item-label class="seccion" header>Campos de busqueda</q-item-label>
          <q-item>
            <q-item-section>
              <q-input
                :key="'campo_busqueda_' + campo_busqueda.etiqueta"
                :placeholder="campo_busqueda.etiqueta"
                @keyup.enter.native="buscar"
                v-for="(campo_busqueda,
                indice_busqueda) in opciones.campos_busqueda"
                v-model="valores_busqueda[indice_busqueda]"
              />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn @click="buscar" class="full-width advance-btn" label="Buscar"/>
            </q-item-section>
          </q-item>
        </q-list>
        <q-list bordered class="q-px-none" separator>
          <q-item-label class="seccion" header>Resultados</q-item-label>
          <q-item
            :key="'resultado_' + resultado[opciones.campos_busqueda[0].valor]"
            @click="addSeleccionado(resultado)"
            class="clickable"
            clickable
            v-for="(resultado, indice_resultado) in resultados"
          >
            <q-item-section>
              <q-list>
                <q-item
                  :key="
                    'attributo_' +
                      resultado[opciones.campos_busqueda[0].valor] +
                      '_' +
                      atributo.etiqueta
                  "
                  v-for="(atributo,
                  indice_atributo) in opciones.campos_presentacion"
                >
                  <q-item-section>
                    {{ atributo.etiqueta }}: {{ resultado[atributo.valor] }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-item-section>
          </q-item>
        </q-list>
        <q-list bordered class="q-px-none" separator v-if="seleccionados.length>0">
          <q-item-label class="seccion" header>Seleccionados</q-item-label>
          <q-item
            :key="
              'seleccionado_' + seleccionado[opciones.campos_busqueda[0].valor]
            "
            @click="removeSeleccionado(indice_seleccionado)"
            class="clickable"
            clickable
            v-for="(seleccionado, indice_seleccionado) in seleccionados"
          >
            <q-item-section>
              <q-list>
                <q-item
                  :key="
                    'attributo_' +
                      seleccionado[opciones.campos_busqueda[0].valor] +
                      '_' +
                      atributo.etiqueta
                  "
                  v-for="(atributo,
                  indice_atributo) in opciones.campos_presentacion"
                >
                  <q-item-section>
                    {{ atributo.etiqueta }}: {{ seleccionado[atributo.valor] }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn @click="onCancelClick" class="revert-btn" label="Cancelar"/>
        <q-btn @click="onOKClick" class="advance-btn" label="OK"/>
        <q-btn @click="onCrearClick" class="advance-btn" label="Crear Nuevo" v-if="opciones.creacion"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {Component, Prop, Ref, Vue} from 'vue-property-decorator';
import Controller from 'api/Controller';
import {OpcionesDialogo} from './Interfaces';
import CreadorGenerico from './CreadorGenerico.vue';

interface DialogPlugin {
  show();

  hide();
}

@Component
export default class BuscadorGenerico extends Vue implements DialogPlugin {
  @Ref('dialog') dialog_element: DialogPlugin;
  @Prop() endpoint: string;
  @Prop() clase: any;
  @Prop() opciones: OpcionesDialogo;
  public valores_busqueda: string[] = [];
  public resultados: any[] = [];
  public seleccionados: any[] = [];

  public get objeto_busqueda() {
    let objeto = {};
    let i = 0;
    for (let campo_busqueda of this.valores_busqueda) {
      if (campo_busqueda != '') {
        objeto[this.opciones.campos_busqueda[i].valor] = campo_busqueda;
      }
      i++;
    }
    return objeto;
  }

  public mounted() {
    for (let campo_busqueda of this.opciones.campos_busqueda) {
      this.valores_busqueda.push('');
    }
  }

  public buscar<T>() {
    Controller.get<T>(this.endpoint, {
      params: {
        filtro: this.objeto_busqueda,
        opciones: this.opciones.opciones_busqueda
      }
    }, this.clase).then((resultado: T[]) => {
      this.resultados = resultado;
    }).catch(error => {
      console.log(error);
      this.$q.notify('Ocurrio un error en el servidor');
    });
  }

  public seleccionar(item) {
    this.$emit('ok', item);
    this.hide();
  }

  public addSeleccionado(item) {
    if (this.opciones.seleccion_multiple) {
      this.$set(this.seleccionados, this.seleccionados.length, item);
    } else {
      this.seleccionar(item);
    }
  }

  public removeSeleccionado(index) {
    this.$delete(this.seleccionados, index);
  }

  public show() {
    this.dialog_element.show();
  }

  public hide() {
    this.dialog_element.hide();
  }

  public onDialogHide() {
    this.$emit('hide');
  }

  public onOKClick() {
    this.$emit('ok', this.seleccionados);
    this.hide();
  }

  public onCancelClick() {
    this.hide();
  }

  public onCrearClick() {
    this.$q
      .dialog({
        component: CreadorGenerico,
        parent: this,
        clase: this.clase,
        opciones: this.opciones,
        persistent: true
      })
      .onOk((resultado: any) => {
        this.$emit('ok', resultado);
        this.hide();
      })
      .onCancel(cancel => {
        console.log(cancel);
      });
  }
}
</script>
<style>
.seccion {
  font-size: 120%;
  color: black;
}
</style>
