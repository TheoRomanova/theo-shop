import "./styles.scss";
import { ProfileNavigate } from "../../components/ProfileNavigate/ProfileNavigate";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo, useState } from "react";
import { RootState } from "../../redux/store";
import { BasketProduct } from "./BasketProduct";
import { updateProductInBasket } from "../../redux/basket/basket.slice";

export const BasketPage = () => {
  const productsInBasket = useSelector(
    (state: RootState) => state.basket.productsInBasket
  );
  const [totalSum, setTotalSum] = useState(0);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getProducts = useCallback(() => {
    let arr = [] as any;
    Object.entries(productsInBasket).map((item) => {
      item[1].forEach((obj) => arr.push(obj));
    });
    console.log("PRODUCTS1", arr);

    let sum = 0;
    arr.length &&
      [...arr].forEach((product) => {
        let productSum = parseInt(
          product.price.current.text.split("").slice(1).join("")
        );
        sum += productSum;
      });
    setTotalSum(sum);
    setProducts(arr);
  }, [productsInBasket]);

  useEffect(() => {
    getProducts();
  }, [productsInBasket]);

  const onRemoveProduct = (productCode: number, size: number) => {
    const obj = Object.assign({}, productsInBasket);

    if (obj[productCode]) {
      let newArr = obj[productCode].filter((el) => Number(el.size) !== size);
      newArr.length ? (obj[productCode] = newArr) : delete obj[productCode];
      dispatch(updateProductInBasket(obj));
    }
  };
  console.log("productsInBasket", productsInBasket);
  return (
    <div className="basket-page">
      <ProfileNavigate />
      <div className="basket-products">
        {!Object.entries(productsInBasket).length ? (
          <div>your basket is empty</div>
        ) : (
          products?.map((product: any) => (
            <BasketProduct
              product={product}
              onRemoveProduct={() =>
                onRemoveProduct(product.productCode, product.size)
              }
            />
          ))
        )}
      </div>
      <div className="sum-of-products">
        <span>Amount payable:</span>
        <span> ${totalSum} </span>
      </div>
    </div>
  );
};
