import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../products/types";

export interface ProductBasketType extends ProductType {
  size: number;
}

interface State {
  productsInBasket: Record<number, Array<ProductBasketType>>;
}
const initialState: State = {
  productsInBasket: {},
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    putProductInBasket: (state: State, action) => {
      state.productsInBasket[action.payload.productCode] = [
        ...action.payload.selectedProducts,
      ];
    },
  },
});

export const { putProductInBasket } = basketSlice.actions;
export default basketSlice.reducer;
