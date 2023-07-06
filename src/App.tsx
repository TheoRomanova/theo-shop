import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { MainPage } from "./pages/Main/Main";
import ShopPage from "./pages/Shop/Shop";
import { ProfilePage } from "./pages/Profile/Profile";
import { BasketPage } from "./pages/Basket/Basket";
import { FavoritesPage } from "./pages/Favorites/Favorites";

import { ShopItemPage } from "./pages/ShopItem/ShopItem";
import { TrackingPage } from "./pages/Tracking/Tracking";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetAuthThunk } from "./redux/auth/auth.thunk";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAuthThunk() as any);
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop-item/:id" element={<ShopItemPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};
