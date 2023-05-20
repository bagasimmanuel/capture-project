import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})

export default router
