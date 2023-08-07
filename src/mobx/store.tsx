import { makeAutoObservable } from "mobx";
import { ProductType } from "../redux/products/types";

class FavoritesStore {
  favoriteItems = [] as Array<ProductType>;

  constructor() {
    makeAutoObservable(this);
  }

  addToFavorite(product: ProductType) {
    // const updatedArr = this.favoriteItems.filter(
    //   (item) => item.id !== product.id
    // );
    // if (updatedArr.length !== this.favoriteItems.length) {
    this.favoriteItems.push(product);
    // }
  }
  deleteFromFavorites() {}
}

export const favoritesStore = new FavoritesStore();
