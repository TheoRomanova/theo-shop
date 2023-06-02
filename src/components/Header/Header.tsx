import "./styles.scss";
import "./media.scss";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="app-header">
      <div className="promotion">
        Only three days - <span> 30% </span> discount on everything!
      </div>
      <div className="header container">
        <div className="main">
          <ul className="contacts">
            <li> +7 777 777 77 77</li>
            <li> info@pika-shop.by</li>
          </ul>
          <div className="logo"></div>
          <ul className="profile-icons">
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
        </div>
        <div className="navigation">
          <ul className="pages">
            <li className={location.pathname === "/shop" ? "active" : ""}>
              <NavLink to="/shop">Shoes</NavLink>
            </li>
            <li>Clothes</li>
            <li>Accessories</li>
            <li>Blog</li>
            <li>Reviews</li>
          </ul>
          <div className="filter-search">
            <input placeholder="Поиск"></input>
            <Button
              palette={"purple"}
              size={"semicircle"}
              rest={"search-btn"}
            />

            <Button palette={"blue"} size={"semicircle"} rest={"menu-btn"} />
          </div>
        </div>
      </div>
    </header>
  );
};
