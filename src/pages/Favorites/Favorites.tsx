import { observer } from "mobx-react-lite";
import React from "react";
import { ProductType } from "../../redux/products/types";

export const FavoritesPage = observer(({ store }: any) => {
  console.log("favorites", JSON.parse(JSON.stringify(store.favoriteItems))); //в утилс функ закинуть
  return (
    <div>
      {store.favoriteItems.map((product: ProductType) => {
        return <div key={product.id}>{product.id}</div>;
      })}
    </div>
  );
});
