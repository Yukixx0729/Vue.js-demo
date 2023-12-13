import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/artwork/:id',
      component: () => import('../views/ArtworkPage.vue')
    }
  ]
})

export default router
