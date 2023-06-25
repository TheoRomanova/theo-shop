import { BestSellers } from "../../components/BestSellers/Bestsellers";
import "./styles.scss";
import "./media.scss";
import { NavLink } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="big-reclam">
        <div className="big-info">
          <p>ADIDAS NITE JOGGER</p>
          <p>
            Urban sneakers in a colorful <b>80s</b> style
          </p>
          <NavLink to="/shop">
            <button>See all</button>
          </NavLink>
        </div>
        <div className="big-shoes">
          <img />
        </div>
      </div>

      <BestSellers />
    </div>
  );
};
