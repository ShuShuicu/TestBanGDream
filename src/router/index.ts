import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AnswerView from '../views/AnswerView.vue'
import PersonalityView from '../views/PersonalityView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/answer',
      name: 'answer',
      component: AnswerView,
    },
    {
      path: '/personality',
      name: 'personality',
      component: PersonalityView,
    },
  ],
})

export default router
