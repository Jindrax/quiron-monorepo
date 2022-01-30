<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card :class="cardClasses">
      <q-stepper
        ref="stepper"
        v-model="step"
        animated
        color="primary"
      >
        <q-step
          :name="1"
          title="Elegir Cliente"
        >
          <q-card>
            <q-card-section class="q-px-none">
              <q-list class="q-px-none">
                <q-item-label class="seccion" header>Campos de busqueda</q-item-label>
                <q-item>
                  <q-item-section>
                    <q-input
                      v-for="(campo_busqueda,
                indice_busqueda) in opcionesCliente.campos_busqueda"
                      :key="'campo_busqueda_' + campo_busqueda.etiqueta"
                      v-model="valoresBusquedaCliente[indice_busqueda]"
                      :placeholder="campo_busqueda.etiqueta"
                      @keyup.enter.native="buscarCliente"
                    />
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-btn class="full-width" label="Buscar" @click="buscarCliente"/>
                  </q-item-section>
                </q-item>
              </q-list>
              <q-list bordered class="q-px-none" separator>
                <q-item-label class="seccion" header>Resultados</q-item-label>
                <q-item
                  v-for="resultado in resultadosCliente"
                  :key="'resultado_' + resultado[opcionesCliente.campos_busqueda[0].valor]"
                  class="clickable"
                  clickable
                  @click="seleccionarCliente(resultado)"
                >
                  <q-item-section>
                    <q-list>
                      <q-item
                        v-for="atributo in opcionesCliente.campos_presentacion"
                        :key="
                    'attributo_' +
                      resultado[opcionesCliente.campos_busqueda[0].valor] +
                      '_' +
                      atributo.etiqueta
                  "
                      >
                        <q-item-section>
                          {{ atributo.etiqueta }}: {{ resultado[atributo.valor] }}
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-step>

        <q-step
          :name="2"
          title="Elegir Contacto"
        >
          <q-table :columns="contactoColumns" :data="resultadosContacto" :filter="contactosFilter" row-key="id"
                   title="Contactos" selection="single" v-model:selected="contactoSeleccionado">
            <template v-slot:top-right>
              <q-input v-model="contactosFilter" borderless debounce="300" dense placeholder="Buscar">
                <template v-slot:append>
                  <q-icon name="search"/>
                </template>
              </q-input>
            </template>
            <template v-slot:body-cell-emails="props">
              <q-td :props="props">
                <div v-for="email in props.value" :key="`${email}-email`" class="row">
                  <q-chip>
                    {{ email }}
                  </q-chip>
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-telefonos="props">
              <q-td :props="props">
                <div v-for="telefono in props.value" :key="`${telefono}-telefono`" class="row">
                  <q-chip>
                    {{ telefono }}
                  </q-chip>
                </div>
              </q-td>
            </template>
          </q-table>
        </q-step>
      </q-stepper>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import Controller from 'api/Controller';
import {OpcionesDialogo} from 'components/Utils/Interfaces';
import {Cliente, Contacto} from "@quiron/classes/dist/entities";

interface DialogPlugin {
  show();

  hide();
}

@Component
export default class BuscadorClienteContacto extends Vue implements DialogPlugin {
  @Ref('dialog') dialog_element: DialogPlugin;
  step = 1;
  contactosFilter = "";
  opcionesCliente: OpcionesDialogo = {
    campos_busqueda: [
      {etiqueta: "Nombre", valor: "nombre"},
      {etiqueta: "Identificacion", valor: "identificacion"}
    ],
    campos_presentacion: [
      {etiqueta: "Nombre", valor: "nombre"},
      {etiqueta: "Identificacion", valor: "identificacion"}
    ],
    opciones_busqueda: []
  };
  public valoresBusquedaCliente: string[] = [];
  public resultadosCliente: Cliente[] = [];
  public clienteSeleccionado: Cliente = new Cliente({});
  public contactoColumns = [
    {
      name: "nombres",
      label: "Nombres",
      field: "nombres",
      sortable: true,
      align: 'left',
    },
    {
      name: "apellidos",
      label: "Apellidos",
      field: "apellidos",
      sortable: true,
      align: 'left'
    },
    {
      name: "emails",
      label: "E-Mails",
      field: "emails",
      align: 'left'
    },
    {
      name: "telefonos",
      label: "Telefonos",
      field: "telefonos",
      align: 'left'
    }
  ]
  public valoresBusquedaContacto: string[] = [];
  public resultadosContacto: Contacto[] = [];
  public contactoSeleccionado: any = "";

  public get cardClasses() {
    if (this.step == 1) {
      return ["growAnimation", "firstSearch"];
    } else {
      return ["growAnimation", "secondSearch"];
    }
  }

  public get objetoBusquedaCliente() {
    let objeto = {};
    let i = 0;
    for (let campoBusqueda of this.valoresBusquedaCliente) {
      if (campoBusqueda != '') {
        objeto[this.opcionesCliente.campos_busqueda[i].valor] = campoBusqueda;
      }
      i++;
    }
    return objeto;
  }

  public mounted() {
    for (let campoBusqueda of this.opcionesCliente.campos_busqueda) {
      this.valoresBusquedaCliente.push('');
    }
  }

  public buscarCliente() {
    Controller.get<Cliente>("clientes", {
      params: {
        filtro: this.objetoBusquedaCliente,
        opciones: []
      }
    }, Cliente).then((resultado: Cliente[]) => {
      this.resultadosCliente = resultado;
    }).catch(error => {
      console.log(error);
      this.$q.notify('Ocurrio un error en el servidor');
    });
  }

  public async buscarContactosCliente() {
    await Controller.get<Cliente>("clientes", {
      params: {
        filtro: {
          identificacion: this.clienteSeleccionado.identificacion
        },
        opciones: ["contactos"]
      }
    }, Cliente).then((resultado: Cliente[]) => {
      this.resultadosContacto = resultado[0].contactos;
    }).catch(error => {
      console.log(error);
      this.$q.notify('Ocurrio un error en el servidor');
    });
  }

  public async seleccionarCliente(item: Cliente) {
    this.clienteSeleccionado = item;
    await this.buscarContactosCliente();
    this.dialogWidth = 80;
    this.step++;
    // this.$emit('ok', item);
    // this.hide();
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
}
</script>
<style scoped>
.growAnimation {
  transition: width 600ms;
}

.firstSearch {
  width: 30%;
  max-width: 100%;
}

.secondSearch {
  width: 80%;
  max-width: 100%;
}
</style>
