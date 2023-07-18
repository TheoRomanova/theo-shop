import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { MainPage } from "./pages/Main/Main";
import ShopPage from "./pages/Shop/Shop";
import { ProfilePage } from "./pages/Profile/Profile";
import { BasketPage } from "./pages/Basket/Basket";
import { FavoritesPage } from "./pages/Favorites/Favorites";

import ShopItemPage from "./pages/ShopItem/ShopItem";
import { TrackingPage } from "./pages/Tracking/Tracking";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetAuthThunk } from "./redux/auth/auth.thunk";
import { getProductsThunk } from "./redux/products/products.thunk";
import { OrderPage } from "./pages/Order/Order";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAuthThunk() as any);
    dispatch(getProductsThunk({ categoryId: "4209" }) as any); //other
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shop/:categoryParamsId" element={<ShopPage />} />
          <Route
            path="/shop-item/:productParamsId"
            element={<ShopItemPage />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};
