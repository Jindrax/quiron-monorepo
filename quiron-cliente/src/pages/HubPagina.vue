<template>
  <q-page>
    <q-tabs>
      <q-route-tab v-for="action in actions" :label="action.label" :to="action.route" replace :key="action.route" active-class="advance-btn"/>
    </q-tabs>
    <q-layout>
      <q-separator/>
      <q-page-container>
        <router-view/>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import {ActionForHubPage} from "../router/Hubs/HubClass";

@Component({
  name: "hub"
})
export default class PageIndex extends Vue {
  @Prop() actions!: ActionForHubPage[];
};
</script>

<style>
</style>
