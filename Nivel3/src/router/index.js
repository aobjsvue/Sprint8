import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/starships',
    name: 'starships',
    component: () => import('../views/StarshipsListView.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.logged === false) {
        next(false);
        store.commit("toggleLoginModal");
      } else {
        next();
      }
    },
  },
  {
    path: '/starships/:id',
    name: 'starship',
    component: () => import('../views/StarshipCardView.vue'),
    props: true
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('../views/CharactersListView.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.logged === false) {
        next(false);
        store.commit("toggleLoginModal");
      } else {
        next();
      }
    },
  },
  {
    path: '/characters/:id',
    name: 'people',
    component: () => import('../views/CharacterCardView.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router