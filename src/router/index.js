import { createRouter, createWebHistory } from 'vue-router'
import UseRouteExample from '@/components/UseRouteExample.vue'
import UseRouteExample2 from '@/components/UseRouteExample2.vue'

const routes = [
  {
    path: '/',
    name: "Home",
    component: UseRouteExample
  },
  {
    path: '/desti/:id',
    name: 'desti',
    component: UseRouteExample2
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router