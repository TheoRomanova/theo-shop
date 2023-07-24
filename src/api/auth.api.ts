import { instance2 } from "./api";
import {
  ApiLoginData,
  DeleteLoginResponse,
  GetAuthResponse,
  LogiInResponse,
} from "./types";

export const AuthApi = {
  async getAuth() {
    return instance2.get<GetAuthResponse>("auth/me").then((res) => res.data);
  },

  async logIn({ email, password, rememberMe }: ApiLoginData) {
    return instance2
      .post<LogiInResponse>("/auth/login", { email, password, rememberMe })
      .then((res) => res.data);
  },

  async logout() {
    return instance2
      .delete<DeleteLoginResponse>("/auth/login")
      .then((res) => res.data);
  },
};
