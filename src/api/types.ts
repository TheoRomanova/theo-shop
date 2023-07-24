import { ProductType } from "../redux/products/types";
export interface ProductInfo {
  aboutMe: string;
  sizeAndFit: string;
  careInfo: string;
}

export interface ApiLoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

//Response
export interface GetProductsResponse {
  categoryName: string;
  itemCount: string;
  products: Array<ProductType>;
}

export interface GetProductInfoResponse {
  data: {
    id: number;
    name: string;
    description: string;
    gender: string;
    productCode: string;
    info: ProductInfo;
  };
}

export interface LogiInResponse {
  resultCode: number;
  messages: [];
  data: {
    userId: number;
  };
}

export interface GetAuthResponse {
  resultCode: number;
  messages: Array<string>;
  data: {
    id: number;
    email: string;
    login: string;
  };
}

export interface DeleteLoginResponse {
  resultCode: number;
  messages: Array<string>;
}
