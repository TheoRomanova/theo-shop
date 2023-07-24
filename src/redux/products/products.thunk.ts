import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "./products.slice";
import { ProductsApi } from "../../api/product-api";

interface CategoryIdType {
  categoryId: string;
}
// interface ProductsThunkReturnType {
//   categoryName: string;
//   itemCount: number;
//   products: Array<ProductType> | null;

// }

export const getProductsThunk = createAsyncThunk(
  "products/getProducts",
  async ({ categoryId }: CategoryIdType, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const data = await ProductsApi.getProducts(categoryId);

      const { categoryName, products, itemCount } = data;

      return { categoryName, products, itemCount };
    } catch (err) {
      return err;
    }
  }
);
