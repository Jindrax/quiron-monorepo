<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>
<script lang="ts">
import devtools from "@vue/devtools";

if (process.env.NODE_ENV === 'development') {
  // devtools.connect();
}
import {Vue, Component} from 'vue-property-decorator';
import "reflect-metadata";

@Component
export default class App extends Vue {
}
</script>
