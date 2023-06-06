import { ProductType } from "../redux/products/products.slice";

export interface GetProductsResponse {
  categoryName: string;
  itemCount: string;
  products: Array<ProductType>;
}
