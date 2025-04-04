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
      path: '/games',
      name: 'games',
      component: () => import('../games/views/GamesView.vue'),
    },
    {
      path: '/blackjack',
      name: 'blackjack',
      component: () => import('../blackjack/views/BlackjackView.vue'),
    },
    {
      path: '/hangman',
      name: 'hangman',
      component: () => import('../hangman/views/HangmanView.vue'),
    },
  ],
})

export default router
