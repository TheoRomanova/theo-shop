import "./styles.scss";
import "./media.scss";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "../Loader/Loader";
import { DeleteLoginThunk } from "../../redux/auth/auth.thunk";

const Header = () => {
  const { categoryName, isLoading } = useSelector(
    (state: RootState) => state.products
  );
  const login = useSelector((state: RootState) => state.auth.login);
  const location = useLocation();
  const dispatch = useDispatch();

  console.log("headerlogin", login);

  const onLogout = () => {
    dispatch(DeleteLoginThunk() as any);
  };

  return isLoading ? (
    <Loader />
  ) : (
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
            <li className={location.pathname === "/shop" ? "active" : ""}>
              <NavLink to="/shop">{categoryName}</NavLink>
            </li>
            <li>Clothes</li>
            <li>Accessories</li>
            <li>Blog</li>
            <li>Reviews</li>
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
