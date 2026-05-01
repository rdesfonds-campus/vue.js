import { createRouter, createWebHistory } from 'vue-router'
import CitiesList from '../views/CitiesList.vue'
import CitiesMap from '../views/CitiesMap.vue'

const routes = [
  {
    path: '/villes',
    component: CitiesList
  },
  {
    path: '/carte',
    component: CitiesMap
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router