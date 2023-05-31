import "./styles.scss";
import "./media.scss";
import { clothes } from "../../data/data";
import { ShopItem } from "./ShopItem";

import { useState } from "react";

export const MainPage = () => {
  const [portionStart, setPortionStart] = useState(0);
  const [portionEnd, setPortionEnd] = useState(4);
  const totalItems = clothes.length;
  console.log(totalItems);

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
    <div className="main-page container">
      <div className="big-reclam">
        <div className="big-info">
          <p>ADIDAS NITE JOGGER</p>
          <p>Городские кроссовки в ярком стиле 80-х</p>
          <button>Смотреть все</button>
        </div>
        <div className="big-shoes">
          <img />
        </div>
      </div>
      <div className="bestsellers">
        <p>Лучшие из лучших</p>
        {portionStart > 0 && (
          <button className="btn btn-left" onClick={() => onNavigate("-")}>
            {"<"}
          </button>
        )}

        <ul>
          {clothes.slice(portionStart, portionEnd).map((item) => (
            <ShopItem
              id={item.id}
              name={item.name}
              photo={item.photo}
              price={item.price}
              articul={item.articul}
            />
          ))}
        </ul>

        {portionEnd < totalItems && (
          <button className="btn btn-right" onClick={() => onNavigate("+")}>
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};
