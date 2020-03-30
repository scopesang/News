import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Register.vue')
  },
  {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/User.vue')
  },
  {
    path: '/editprofile',
    name: 'Editprofile',
    component: () => import('../views/Editprofile')
  },
  {
    path: '/follow',
    name: 'follow',
    component: () => import('../views/Follow.vue')
  },
  {
    path: '/star',
    name: 'star',
    component: () => import('../views/Star.vue')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('../views/Comment')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
