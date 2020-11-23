import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import City from '../views/City.vue'
import Search from '../views/Search.vue'
import store from '../store'
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
      store.dispatch('fetchWeatherForStore', to.params.city).then(response => {
        console.log(response)
        next()
      }).catch(err => {
        console.log(err)
      })

    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*
router.beforeEach((to, from, next) => {
  console.log(from)
  console.log(to)
  next()
})
*/

export default router
