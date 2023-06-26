import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsApi } from "../../api/api";

interface GetProductInfoData {
  id: number;
}
export const getProductInfoThunk = createAsyncThunk(
  "products/getProducts",
  async ({ id }: GetProductInfoData, { dispatch }): Promise<any> => {
    try {
      const data = await ProductsApi.getMoreProductInfo(id);
      console.log(data, "data");
      return data?.info;
    } catch (err) {
      throw err;
    }
  }
);
