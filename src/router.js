import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/hero',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/comp-about',
      name: 'About',
      component: About
    }
  ]
})
