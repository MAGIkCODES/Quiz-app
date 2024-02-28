import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Quizes',
            component: () => import('../views/Quizes.vue')
        },
        {
            path: '/quiz/:id',
            name: 'Quiz',
            component: () => import('../views/Quiz.vue')
        }
    ]
})

export default router