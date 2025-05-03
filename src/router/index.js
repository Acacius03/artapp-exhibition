import { createRouter, createWebHistory } from 'vue-router'
import TitleView from '@/views/TitleView.vue'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'title',
      component: TitleView,
      meta: { transition: 'fade' },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide-left' },
    },
  ],
})

export default router
