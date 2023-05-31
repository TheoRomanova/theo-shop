import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/Main/Main";

export const App = () => {
  return (
    <div className="app">
      <Header />
      {/* router */}
      <MainPage />
      {/* router */}
      <Footer />
    </div>
  );
};
