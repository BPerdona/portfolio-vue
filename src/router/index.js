import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PlaygroundView from '../views/PlaygroundView.vue'
import {auth} from '../firebase/init.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/playground',
      name: 'playground',
      component: PlaygroundView,
      meta:{
         requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next)=>{
  if(to.meta.requiresAuth)
    auth.onAuthStateChanged((user)=>{
      user ? next() : next('/login')
    })
  else
    next()
});

export default router
