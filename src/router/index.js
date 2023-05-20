import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Random from '../views/Random.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/random',
      name: 'random',
      component: Random
    }
  ]
})

export default router
