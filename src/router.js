import Vue from 'vue'
import Router from 'vue-router'
import SignUp from "./views/SignUp";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/registro",
      name: "signup",
      component: SignUp
    }
  ]
})
