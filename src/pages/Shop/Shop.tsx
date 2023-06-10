import "./styles.scss";
import "./media.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { colors, getSizes } from "../../data/data";
import MultiRangeSlider from "../../atoms/MultiRangeSlider/MultiRangeSlider";
import { ShopItem } from "../../components/ShopItem/ShopItem";

import { RootState } from "../../redux/store";
import { Loader } from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";

const sizes = getSizes(30, 46);
const Shop = () => {
  const navigate = useNavigate();
  const displayedAmountItems = [9, 18, 27]; //18, 30, 60
  const [activeAmount, setActiveAmount] = useState(9);

  const { products, isLoading, itemCount, categoryName } = useSelector(
    (state: RootState) => state.products
  );

  const [startPositionItem, setStartPositionItem] = useState(0);

  const onChangeAmountItems = (count: number) => {
    setActiveAmount(count);
  };

  const onPageChanged = (page: number) => {
    setStartPositionItem((page - 1) * activeAmount);
  };

  return (
    <div className="shop-page">
      <Button palette={"blue"} size={"medium"} onClick={() => navigate("/")}>
        back
      </Button>
      <div>
        <div className="filter-block">
          <p>Size</p>
          <div className="sizes">
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
          </div>
          <p>Seazon</p>
          <form className="weather">
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
          <div className="colors">
            {colors.map((color) => (
              <input
                style={{
                  backgroundColor: Object.values(color)[0],
                }}
                type="checkbox"
                key={Object.keys(color)[0]}
                value={Object.keys(color)[0]}
              />
            ))}
          </div>
          <p>Category</p>
          <form className="category">
            <input type="checkbox" id="basket" name="basket" value="basket" />
            <label htmlFor="basket">Баскетбол </label> <br />
            <input type="checkbox" id="running" value="running" />
            <label htmlFor="running">Бег </label> <br />
            <input type="checkbox" id="boots" name="boots" value="boots" />
            <label htmlFor="boots">Ботинки </label>
            <br />
            <input type="checkbox" id="sneakers" value="sneakers" />
            <label htmlFor="sneakers">Кроссовки </label> <br />
            <input type="checkbox" id="sandals" value="sandals" />
            <label htmlFor="sandals">Сандалии </label> <br />
            <input type="checkbox" id="high-boots" value="high-boots" />
            <label htmlFor="high-boots">Сапоги </label>
            <br />
            <input type="checkbox" id="slippers" value="slippers" />
            <label htmlFor="high-boots">Тапочки </label> <br />
          </form>
          <p>Brand</p>
          <form className="brand">
            <input type="checkbox" id="adidas" name="adidas" value="adidas" />
            <label htmlFor="adidas">Adidas </label> <br />
            <input type="checkbox" id="mcQueen" value="mcQueen" />
            <label htmlFor="mcQueen">Alexander McQueen </label> <br />
            <input type="checkbox" id="balenciaga" value="balenciaga" />
            <label htmlFor="balenciaga">Balenciaga </label>
            <br />
            <input type="checkbox" id="asics" name="asics" value="asics" />
            <label htmlFor="asics">Asics </label> <br />
            <input type="checkbox" id="caterpillar" value="caterpillar" />
            <label htmlFor="caterpillar">Caterpillar </label> <br />
            <input type="checkbox" id="columbia" value="columbia" />
            <label htmlFor="sandals">Columbia </label> <br />
            <input type="checkbox" id="puma" name="puma" value="puma" />
            <label htmlFor="high-boots">Puma </label>
          </form>
          <Button palette={"blue"} size={"big"}>
            Apply
          </Button>
          <Button palette={"purple"} size={"big"}>
            Reset
          </Button>
        </div>
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
                    className={activeAmount === count ? "button-active" : ""}
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
            <button>Фильтровать</button>
          </div>
          <div className="shop-items">
            {isLoading ? (
              <Loader />
            ) : (
              products
                ?.slice(startPositionItem, startPositionItem + activeAmount)
                .map((item) => <ShopItem product={item} />)
            )}
          </div>
          <Pagination
            totalItemsCount={itemCount}
            portionSize={5}
            onPageChanged={onPageChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Shop);
