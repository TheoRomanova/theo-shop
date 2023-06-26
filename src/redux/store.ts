import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../redux/products/products.slice";
import productInfoReducer from "./productInfo/productInfo.slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productInfo: productInfoReducer,
  },
});

export type Root = typeof store.getState;
//определи то, что возвращается, и зафикируй это под таким вот названием
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
