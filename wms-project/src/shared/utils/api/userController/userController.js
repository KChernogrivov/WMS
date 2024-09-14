import {useApi} from "@/shared/utils/api/useApi";


export const userController = {
  async getUserById(userId) {
    return await useApi.get(`/users/${userId}`);
  },
  async createUser(userData) {
    return await useApi.post(`/users/create`, userData);
  },
  async getUsers() {
    return await useApi.get(`/users`);
  },
}
