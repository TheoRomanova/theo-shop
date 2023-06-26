import { ProductType } from "../redux/products/types";

export interface GetProductsResponse {
  categoryName: string;
  itemCount: string;
  products: Array<ProductType>;
}

export interface ProductInfo {
  aboutMe: string;
  sizeAndFit: string;
  careInfo: string;
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
