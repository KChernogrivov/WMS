import AuthPage from '@/pages/Login/login-page.vue'
import OrdersPage from '@/pages/Order/orders-page.vue'
import BaseTemplate from '@/pages/layouts/base-template.vue'

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: AuthPage
  },
  {
    path: '/',
    name: 'home',
    component: BaseTemplate,
    children: [
      {
        path: '/orders',
        name: 'orders',
        component: OrdersPage
      }
    ]
  }
]
