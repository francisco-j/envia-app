import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductList
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/ProductDetailsView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
