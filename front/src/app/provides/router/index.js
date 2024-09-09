import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const isAuthenticated = true

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  if (
    !isAuthenticated &&
    to.name !== 'Login'
  ) {
    return { name: 'Login' }
  }
})
