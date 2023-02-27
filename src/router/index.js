import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue';
import CryLaugh from '../views/cryLaugh/CryLaugh.vue';
import LeftRight from '../views/leftRight/LeftRight.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cryLaugh',
      name: 'CryLaugh',
      component: CryLaugh
    },
    {
      path: '/leftRight',
      name: 'LeftRight',
      component: LeftRight
    },
  ]
})

export default router
