<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          aria-label="Menu"
          dense
          flat
          icon="menu"
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          {{ usuario.nombres }} {{ usuario.apellidos }}
        </q-toolbar-title>

        <q-btn
          label="Cerrar sesion"
          @click="signOut"
          color="secondary"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
      show-if-above
    >
      <q-list>
        <q-item-label
          class="text-grey-8"
          header
        >
          Comandos
        </q-item-label>
        <q-item v-for="hub in hubsCatalogo" :key="`hub_key_${hub.id}`" :to="hub.route" replace>
          <q-item-section avatar>
            <q-icon :name="hub.icon"/>
          </q-item-section>

          <q-item-section>
            {{ hub.label }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import hubCollection from "../router/Hubs";
import {HubForLayout} from "../router/Hubs/HubClass";
import {Cookies, LocalStorage} from "quasar";

@Component({
  name: "main-layout"
})
export default class MainLayout extends Vue {
  leftDrawerOpen: boolean = false;
  usuario: any = LocalStorage.getItem("usuario");

  get hubsCatalogo(): HubForLayout[] {
    return hubCollection.getHubsForLayout();
  }

  public signOut(){
    Cookies.remove("token");
    LocalStorage.remove("usuario");
    location.reload();
  }
}
</script>
