import {useApi} from "@/shared/utils/api/useApi";


export const orderController = {
  async getOrderById(companyId) {
    return await useApi.get(`/orders/${companyId}`);
  },
  async createOrder(orderData) {
    return await useApi.post(`/orders/create`, orderData);
  },
  async getOrders() {
    return await useApi.get(`http://ec2-16-170-140-7.eu-north-1.compute.amazonaws.com/api/ordersss`);
  },
}
