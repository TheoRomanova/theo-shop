import "./styles.scss";
import "./media.scss";
import React from "react";
import { useEffect, useState } from "react";
import { ShopItem } from "../ShopItem/ShopItem";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export const BestSellers = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const indexForChangeCrumb = [3, 7, 11, 15, 19];
  const crumbs = [0, 1, 2, 3, 4];
  const [currentCrumb, setCurrentCrumb] = useState(0);
  const bestellers = products?.slice(0, 20);
  const [portionStart, setPortionStart] = useState(0);
  const [portionEnd, setPortionEnd] = useState(4);
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
  useEffect(() => {
    const crumbIndexForChange = indexForChangeCrumb.findIndex(
      (crumb) => crumb === portionEnd - 1
    );
    if (crumbIndexForChange !== -1) {
      setCurrentCrumb(crumbs[crumbIndexForChange]);
    }
  }, [onNavigate]);
  const onChangeCrumb = (crumb: number) => {
    setCurrentCrumb(crumb);
    const newPortionStart = crumb * 4;
    setPortionStart(newPortionStart);
    setPortionEnd(newPortionStart + 4);
  };

  return (
    <div className="bestsellers">
      <p>The best of the best</p>
      {portionStart > 0 && (
        <button className="prev-btn" onClick={() => onNavigate("-")}></button>
      )}

      <ul>
        {bestellers?.slice(portionStart, portionEnd).map((item) => (
          <ShopItem key={item.id} product={item} />
        ))}
      </ul>

      {bestellers && portionEnd < bestellers.length && (
        <button className="next-btn" onClick={() => onNavigate("+")}></button>
      )}
      <div className="crumbs">
        {crumbs.map((crumb) => (
          <button
            key={crumb}
            className={currentCrumb === crumb ? "active-crumb crumb" : "crumb"}
            onClick={() => onChangeCrumb(crumb)}
          ></button>
        ))}
      </div>
    </div>
  );
};
