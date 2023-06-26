import { createSlice } from "@reduxjs/toolkit";
import { getProductsThunk } from "./products.thunk";
import { ProductType } from "./types";

interface State {
  categoryName: string;
  itemCount: number;
  products: Array<ProductType> | null;
  isLoading: boolean;
}

const initialState: State = {
  categoryName: "",
  itemCount: 0,
  products: null,
  isLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state: State, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.categoryName = action.payload.categoryName;
        state.itemCount = action.payload.itemCount;
        state.products = action.payload.products;
        console.log("getProductsThunk fullfield!", action.payload);
        state.isLoading = false;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        console.log("getProductsThunk rejected!", action.error);
      });
  },
});

export const { setLoading } = productsSlice.actions;
export default productsSlice.reducer;
