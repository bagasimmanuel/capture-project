import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import OurWork from '../views/OurWork.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'conctact',
      component: ContactUs
    },
    {
      path: '/our-work',
      name: 'our-work',
      component: OurWork
    }
  ]
})

export default router
