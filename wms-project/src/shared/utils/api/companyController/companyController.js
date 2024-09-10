import axios from "axios";

export const companyController = {
  async getCompanyById(companyId) {
    return await axios.get(`/companies/${companyId}`);
  },
  async createCompany(companyData) {
    return await axios.post(`/companies/create`, companyData);
  },
  async getCompanies() {
    return await axios.get(`/companies`);
  },
}
