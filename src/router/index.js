import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Root',
    component: () => import('../views/Home.vue'),
  }
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;