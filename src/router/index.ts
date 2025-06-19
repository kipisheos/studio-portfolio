import { createRouter, createWebHistory } from 'vue-router'
import MainLayoutView from "@/views/MainLayoutView.vue";

const ROUTE_CONFIG = {
  path: '/',
  name: 'layout',
  component: MainLayoutView,
  children: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/WorksView.vue'),
    },
    {
      path: '/single-work/:title/:index',
      name: 'SingleWorkPage',
      component: () => import('../views/SingleWorkView.vue'),
    },
  ],
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ROUTE_CONFIG
  ],
})

export default router
