import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/Main/Main";
import ShopPage from "./pages/Shop/Shop";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shop_category" element={<ShopPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};
