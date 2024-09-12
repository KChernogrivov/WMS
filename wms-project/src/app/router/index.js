
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  const isAuthenticated = localStorage.getItem('token');
  if (
    !isAuthenticated &&
    to.name !== 'login'
  ) {
    return { name: 'login' }
  }

  if (
    isAuthenticated &&
    to.name === 'login'
  ) {
    return { name: 'orders' }
  }
})

export default router
