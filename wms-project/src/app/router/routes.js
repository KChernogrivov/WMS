import {AuthLayout, BaseLayout} from "@/shared/ui/layouts";
import OrdersPage from "@/pages/order/orders-page.vue";
import LoginPage from "@/pages/login/login-page.vue";
import WarehousePage from "@/pages/warehouse/warehouse-page.vue";
import CreateWarehouse from "@/pages/warehouse/create-warehouse.vue";

export const routes = [
  {
    path: '/',
    name: 'home',
    component: OrdersPage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      layout: AuthLayout,
    }
  },
  {
    path: '/warehouses',
    name: 'warehouses',
    component: WarehousePage,
    children: [
      {
        path: '/warehouses/create',
        name: 'create-warehouse',
        component: CreateWarehouse,
      }
    ]
  }
]
