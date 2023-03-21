import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import VilnevQuiz from "@/views/quizes/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vilnev',
      name: 'vilnev',
      component: VilnevQuiz,
      props: true
    }
  ]
})

export default router
