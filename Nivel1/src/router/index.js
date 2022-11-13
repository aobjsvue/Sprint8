import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/starships',
    name: 'starships',
    component: () => import('../views/StarshipsListView.vue')
  },
  {
    path: '/starships/:id',
    name: 'starship',
    component: () => import('../views/StarshipCardView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router