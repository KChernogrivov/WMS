import {useApi} from "@/shared/utils/api/useApi";

export const companyController = {
  async getCompanyById(companyId) {
    return await useApi.get(`/vendors/${companyId}`);
  },
  async createCompany(companyData) {
    return await useApi.post(`/vendors/create`, companyData);
  },
  async getWarehousesCompany(companyId) {
    return await useApi.get(`/vendors/${companyId}/warehouses`);
  },
  async getCompanies() {
    return await useApi.get(`/vendors`);
  },
}
