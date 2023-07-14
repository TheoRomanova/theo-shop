import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../products/types";

interface ProductBasketType extends ProductType {
  size: number;
}

interface State {
  productsInBasket: Array<ProductBasketType>;
}
const initialState: State = {
  productsInBasket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    putProductInBasket: (state: State, action) => {
      state.productsInBasket = [...state.productsInBasket, action.payload];
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getProductInfoThunk.fulfilled, (state, action) => {
  //       console.log("getProductInfoThunk fulfilled!", action.payload);

  //     })
  //     .addCase(getProductInfoThunk.rejected, (state, action) => {
  //       console.log("getProductInfoThunk rejected!", action.error);
  //     });
  // },
});

export const { putProductInBasket } = basketSlice.actions;
export default basketSlice.reducer;

// id: number;
// name: string;
// price: {
//   current: {
//     text: string;
//   };
// };
// colour: string;
// brandName: string;
// productCode: number;
// imageUrl: string;
// additionalImageUrls: Array<string>;
