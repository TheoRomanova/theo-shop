import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";

import { getSizes } from "../../data/data";
import { Button } from "../../atoms/Button/Button";
import { useState, useEffect } from "react";
import { Loader } from "../../components/Loader/Loader";
import { ProductType } from "../../redux/products/types";
import { getProductInfoThunk } from "../../redux/productInfo/productInfo.thunk";

export const ShopItemPage = () => {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();
  const currentItem = products?.find(
    (shopItem: ProductType) => id && shopItem.id === +id
  );
  const { aboutMe, careInfo, sizeAndFit } = useSelector(
    (state: RootState) => state.productInfo.profuctInfo
  );

  const poductInfoIsLoaded = useSelector(
    (state: RootState) => state.productInfo.poductInfoIsLoaded
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

  useEffect(() => {
    currentItem && dispatch(getProductInfoThunk({ id: currentItem.id }) as any);
  }, []);
  console.log("HHHHH", currentItem);
  return !currentItem && !poductInfoIsLoaded ? (
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
      <div className="additional-info"></div>
    </div>
  );
};
