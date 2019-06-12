import Vue from 'vue'
import Router from 'vue-router'

let login=() => import(/* webpackChunkName: "login" */ '../views/login.vue')
let home=() => import(/* webpackChunkName: "home" */ '../views/home.vue')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:"/login"
    },
    {
      path:"/login",
      name:"login",
      component:login
    },
    {
      path:"/home",
      name:"home",
      component:home
    }
  ]
})
