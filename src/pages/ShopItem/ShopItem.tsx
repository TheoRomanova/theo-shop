import { useSelector } from "react-redux";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { ProductType } from "../../redux/products/products.slice";
import { getSizes } from "../../data/data";
import { Button } from "../../atoms/Button/Button";

export const ShopItemPage = () => {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.products);

  const currentItem = products?.find(
    (shopItem: ProductType) => id && shopItem.id === +id
  );

  const sizes = getSizes(37, 42);
  console.log(currentItem);

  return (
    <div className="shop-item_page">
      <h1>{currentItem?.name.toUpperCase()}</h1>
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
        <div className="sizes-info">
          <h1>{currentItem?.price.current.text}</h1>
          <div className="choose-size">
            <p>SELECT SIZE</p>
            <div className="sizes">
              {sizes.map((size) => (
                <span>{size}</span>
              ))}
            </div>
          </div>
          <div className="buttons">
            <Button palette={"red"} size={"big"}>
              Add to cart
            </Button>
            <Button palette={"dark-blue"} size={"big"}>
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
