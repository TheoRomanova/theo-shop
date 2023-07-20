import { useNavigate } from "react-router-dom";
import { ProductBasketType } from "../../redux/basket/basket.slice";
import { MouseEventHandler } from "react";

interface Props {
  product: ProductBasketType;
  onRemoveProduct: any;
}

export const BasketProduct = ({ product, onRemoveProduct }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="basket-product">
      <img
        onClick={() => navigate(`/shop-item/${product.id}`)}
        src={`https://${product.imageUrl}`}
        className="basket-product-image"
      ></img>
      <div className="basket-product-info">
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
