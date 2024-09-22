import {useApi} from "@/shared/utils/api/useApi";


export const productController = {
  async getProductById(productId) {
    return await useApi.get(`/products/${productId}`);
  },
  async getProductsInWarehouse(productId) {
    return await useApi.get(`/products/${productId}/warehouses`);
  },
  async createProduct(productData) {
    return await useApi.post(`/products/create`, productData);
  },
  async getProducts() {
    return await useApi.get(`/products`);
  },
}
