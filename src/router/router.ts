import { createRouter, createWebHistory } from 'vue-router'
import event from '@/views/EventHome.vue'
import login from '@/views/login.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login, 
  },
  {
    path: '/event',
    name: 'event',
    component: event, 
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView, 
  // },
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
