import "./styles.scss";
import "./media.scss";

export const Header = () => {
  return (
    <header className="app-header">
      <div className="promotion">
        Только три дня скидка <span> -30% </span>на всё!
      </div>
      <div className="header">
        <div className="main">
          <ul className="contacts">
            <li>+7 777 777 77 77</li>
            <li>info@theo-shop.by</li>
          </ul>
          <div className="logo"></div>
          <ul className="profile">
            <li>
              <span className="bag"></span>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="navigation">
          <ul className="pages">
            <li>Кроссовки</li>
            <li>Одежда</li>
            <li>Аксессуары</li>
            <li>Блог</li>
            <li>Отзывы</li>
          </ul>
          <div className="search">
            <input placeholder="Поиск"></input>
            <div className="search-btn">
              <span className="search-img"></span>
            </div>
            <div className="menu-btn">
              <span className="menu-img">Меню</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
