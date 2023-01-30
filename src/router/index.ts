import { createRouter, createWebHistory } from 'vue-router';


import HomePage from '../pages/HomePage.vue';
import HangManPage from '../pages/HangManPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //Home
        { path: '/', name: 'home', component: HomePage },

        { path: '/hangman', name: 'hangman', component: HangManPage },

        //Default
        { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
    ]
});

export default router;