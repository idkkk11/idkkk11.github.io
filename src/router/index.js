// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/about',  // Update path to include #
    name: 'about', // You can keep the name as is
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    // ...meta and other configurations...
  },
  {
    path: '/va', // Update path to include #
    name: 'voiceassistant',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectAlexa.vue')
  },
  {
    path: '/3d', // Update path to include #
    name: '3dlabs',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/Project3D.vue')
  },
  {
    path: '/emotech', // Update path to include #
    name: 'emotech',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectEmotech.vue')
  },
  {
    path: '/quad', // Update path to include #
    name: 'quad',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectQuad.vue')
  },
  {
    path: '/lesku', // Update path to include #
    name: 'lesku',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectLesku.vue')
  },
  {
    path: '/philips', // Update path to include #
    name: 'philips',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectPhilips.vue')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    // meta: {
    //   title: 'Home Page - Example App',
    //   metaTags: [
    //     {
    //       name: 'description',
    //       content: 'The home page of our example app.'
    //     },
    //     {
    //       property: 'og:description',
    //       content: 'The home page of our example app.'
  //       }
  //     ]
  //   }
  // },
  // {
  //   path: '/va',
  //   name: 'voiceassistant',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectAlexa.vue')
  // },
  // {
  //   path: '/3d',
  //   name: '3dlabs',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/projects/Project3D.vue')
  // },
  // {
  //   path: '/emotech',
  //   name: 'emotech',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectEmotech.vue')
  // },
  // {
  //   path: '/quad',
  //   name: 'quad',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectQuad.vue')
  // },
  // {
  //   path: '/lesku',
  //   name: 'lesku',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectLesku.vue')
  // },
  // {
  //   path: '/philips',
  //   name: 'philips',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/projects/ProjectPhilips.vue')
  // }
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition;
//     } else {
//       return { top: 0 };
//     }
//   },
// });

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});


export default router
