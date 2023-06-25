import { useSelector } from "react-redux";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { ProductType } from "../../redux/products/products.slice";

export const ShopItemPage = () => {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.products);
  const currentItem = products?.find(
    (shopItem: ProductType) => id && shopItem.id === +id
  );
  console.log(currentItem);
  return (
    <div className="shop-item_page">
      <h1>{currentItem?.name}</h1>
      <span className="product-code">
        product code: {currentItem?.productCode}
      </span>
      <div className="photos-sizes">
        <div className="photos">
          <span className="like"></span>
          <img
            className="big-photo"
            src={`https://${currentItem?.imageUrl} `}
          ></img>

          <div className="small-photos">
            <img src={`https://${currentItem?.additionalImageUrls[0]} `}></img>
            <img src={`https://${currentItem?.additionalImageUrls[1]} `}></img>
            <img src={`https://${currentItem?.additionalImageUrls[2]} `}></img>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
