import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AuthHome from '@/views/AuthHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/auth',
      name: 'home-auth',
      component: AuthHome,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Login,
    },
  ],
})

export default router
