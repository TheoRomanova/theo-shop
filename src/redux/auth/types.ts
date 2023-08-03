export interface AuthState {
  email: string;
  password: string;
  rememberMe: boolean;
  userId?: number | null;
  login: string;
  errorMessages: Array<string>;
}

export interface ApiLoginDataType {
  email: string;
  password: string;
  rememberMe: boolean;
}
