import "./styles.scss";
import { ProductType } from "../../redux/products/products.slice";
import { useEffect } from "react";

interface Props {
  product: ProductType;
}

export const ShopItem = ({ product }: Props) => {
  useEffect(() => {}, []);
  return (
    <div className="shop-item">
      <img src={`https://${product.imageUrl} `}></img>
      <div className="description">
        <p>{product.name}</p>
        <span>product code: {product.productCode}</span>
        <div className="price-favorites">
          <p className="price">{product.price.current.text}</p>
          <span></span>
        </div>
      </div>
    </div>
  );
};
