import "./styles.scss";
import "./media.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { getSizes } from "../../data/data";
import { ProductType } from "../../redux/products/types";
import { favoritesStore } from "../../mobx/store";

interface Props {
  product: ProductType;
}

const onAddItemToFavorites = (product: ProductType) => {
  favoritesStore.addToFavorite(product);
};

export const ShopItem = observer(({ product }: Props) => (
  <div key={product.id} className="shop-item">
    <NavLink to={`/shop-item/${product.id}`}>
      <img src={`https://${product.imageUrl} `}></img>{" "}
    </NavLink>
    <div className="description">
      <p>{product.name}</p>
      <span>product code: {product.productCode}</span>
      <div className="price-favorites">
        <p className="price">{product.price.current.text}</p>
        <span onClick={() => onAddItemToFavorites(product)}></span>
        <div className="sizes">
          {getSizes(37, 42).map((size) => (
            <span key={size} className="size">
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
));
