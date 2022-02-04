<template>
  <q-layout view="lHh Lpr lFf">
    <template v-if="auth">
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
            color="secondary"
            label="Cerrar sesion"
            @click="signOut"
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
    </template>
    <template v-else>
      <q-page-container>
        <AuthHelper/>
      </q-page-container>
    </template>
  </q-layout>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import hubCollection from "../router/Hubs";
import {HubForLayout} from "../router/Hubs/HubClass";
import {Cookies, LocalStorage} from "quasar";
import AuthHelper from "../DEVONLY/AuthHelper.vue";

@Component({
  name: "main-layout",
  components: {
    AuthHelper
  }
})
export default class MainLayout extends Vue {
  leftDrawerOpen: boolean = false;
  usuario: any = LocalStorage.getItem("usuario");
  auth: boolean = false;

  get hubsCatalogo(): HubForLayout[] {
    return hubCollection.getHubsForLayout();
  }

  public signOut() {
    Cookies.remove("token");
    LocalStorage.remove("usuario");
    //TODO: remover en produccion
    this.auth = false;
    location.reload();
  }

  mounted() {
    this.auth = this.authResolver();
  }

  //TODO: remover en produccion
  public authResolver() {
    if(!process.env.PROD){
      return true;
    }
    return LocalStorage.has("usuario");
  }
}

</script>
