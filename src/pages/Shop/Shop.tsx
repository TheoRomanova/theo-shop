import "./styles.scss";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { colors, getSizes } from "../../data/data";
import MultiRangeSlider from "../../atoms/MultiRangeSlider/MultiRangeSlider";
const sizes = getSizes(30, 46);
const Shop = () => {
  const navigate = useNavigate();

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
                  name={size.toString()}
                  value={size.toString()}
                />
                <label htmlFor={size.toString()}> {size.toString()} EUR </label>
                <br />
              </div>
            ))}
          </div>
          <p>Seazon</p>
          <form className="weather">
            <input type="checkbox" id="demi" name="demi" value="demi" />
            <label htmlFor="demi">Demi-season</label> <br />
            <input type="checkbox" id="winter" name="winter" value="winter" />
            <label htmlFor="winter">Winter</label> <br />
            <input type="checkbox" id="summer" name="summer" value="summer" />
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
                name={Object.keys(color)[0]}
                value={Object.keys(color)[0]}
              />
            ))}
          </div>
          <p>Категория</p>
          <form className="category">
            <input type="checkbox" id="basket" name="basket" value="basket" />
            <label htmlFor="basket">Баскетбол </label> <br />
            <input
              type="checkbox"
              id="running"
              name="running"
              value="running"
            />
            <label htmlFor="running">Бег </label> <br />
            <input type="checkbox" id="boots" name="boots" value="boots" />
            <label htmlFor="boots">Ботинки </label>
            <br />
            <input
              type="checkbox"
              id="sneakers"
              name="sneakers"
              value="sneakers"
            />
            <label htmlFor="sneakers">Кроссовки </label> <br />
            <input
              type="checkbox"
              id="sandals"
              name="sandals"
              value="sandals"
            />
            <label htmlFor="sandals">Сандалии </label> <br />
            <input
              type="checkbox"
              id="high-boots"
              name="high-boots"
              value="high-boots"
            />
            <label htmlFor="high-boots">Сапоги </label>
            <br />
            <input
              type="checkbox"
              id="slippers"
              name="slippers"
              value="slippers"
            />
            <label htmlFor="high-boots">Тапочки </label> <br />
          </form>
          <p>Brand</p>
          <form className="brand">
            <input type="checkbox" id="adidas" name="adidas" value="adidas" />
            <label htmlFor="adidas">Adidas </label> <br />
            <input
              type="checkbox"
              id="mcQueen"
              name="mcQueen"
              value="mcQueen"
            />
            <label htmlFor="mcQueen">Alexander McQueen </label> <br />
            <input
              type="checkbox"
              id="balenciaga"
              name="balenciaga"
              value="balenciaga"
            />
            <label htmlFor="balenciaga">Balenciaga </label>
            <br />
            <input type="checkbox" id="asics" name="asics" value="asics" />
            <label htmlFor="asics">Asics </label> <br />
            <input
              type="checkbox"
              id="caterpillar"
              name="caterpillar"
              value="caterpillar"
            />
            <label htmlFor="caterpillar">Caterpillar </label> <br />
            <input
              type="checkbox"
              id="columbia"
              name="columbia"
              value="columbia"
            />
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
          <div className="options"></div>
          <div className="shop-items"></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Shop);
