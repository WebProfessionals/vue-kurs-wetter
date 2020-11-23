import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import City from '../views/City.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/city/:city',
    name: 'City',
    component: City,
    beforeEnter: (to, from, next) => {
      console.log('City View')
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(from)
  console.log(to)
  next()
})

export default router
