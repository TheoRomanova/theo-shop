import { createSlice } from "@reduxjs/toolkit";
import { BasketState } from "./types";

const initialState: BasketState = {
  productsInBasket: {},
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    putProductInBasket: (state: BasketState, action) => {
      state.productsInBasket[action.payload.productCode] = [
        ...action.payload.selectedProducts,
      ];
    },
    updateProductInBasket: (state: BasketState, action) => {
      console.log("DFFF", action.payload);
      state.productsInBasket = action.payload;
    },
  },
});

export const { putProductInBasket, updateProductInBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
