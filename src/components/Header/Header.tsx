import "./styles.scss";
import "./media.scss";
import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

import { DeleteLoginThunk } from "../../redux/auth/auth.thunk";
const categories = [
  { "4209": "Shoes, Boots & Sneakers" },
  { "4208": "Jeans" },
  { "4210": "Accessories" },
  { "4213": "Features" },
];

const Header = () => {
  const login = useSelector((state: RootState) => state.auth.login);
  const location = useLocation();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(DeleteLoginThunk() as any);
  };
  const productsInBasket = useSelector(
    (state: RootState) => state.basket.productsInBasket
  );

  const productsInBusketCount = useMemo(() => {
    let count = 0;
    Object.values(productsInBasket).map((products) => {
      count += products.length;
    });
    return count;
  }, [productsInBasket]);

  console.log("count", productsInBusketCount);
  return (
    <header className="app-header">
      <div className="promotion-login">
        <div className="promotion">
          Only three days - <span> 30% </span> discount on everything!
        </div>

        <div className="login">
          <span onClick={onLogout}>{login && "logout"}</span>
          <span>{login}</span>
        </div>
      </div>
      <div className="header">
        <div className="main">
          <ul className="contacts">
            <li> +7 777 777 77 77</li>
            <li> info@pika-shop.by</li>
          </ul>
          <div className="logo"></div>
          <div>
            <ul className="profile-icons">
              <li>
                {productsInBusketCount > 0 && (
                  <span className="products-count">
                    {productsInBusketCount}
                  </span>
                )}

                <NavLink to="/basket" />
              </li>
              <li>
                <NavLink to="/profile" />
              </li>
              <li>
                <NavLink to="/favorites" />
              </li>
            </ul>
          </div>
        </div>
        <div className="navigation">
          <ul className="pages">
            {categories.map((category) => {
              for (let [categoryId, categoryName] of Object.entries(category)) {
                return (
                  <li
                    className={
                      location.pathname === `/shop/${categoryId}`
                        ? "active"
                        : ""
                    }
                  >
                    <NavLink to={`/shop/${categoryId}`}>{categoryName}</NavLink>
                  </li>
                );
              }
            })}
          </ul>
          <div className="filter-search">
            <input placeholder="Поиск"></input>
            <Button palette={"blue"} size={"semicircle"} rest={"search-btn"} />

            <Button palette={"blue"} size={"semicircle"} rest={"menu-btn"}>
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
