import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeCardComponent from "./components/HomeCardComponent.vue";
import MailMe from "./components/MailMe";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {path:'', component:HomeCardComponent},
        {path:'contactMe', component:MailMe}
      ]

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
