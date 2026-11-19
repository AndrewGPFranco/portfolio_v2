import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

// Página única: as seções são navegadas por âncora (#sobre, #stack...).
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/tecnologias', redirect: { path: '/', hash: '#stack' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
