import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'

import Default from '@/components/Default.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Default',
    component: Default,
  }, {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: false,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
