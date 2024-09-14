import {useApi} from "@/shared/utils/api/useApi";


export const warehouseController = {
  async getWarehouseById(warehouseId) {
    return await useApi.get(`/warehouses/${warehouseId}`);
  },
  async getProductsInWarehouse(warehouseId) {
    return await useApi.get(`/warehouses/${warehouseId}/products`);
  },
  async createWarehouse(warehouseData) {
    return await useApi.post(`/warehouses/create`, warehouseData);
  },
  async getWarehouses() {
    return await useApi.get(`/warehouses`);
  },
}
