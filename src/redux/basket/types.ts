import { ProductType } from "../products/types";

export interface ProductBasketType extends ProductType {
  size: number;
}

export interface BasketState {
  productsInBasket: Record<number, Array<ProductBasketType>>;
}
