<template>
  <q-page>
    <q-tabs class="bg-grey">
      <q-route-tab v-for="action in actions" :label="action.label" :to="action.route" replace :key="action.route" class="bg-white"/>
    </q-tabs>
    <q-layout>
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
