import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import PostPage from '@/pages/PostPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/posts',
      component: PostPage
    },
    {
      path: '/posts/:id'
    }
  ]
})

export default router
