import "./styles.scss";
import "./media.scss";

import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import { ShopItem } from "../../components/ShopItem/ShopItem";
import { RootState } from "../../redux/store";

export const MainPage = () => {
  const [portionStart, setPortionStart] = useState(0);
  const [portionEnd, setPortionEnd] = useState(4);

  const { itemCount, products, isLoading } = useSelector(
    (state: RootState) => state.products
  );

  const crumbs = [0, 1, 2, 3, 4];
  const [currentCrumb, setCurrentCrumb] = useState(0);
  const bestellers = products?.slice(0, 20);

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

  const onChangeCrumb = (crumb: number) => {
    setCurrentCrumb(crumb);
    const newPortionStart = crumb * 4;
    setPortionStart(newPortionStart);
    setPortionEnd(newPortionStart + 4);
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
          <button className="prev-btn" onClick={() => onNavigate("-")}></button>
        )}

        <ul>
          {bestellers?.slice(portionStart, portionEnd).map((item) => (
            <ShopItem product={item} />
          ))}
        </ul>

        {portionEnd < bestellers!.length && (
          <button className="next-btn" onClick={() => onNavigate("+")}></button>
        )}
        <div className="crumbs">
          {crumbs.map((crumb) => (
            <button
              className={
                currentCrumb === crumb ? "active-crumb crumb" : "crumb"
              }
              onClick={() => onChangeCrumb(crumb)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
