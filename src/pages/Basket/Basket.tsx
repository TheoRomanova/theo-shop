import "./styles.scss";
import { ProfileNavigate } from "../../components/ProfileNavigate/ProfileNavigate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { BasketProduct } from "./BasketProduct";
import { updateProductInBasket } from "../../redux/basket/basket.slice";

export const BasketPage = () => {
  const productsInBasket = useSelector(
    (state: RootState) => state.basket.productsInBasket
  );

  const getProducts = () => {
    let productS = [] as any;
    Object.entries(productsInBasket).map((item) => {
      item[1].forEach((obj) => productS.push(obj));
    });
    return productS;
  };

  const [totalSum, setTotalSum] = useState(0);
  const [products, setProducts] = useState(getProducts());
  const dispatch = useDispatch();
  const getTotalSum = () => {
    let sum = 0;
    [...products].forEach((product) => {
      let productSum = parseInt(
        product.price.current.text.split("").slice(1).join("")
      );
      sum += productSum;
    });

    setTotalSum(sum);
  };

  useEffect(() => {
    getProducts();
    getTotalSum();
  }, [productsInBasket]);

  const onRemoveProduct = (productCode: number, size: number) => {
    const obj = Object.assign({}, productsInBasket);

    if (obj[productCode]) {
      console.log(obj[productCode]);

      obj[productCode].filter((item) => item.size !== size);
    }

    console.log("basket", obj);
    // dispatch(updateProductInBasket(obj));
  };

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
        <span>Сумма к оплате:</span>
        <span> ${totalSum} </span>
      </div>
    </div>
  );
};

// id: number;
// name: string;
// price: {
//   current: {
//     text: string;
//   };
// };
// colour: string;
// brandName: string;
// productCode: number;
// imageUrl: string;
// additionalImageUrls: Array<string>;
