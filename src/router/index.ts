import { createRouter, createWebHistory } from 'vue-router';


import HomePage from '../home/pages/HomePage.vue';
import HangManPage from '../hangman/pages/HangManPage.vue';
import PokemonPage from '../pokemon/pages/PokemonPage.vue';
import BlackJackPage from '../blackjack/pages/BlackJackPage.vue';
import DrumsPage from '../drums/pages/DrumsPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //Home
        { path: '/', name: 'home', component: HomePage },

        { path: '/hangman', name: 'hangman', component: HangManPage },
        { path: '/pokemon', name: 'pokemon', component: PokemonPage },
        { path: '/blackjack', name: 'blackjack', component: BlackJackPage },
        { path: '/drums', name: 'drums', component: DrumsPage },

        //Default
        { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
    ]
});

export default router;