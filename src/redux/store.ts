import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/products/products.slice";
import productInfoReducer from "./productInfo/productInfo.slice";
import authReducer from "./auth/auth.slice";
import basketReducer from "./basket/basket.slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productInfo: productInfoReducer,
    auth: authReducer,
    basket: basketReducer,
  },
});

export type Root = typeof store.getState;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
