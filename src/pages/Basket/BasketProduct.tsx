import { ProductBasketType } from "../../redux/basket/basket.slice";

interface Props {
  product: ProductBasketType;
}

export const BasketProduct = ({ product }: Props) => {
  console.log("Basket", product);
  return (
    <div className="basket-product">
      <img
        src={`https://${product.imageUrl}`}
        className="basket-product-image"
      ></img>
      <div className="basket-product-info">
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
