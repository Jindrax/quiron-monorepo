<template>
  <q-page>
    <q-card>
      <q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {LocalStorage} from "quasar";

@Component({
  name: "notificaciones-home"
})
export default class NotificacionesHome extends Vue {
  usuario: any = LocalStorage.getItem("usuario");
};
</script>
