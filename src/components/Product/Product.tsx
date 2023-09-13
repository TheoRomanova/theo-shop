import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { ProductBasketType } from "../../redux/basket/types";

interface Props {
  product: ProductBasketType;
  onRemoveProduct(): void;
}

export const Product = ({ product, onRemoveProduct }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="product">
      <img
        onClick={() => navigate(`/shop-item/${product.id}`)}
        src={`https://${product.imageUrl}`}
        className="product-image"
      ></img>
      <div className="product-info">
        <div className="remove-product" onClick={onRemoveProduct}></div>
        <div>
          <h2>{product.name}</h2>
          <span className="product_code">
            Product code: {product.productCode}
          </span>
        </div>

        <div className="product_size-price">
          <div>
            Size:<span className="size">{product.size} EUR</span>
          </div>
          <span className="price">{product.price.current.text}</span>
        </div>
      </div>
    </div>
  );
};
