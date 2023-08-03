import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsApi } from "../../api/product-api";
import { ProductInfo } from "../../api/types";

interface GetProductInfoData {
  id: number;
}

export const getProductInfoThunk = createAsyncThunk(
  "products/getProductInfo",
  async ({ id }: GetProductInfoData): Promise<ProductInfo> => {
    try {
      const data = await ProductsApi.getMoreProductInfo(id);
      console.log(data, "data");
      return data!.info;
    } catch (err) {
      return err as any;
    }
  }
);
