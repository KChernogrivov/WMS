import {AuthLayout, BaseLayout} from "@/shared/ui/layouts";

export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/orders',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login-page.vue'),
    meta: {
      layout: AuthLayout,
    }
  },
  {
    path: '/warehouses',
    name: 'warehouses',
    component: () => import('@/pages/warehouse/warehouses-page.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/warehouses/create',
    name: 'create-warehouse',
    component: () => import('@/pages/warehouse/create-warehouse.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/warehouses/:id',
    name: 'warehouse',
    component: () => import('@/pages/warehouse/warehouse-page.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/pages/order/orders-page.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/orders/create-inbound',
    name: 'create-inbound',
    component: () => import('@/pages/order/create-inbound.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/orders/create-outbound',
    name: 'create-outbound',
    component: () => import('@/pages/order/create-outbound.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/orders/create-internal',
    name: 'create-internal',
    component: () => import('@/pages/order/create-internal.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/orders/:id',
    name: 'order',
    component: () => import('@/pages/order/order-page.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/pages/product/products-page.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/products/create',
    name: 'create-product',
    component: () => import('@/pages/product/create-product.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () => import('@/pages/warehouse/warehouse-page.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/pages/user/users-page.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/users/create',
    name: 'create-user',
    component: () => import('@/pages/user/create-user.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/companies',
    name: 'companies',
    component: () => import('@/pages/company/companies-page.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/companies/create',
    name: 'create-company',
    component: () => import('@/pages/company/create-company.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
  {
    path: '/companies/:id',
    name: 'company',
    component: () => import('@/pages/company/company-page.vue'),
    meta: {
      layout: BaseLayout,
    }
  },
]
