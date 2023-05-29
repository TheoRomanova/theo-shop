import "./App.scss";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <footer className="app-footer">FOOTER</footer>
    </div>
  );
};
