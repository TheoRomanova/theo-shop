import "./styles.scss";
import "./media.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { Button } from "../../atoms/Button/Button";
import { shoesBrandNames, colors, getSizes } from "../../data/data";
import MultiRangeSlider from "../../atoms/MultiRangeSlider/MultiRangeSlider";
import { ShopItem } from "../../components/ShopItem/ShopItem";

import { Loader } from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import { ProductType } from "../../redux/products/types";
import { getProductsThunk } from "../../redux/products/products.thunk";
import { setCurrentCategoryId } from "../../redux/products/products.slice";

const sizes = getSizes(30, 46);

const Shop = () => {
  const navigate = useNavigate();
  const displayedAmountItems = [9, 18, 27]; //18, 30, 60
  const [activeAmount, setActiveAmount] = useState(9);

  const [currentColor, setCurrentColor] = useState("");
  const [currentBrand, setCurrentBrand] = useState("");

  const { products, isLoading, itemCount, categoryName, currentCategoryId } =
    useSelector((state: RootState) => state.products);

  const [countsForPagination, setCountsForPagination] = useState(itemCount);

  const [startPositionItem, setStartPositionItem] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterMode, setFilterMode] = useState(false);
  const [mobileFilterMode, setMobileFilterMode] = useState(false);

  const onChangeAmountItems = (count: number) => {
    setActiveAmount(count);
  };

  const onPageChanged = (page: number) => {
    setStartPositionItem((page - 1) * activeAmount);
  };

  const { categoryParamsId } = useParams();

  const dispatch = useDispatch();
  const onApplyFilters = () => {
    setMobileFilterMode(false);
    filteredItems.length > 0 && setFilteredItems([]);
    currentColor && setCurrentColor("");
    currentBrand && setCurrentBrand("");
    setActiveAmount(9);

    let filtered: Array<ProductType> = [];
    if (currentColor !== "" && products) {
      setFilterMode(true);
      filtered = products.filter(
        (item) => item.colour.toLowerCase() === currentColor.toLowerCase()
      );
    }

    if (currentBrand !== "") {
      !filterMode && setFilterMode(true);

      if (filtered.length > 0) {
        filtered = filtered?.filter(
          (item: any) =>
            item.brandName.toLowerCase() === currentBrand.toLowerCase()
        );
      } else {
        filtered = products!.filter(
          (item: any) =>
            item.brandName.toLowerCase() === currentBrand.toLowerCase()
        );
      }
    }

    if (filtered.length > 0) {
      setFilteredItems(filtered as any);
      setCountsForPagination(filtered!.length);
    }
  };

  const getProducts = (filtered: any) => {
    console.log("filtered", filtered);
    if (filtered.length > 0) {
      return filtered
        ?.slice(startPositionItem, startPositionItem + activeAmount)
        .map((item: any) => {
          return <ShopItem product={item} />;
        });
    } else {
      if (products && !filterMode) {
        return products
          ?.slice(startPositionItem, startPositionItem + activeAmount)
          .map((item) => {
            return <ShopItem product={item} />;
          });
      } else {
        return <p>there are no filtered items</p>;
      }
    }
  };

  const onResetFilters = () => {
    setFilterMode(false);
    setFilteredItems([]);
    setCountsForPagination(itemCount);
    setMobileFilterMode(false);
  };
  console.log(filteredItems);

  useEffect(() => {
    if (categoryParamsId && categoryParamsId !== currentCategoryId) {
      dispatch(setCurrentCategoryId(categoryParamsId));
      dispatch(getProductsThunk({ categoryId: categoryParamsId }) as any);
    }
  }, [categoryParamsId]);

  return (
    <div className="shop-page">
      <Button palette={"blue"} size={"medium"} onClick={() => navigate("/")}>
        back
      </Button>
      <div>
        <div
          className={
            mobileFilterMode ? "filter-block filter-mode" : "filter-block"
          }
        >
          <p>Size</p>
          <form id="form1" className="sizes">
            {sizes.map((size) => (
              <div className="size">
                <input
                  type="checkbox"
                  id={size.toString()}
                  value={size.toString()}
                />
                <label htmlFor={size.toString()}> {size.toString()} EUR </label>
                <br />
              </div>
            ))}
          </form>
          <p>Seazon</p>
          <form id="form2" className="season">
            <input type="checkbox" id="demi" value="demi" />
            <label htmlFor="demi">Demi-season</label> <br />
            <input type="checkbox" id="winter" value="winter" />
            <label htmlFor="winter">Winter</label> <br />
            <input type="checkbox" id="summer" value="summer" />
            <label htmlFor="summer">Summer</label>
          </form>
          <p>Price</p>
          <div className="price">
            <MultiRangeSlider
              min={0}
              max={9000}
              onChange={({ min, max }: { min: number; max: number }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </div>
          <p>Color</p>
          <form id="form3" className="colors">
            {colors.map((color) => {
              return (
                <input
                  checked={currentColor === Object.keys(color)[0].toString()}
                  style={{
                    backgroundImage: color.Multi && color.Multi,
                    backgroundColor: !color.Multi && Object.values(color)[0],
                  }}
                  type="checkbox"
                  key={Object.keys(color)[0]}
                  value={Object.keys(color)[0]}
                  onClick={() =>
                    currentColor !== Object.keys(color)[0]
                      ? setCurrentColor(Object.keys(color)[0])
                      : setCurrentColor("")
                  }
                />
              );
            })}
          </form>
          <p>Category</p>
          <form className="category">
            <input type="checkbox" id="basket" name="basket" value="basket" />
            <label htmlFor="basket">Basketball </label> <br />
            <input type="checkbox" id="running" value="running" />
            <label htmlFor="running">Run </label> <br />
            <input type="checkbox" id="boots" name="boots" value="boots" />
            <label htmlFor="boots">Boots </label>
            <br />
            <input type="checkbox" id="sneakers" value="sneakers" />
            <label htmlFor="sneakers">Sneakers </label> <br />
            <input type="checkbox" id="sandals" value="sandals" />
            <label htmlFor="sandals">Sandals </label> <br />
            <input type="checkbox" id="high-boots" value="high-boots" />
            <label htmlFor="high-boots">Boots </label>
            <br />
            <input type="checkbox" id="slippers" value="slippers" />
            <label htmlFor="high-boots">Slippers </label> <br />
          </form>
          <p>Brand</p>
          <form id="form4" className="brand">
            {shoesBrandNames.map((brand) => (
              <div>
                <input
                  checked={currentBrand === brand}
                  type="checkbox"
                  id={brand}
                  value={brand}
                  onClick={() =>
                    currentBrand !== brand
                      ? setCurrentBrand(brand)
                      : setCurrentBrand("")
                  }
                />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </form>
          <Button onClick={onApplyFilters} palette={"blue"} size={"big"}>
            Apply
          </Button>
          <Button palette={"purple"} size={"big"} onClick={onResetFilters}>
            Reset
          </Button>
        </div>
        {!mobileFilterMode &&
          (isLoading ? (
            <Loader />
          ) : (
            <div className="shop-items-block">
              <div className="options">
                <div className="options-left">
                  {" "}
                  <label>
                    <span className="">Sorting</span>
                    <select name="sorting">
                      <option value="1">by default</option>
                      <option value="2">popular</option>
                      <option value="3">low price</option>
                    </select>
                  </label>
                </div>

                <div className="options-right">
                  {" "}
                  <label>
                    <span className="">Amount</span>
                    {displayedAmountItems.map((count) => (
                      <button
                        disabled={
                          filteredItems.length !== 0 &&
                          filteredItems.length < activeAmount
                        }
                        className={
                          activeAmount === count ? "button-active" : ""
                        }
                        onClick={() => onChangeAmountItems(count)}
                      >
                        {count}
                      </button>
                    ))}
                  </label>
                </div>
              </div>
              <div className="options-mobile">
                <span>{categoryName}</span>
                <button onClick={() => setMobileFilterMode(true)}>
                  Filter
                </button>
              </div>

              <div className="shop-items">{getProducts(filteredItems)}</div>

              <Pagination
                totalItemsCount={countsForPagination}
                portionSize={5}
                onPageChanged={onPageChanged}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Shop);
