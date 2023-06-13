import "./styles.scss";
import "./media.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { ShopItemType, colors, getSizes } from "../../data/data";
import MultiRangeSlider from "../../atoms/MultiRangeSlider/MultiRangeSlider";
import { ShopItem } from "../../components/ShopItem/ShopItem";

import { RootState } from "../../redux/store";
import { Loader } from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import { ProductType } from "../../redux/products/products.slice";
import { fileURLToPath } from "url";

const sizes = getSizes(30, 46);

const brandNames = [
  "ASOS DESIGN",
  "New Balance",
  "Lacoste",
  "Base London",
  "House of Hounds",
  "adidas Originals",
  "Nike Training",
  "Vans",
  "New Look",
  "Nike",
  "River Island",
  "Ted Baker",
  "Havaianas",
  "Dr Martens",
  "Superdry",
].sort();

const Shop = () => {
  const navigate = useNavigate();
  const displayedAmountItems = [9, 18, 27]; //18, 30, 60
  const [activeAmount, setActiveAmount] = useState(9);
  const [currentColor, setCurrentColor] = useState("");

  const { products, isLoading, itemCount, categoryName } = useSelector(
    (state: RootState) => state.products
  );

  const [startPositionItem, setStartPositionItem] = useState(0);
  const [filteredItems, setFilteredItems] = useState([] as Array<ProductType>);

  const onChangeAmountItems = (count: number) => {
    setActiveAmount(count);
  };

  const onPageChanged = (page: number) => {
    setStartPositionItem((page - 1) * activeAmount);
  };

  const onColorCHange = (color: any) => {
    if (currentColor === Object.keys(color)[0]) {
      setCurrentColor("");
      setFilteredItems([]);
    } else {
      setCurrentColor(Object.keys(color)[0]);
      const filteredArray = products!.filter(
        (item) => item.colour === Object.keys(color)[0]
      );
      setFilteredItems(filteredArray);
    }
  };

  console.log(currentColor, products);
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
          <form className="season">
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
            {colors.map((color) => {
              return (
                <input
                  style={{
                    backgroundImage: color.Multi && color.Multi,
                    backgroundColor: !color.Multi && Object.values(color)[0],
                  }}
                  type="checkbox"
                  key={Object.keys(color)[0]}
                  value={Object.keys(color)[0]}
                  onClick={() => onColorCHange(color)}
                />
              );
            })}
          </div>
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
                    disabled={
                      filteredItems.length !== 0 &&
                      filteredItems.length < activeAmount
                    }
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
                ?.filter((product) =>
                  currentColor !== ""
                    ? product.colour === currentColor
                    : product
                )
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

{
  /* <div className="shop-items">
{isLoading ? (
  <Loader />
) : (
  (filteredItems.length !== 0 ? filteredItems : products)
    ?.slice(startPositionItem, startPositionItem + activeAmount)

    .map((item) => <ShopItem product={item} />)
)}
</div> */
}
