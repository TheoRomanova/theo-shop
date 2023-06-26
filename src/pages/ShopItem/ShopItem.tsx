import "./styles.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { ProductType } from "../../redux/products/products.slice";
import { getSizes } from "../../data/data";
import { Button } from "../../atoms/Button/Button";
import { useState } from "react";
import { Loader } from "../../components/Loader/Loader";

export const ShopItemPage = () => {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.products);

  const currentItem = products?.find(
    (shopItem: ProductType) => id && shopItem.id === +id
  );

  const [productPhotos, setProductsPhotos] = useState([
    `https://${currentItem?.imageUrl} `,
    `https://${currentItem?.additionalImageUrls[0]} `,
    `https://${currentItem?.additionalImageUrls[1]} `,
    `https://${currentItem?.additionalImageUrls[2]} `,
  ]);
  const sizes = getSizes(37, 42);

  const updateBigProductPhoto = (photo: string, index: number) => {
    const newPhotosOrder = productPhotos.slice();
    let temp = productPhotos[0];
    newPhotosOrder[index] = temp;
    newPhotosOrder[0] = photo;

    setProductsPhotos(newPhotosOrder);
  };

  return !currentItem ? (
    <Loader />
  ) : (
    <div className="shop-item_page">
      <h1>{currentItem?.name.toUpperCase()}</h1>
      <span className="product-code">
        product code: {currentItem?.productCode}
      </span>
      <div className="photos-sizes">
        <div className="photos">
          <span className="like"></span>
          <img className="big-photo" src={productPhotos[0]}></img>

          <div className="small-photos">
            {productPhotos.slice(1).map((photo, index) => (
              <img
                src={photo}
                onClick={() => updateBigProductPhoto(photo, index + 1)}
              ></img>
            ))}
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
