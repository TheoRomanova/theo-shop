import "./styles.scss";
import { ProfileNavigate } from "../../components/ProfileNavigate/ProfileNavigate";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { RootState } from "../../redux/store";
import { BasketProduct } from "./BasketProduct";

export const BasketPage = () => {
  const productsInBasket = useSelector(
    (state: RootState) => state.basket.productsInBasket
  );

  const getProducts = () => {
    let products = [] as any;
    Object.entries(productsInBasket).map((item) => {
      item[1].forEach((obj) => products.push(obj));
    });

    return products;
  };

  return (
    <div className="basket-page">
      <ProfileNavigate />
      <div className="basket-products">
        {!Object.entries(productsInBasket).length ? (
          <div>your basket is empty</div>
        ) : (
          getProducts().map((product: any) => (
            <BasketProduct product={product} />
          ))
        )}
      </div>
    </div>
  );
};
