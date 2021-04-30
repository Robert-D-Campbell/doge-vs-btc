import { createRouter, createWebHistory } from 'vue-router';
import BtcData from '../views/BtcData.vue';

const routes = [
  {
    path: '/',
    name: 'BtcData',
    component: BtcData,
  },
  {
    path: '/dogedata',
    name: 'DogeData',
    // route level code-splitting
    // this generates a separate chunk (DogeData.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "dogeData" */ '../views/DogeData.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
