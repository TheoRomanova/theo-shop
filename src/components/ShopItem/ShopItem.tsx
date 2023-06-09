import "./styles.scss";
import "./media.scss";

import { NavLink } from "react-router-dom";

import { getSizes } from "../../data/data";
import { ProductType } from "../../redux/products/types";

interface Props {
  product: ProductType;
}

export const ShopItem = ({ product }: Props) => {
  return (
    <div className="shop-item">
      <NavLink to={`/shop-item/${product.id}`}>
        <img src={`https://${product.imageUrl} `}></img>
        <div className="description">
          <p>{product.name}</p>
          <span>product code: {product.productCode}</span>
          <div className="price-favorites">
            <p className="price">{product.price.current.text}</p>
            <span></span>
            <div className="sizes">
              {getSizes(37, 42).map((size) => (
                <span className="size">{size}</span>
              ))}
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
