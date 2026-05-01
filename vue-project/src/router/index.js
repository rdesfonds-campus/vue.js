import { createRouter, createWebHistory } from 'vue-router'
import CitiesList from '../views/CitiesList.vue'

const routes = [
  {
    path: '/villes',
    name: 'cities',
    component: CitiesList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router