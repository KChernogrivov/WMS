import {useApi} from "@/shared/utils/api/useApi";

export const authController = {
  async login(data) {
    return await useApi.post(`/token`, data);
  },
  async logout(user) {
    return await useApi.post(`/logout`, user);
  },
}
