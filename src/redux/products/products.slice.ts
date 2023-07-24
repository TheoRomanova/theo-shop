import { createSlice } from "@reduxjs/toolkit";
import { getProductsThunk } from "./products.thunk";
import { ProductsState } from "./types";

const initialState: ProductsState = {
  categoryName: "",
  itemCount: 0,
  products: null,
  isLoading: false,
  currentCategoryId: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state: ProductsState, action) => {
      state.isLoading = action.payload;
    },
    setCurrentCategoryId: (state: ProductsState, action) => {
      state.currentCategoryId = action.payload;
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

export const { setLoading, setCurrentCategoryId } = productsSlice.actions;
export default productsSlice.reducer;
