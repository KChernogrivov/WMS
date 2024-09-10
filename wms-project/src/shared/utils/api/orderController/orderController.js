import axios from "axios";

export const orderController = {
  async getOrderById(companyId) {
    return await axios.get(`/orders/${companyId}`);
  },
  async createOrder(orderData) {
    return await axios.post(`/orders/create`, orderData);
  },
  async getOrders() {
    return await axios.get(`/orders`);
  },
}
