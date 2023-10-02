import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/va',
    name: 'voiceassistant',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectAlexa.vue')
  },
  {
    path: '/3d',
    name: '3dlabs',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/Project3D.vue')
  },
  {
    path: '/emotech',
    name: 'emotech',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectEmotech.vue')
  },
  {
    path: '/quad',
    name: 'quad',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectQuad.vue')
  },
  {
    path: '/lesku',
    name: 'lesku',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectLesku.vue')
  },
  {
    path: '/philips',
    name: 'philips',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectPhilips.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
}
})


export default router
