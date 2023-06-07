import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsApi } from "../../api/api";
import { setLoading } from "./products.slice";
export const getProductsThunk = createAsyncThunk(
  "products/getProducts",
  async (data, { dispatch }): Promise<any> => {
    try {
      dispatch(setLoading(true));
      const data = await ProductsApi.getProducts();
      const { categoryName, products, itemCount } = data;
      console.log(products);
      return { categoryName, products, itemCount };
    } catch (err) {
      throw err;
    }
  }
);
