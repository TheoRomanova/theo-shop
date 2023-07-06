import "./styles.scss";
import "./media.scss";
import { RootState } from "../../redux/store";
import { ErrorAlert } from "../../components/ErrorAlert/ErrorAlert";
import { NavLink } from "react-router-dom";
import { BestSellers } from "../../components/BestSellers/Bestsellers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsThunk } from "../../redux/products/products.thunk";

export const MainPage = () => {
  const errorMessages = useSelector(
    (state: RootState) => state.auth.errorMessages
  );
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    products?.length && dispatch(getProductsThunk() as any);
  }, []);

  return (
    <div className="main-page">
      {errorMessages.length > 0 && <ErrorAlert message={errorMessages[0]} />}

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
