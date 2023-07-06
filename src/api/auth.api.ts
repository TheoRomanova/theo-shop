import { instance2 } from "./api";

export interface ApiLoginDataType {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LogiInResponse {
  resultCode: number;
  messages: [];
  data: {
    userId: number;
  };
}

export interface GetAuthResponse {
  resultCode: number;
  messages: [];
  data: {
    id: number;
    email: string;
    login: string;
  };
}

export const AuthApi = {
  async getAuth() {
    return instance2.get<GetAuthResponse>("auth/me").then((res) => res.data);
  },

  async logIn({ email, password, rememberMe }: ApiLoginDataType) {
    return instance2
      .post<LogiInResponse>("/auth/login", { email, password, rememberMe })
      .then((res) => res.data);
  },
};
