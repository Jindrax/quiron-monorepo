import {RouteConfig} from 'vue-router';
import hubs from "./Hubs";

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', redirect: '/home'},
      ...hubs.getHubsForVueRouter()
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
