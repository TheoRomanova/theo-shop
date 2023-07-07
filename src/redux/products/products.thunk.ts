import { createAsyncThunk } from "@reduxjs/toolkit";

import { setLoading } from "./products.slice";
import { ProductsApi } from "../../api/product-api";
export const getProductsThunk = createAsyncThunk(
  "products/getProducts",
  async (data, { dispatch }): Promise<any> => {
    try {
      console.log("getProductsThunk!");
      dispatch(setLoading(true));
      const data = await ProductsApi.getProducts();
      const { categoryName, products, itemCount } = data;

      return { categoryName, products, itemCount };
    } catch (err) {
      throw err;
    }
  }
);
