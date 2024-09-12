import {useApi} from "@/shared/utils/api/useApi";


export const orderController = {
  async getOrderById(orderId) {
    return await useApi.get(`/orders/${orderId}`);
  },
  async createOrder(orderData) {
    return await useApi.post(`/orders/create`, orderData);
  },
  async getOrders() {
    return await useApi.get(`/orders`);
  },
}
