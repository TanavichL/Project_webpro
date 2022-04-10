import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/register.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/main/about.vue')
  },
  {
    path: '/question',
    name: 'question',
    component: () => import('../views/main/question.vue')
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import('../views/seller/seller.vue')
  },
]


const router = new VueRouter({
  routes
})

export default router
