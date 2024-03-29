import "./styles.scss";
import "./media.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";

import { getSizes } from "../../data/data";
import { Button } from "../../atoms/Button/Button";
import React, { useState, useEffect } from "react";

import { ProductType } from "../../redux/products/types";
import { getProductInfoThunk } from "../../redux/productInfo/productInfo.thunk";
import Tab from "@mui/material/Tab";
import { Tabs } from "@mui/material";
import { Loader } from "../../components/Loader";
import { putProductInBasket } from "../../redux/basket/basket.slice";
import { setCurrentProductId } from "../../redux/productInfo/productInfo.slice";

const sizes = getSizes(37, 42);

const ShopItemPage = () => {
  const { productParamsId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, categoryName } = useSelector(
    (state: RootState) => state.products
  );

  const currentItem = products?.find(
    (shopItem: ProductType) =>
      productParamsId && shopItem.id === +productParamsId
  );

  const currentProductId = useSelector(
    (state: RootState) => state.productInfo.currentProductId
  );

  const poductInfoIsLoaded = useSelector(
    (state: RootState) => state.productInfo.poductInfoIsLoaded
  );
  const { careInfo, sizeAndFit, aboutMe } = useSelector(
    (state: RootState) => state.productInfo.profuctInfo
  );
  const [productPhotos, setProductsPhotos] = useState([
    `https://${currentItem?.imageUrl} `,
    `https://${currentItem?.additionalImageUrls[0]} `,
    `https://${currentItem?.additionalImageUrls[1]} `,
    `https://${currentItem?.additionalImageUrls[2]} `,
  ]);

  const [selectedSizes, setSelectedSizes] = useState<Array<number>>([]);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const updateBigProductPhoto = (photo: string, index: number) => {
    const newPhotosOrder = productPhotos.slice();
    const temp = productPhotos[0];
    newPhotosOrder[index] = temp;
    newPhotosOrder[0] = photo;

    setProductsPhotos(newPhotosOrder);
  };

  const handleTabChange = (e: any, tabIndex: number) => {
    setCurrentTabIndex(tabIndex);
  };

  useEffect(() => {
    if (productParamsId !== currentProductId) {
      dispatch(setCurrentProductId(productParamsId));
      currentItem &&
        dispatch(getProductInfoThunk({ id: currentItem.id }) as any);
    }
  }, []);

  const onSelectSize = (size: number) => {
    if (selectedSizes.includes(size)) {
      const updatedSizes = selectedSizes.filter((val) => val !== size);
      setSelectedSizes(updatedSizes);
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const onAddToCart = () => {
    const selectedProducts = [];

    for (let i = 0; i < selectedSizes.length; i++) {
      selectedProducts.push({ ...currentItem, size: selectedSizes[i] });
    }

    if (currentItem?.productCode) {
      dispatch(
        putProductInBasket({
          productCode: currentItem.productCode,
          selectedProducts,
        })
      );
      setSelectedSizes([]);
    }
  };

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
                key={index}
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
                <span
                  key={size}
                  className={
                    selectedSizes.includes(size) ? "selected-size" : ""
                  }
                  onClick={() => onSelectSize(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div className="buttons">
            <Button
              disabled={!selectedSizes.length}
              onClick={onAddToCart}
              palette={"red"}
              size={"big"}
            >
              {"Add to cart"}
            </Button>
            <Button
              onClick={() => navigate("/basket")}
              palette={"dark-blue"}
              size={"big"}
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>

      <div className="additional-info">
        <Tabs value={currentTabIndex} onChange={handleTabChange}>
          <Tab
            className={currentTabIndex === 0 ? "active" : ""}
            label="Description"
            tabIndex={0}
          />
          <Tab
            className={currentTabIndex === 1 ? "active" : ""}
            label="Care Information"
            tabIndex={1}
          />
          <Tab
            className={currentTabIndex === 2 ? "active" : ""}
            label="Size And Fit"
            tabIndex={2}
          />
          <Tab
            className={currentTabIndex === 3 ? "active" : ""}
            label="Guarantees"
            tabIndex={3}
          />
          <Tab
            className={currentTabIndex === 4 ? "active" : ""}
            label="About the product"
            tabIndex={4}
          />
        </Tabs>
        <div className="info">
          <div className="info-left">
            {currentTabIndex === 0 && aboutMe}
            {currentTabIndex === 1 && careInfo}
            {currentTabIndex === 2 && sizeAndFit}
            {currentTabIndex === 3 && "3333"}
            {currentTabIndex === 4 && "4444"}
          </div>
          <ul className="info-right">
            <li>
              Category <span>{categoryName}</span>
            </li>
            <li>
              Model <span>{currentItem?.name}</span>
            </li>
            <li>Season</li>
            <li>
              Color{" "}
              <span>
                {currentItem?.colour.split("")[0].toUpperCase() +
                  currentItem!.colour.toLowerCase().split("").slice(1).join("")}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ShopItemPage);
