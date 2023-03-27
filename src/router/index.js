import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import Quiz from "@/views/quizes/QuizView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vilnev',
      name: 'vilnev',
      component: Quiz,
      props: true
    },
    {
      path: '/nolan',
      name: 'nolan',
      component: Quiz,
      props: true
    }
  ]
})

export default router
