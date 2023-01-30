import { createRouter, createWebHistory } from 'vue-router';


import HangManPage from '../pages/HangManPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //Home
        { path: '/', name: 'home', component: HangManPage },

        { path: '/hangman', name: 'hangman', component: HangManPage },

        //Default
        { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
    ]
});

export default router;