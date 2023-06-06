import "./styles.scss";
import "./media.scss";

import { useSelector } from "react-redux";
import { useState } from "react";
import { ShopItem } from "../../components/ShopItem/ShopItem";
import { RootState } from "../../redux/store";

export const MainPage = () => {
  const [portionStart, setPortionStart] = useState(0);
  const [portionEnd, setPortionEnd] = useState(4);

  const { categoryName, itemCount, products } = useSelector(
    (state: RootState) => state.products
  );

  const onNavigate = (sign: string) => {
    if (sign === "+") {
      setPortionStart((prev) => prev + 1);
      setPortionEnd((prev) => prev + 1);
    }
    if (sign === "-") {
      setPortionStart((prev) => prev - 1);
      setPortionEnd((prev) => prev - 1);
    }
  };

  return (
    <div className="main-page">
      <div className="big-reclam">
        <div className="big-info">
          <p>ADIDAS NITE JOGGER</p>
          <p>
            Urban sneakers in a colorful <b>80s</b> style
          </p>
          <button>See all</button>
        </div>
        <div className="big-shoes">
          <img />
        </div>
      </div>
      <div className="bestsellers">
        <p>The best of the best</p>
        {portionStart > 0 && (
          <button className="btn btn-left" onClick={() => onNavigate("-")}>
            {"<"}
          </button>
        )}

        <ul>
          {products?.slice(portionStart, portionEnd).map((item) => (
            <ShopItem product={item} />
          ))}
        </ul>

        {portionEnd < itemCount && (
          <button className="btn btn-right" onClick={() => onNavigate("+")}>
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};
