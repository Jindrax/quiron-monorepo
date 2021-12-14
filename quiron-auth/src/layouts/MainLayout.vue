<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <index/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Index from "pages/Index.vue";

const URL = window.location.host;
@Component({
  name: "main-layout",
  components: {Index}
})
export default class MainLayout extends Vue {

}
</script>
