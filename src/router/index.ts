import { createRouter, createWebHistory } from 'vue-router';


import HomePage from '../home/pages/HomePage.vue';
import HangManPage from '../hangman/pages/HangManPage.vue';
import PokemonPage from '../pokemon/pages/PokemonPage.vue';
import BlackJackPage from '../blackjack/pages/BlackJackPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //Home
        { path: '/', name: 'home', component: HomePage },

        { path: '/blackjack', name: 'blackjack', component: BlackJackPage },
        { path: '/hangman', name: 'hangman', component: HangManPage },
        { path: '/pokemon', name: 'pokemon', component: PokemonPage },

        //Default
        { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
    ]
});

export default router;