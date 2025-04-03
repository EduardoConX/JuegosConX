import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../home/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blackjack',
      name: 'blackjack',
      component: () => import('../blackjack/views/BlackjackView.vue'),
    },
  ],
})

export default router
