import "./styles.scss";
export const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="contacts-info">
        <div className="logo"></div>
        <div className="contacts">
          <div className="social-media">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="tel-mail">
            <p>{"  "} +7 951 999 28 34</p>
            <p>{"  "} info@stageboxbrand.ru</p>
          </div>
        </div>
      </div>
      <div className="shop-info">
        <div className="info-block">
          <p>Доставка</p>
          <p>Гарантии</p>
          <p>Таблица размеров</p>
          <p>
            <b>Обмен и возврат</b>
          </p>
          <p>Вопросы и ответы</p>
        </div>
        <div className="profile">
          <ul className="profile-icons">
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
          <div className="search">
            <input placeholder="Поиск"></input>
            <button>поиск</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
