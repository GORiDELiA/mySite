import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/top',
    name: 'Top',
    component: () => import('@/views/Top')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('@/views/Catalog.vue')
  },
  {
    path: '/singin',
    name: 'SingIn',
    component: () => import('@/views/SingIn.vue')
  },
  {
    path: '/singup',
    name: 'SingUp',
    component: () => import('@/views/SingUp.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router