import { NavLink } from "react-router-dom";
import "./styles.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { BasketPage } from "../Basket/Basket";

export const ProfilePage = () => {
  const onSumbitLoginForm = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 200);
  };

  //router
  return (
    <div className="profile-page">
      <ul className="profile-navigate ">
        <li>
          <NavLink to="/profile/" />
        </li>
        <li>
          <NavLink to="/zik " />
        </li>
        <li>
          <NavLink to="" />
        </li>
      </ul>

      <Routes>
        <Route
          path="/"
          element={<LoginForm onSumbitLoginForm={onSumbitLoginForm} />}
        />

        <Route path="/zik" element={<BasketPage />} />
      </Routes>
    </div>
  );
};

//LoginForm
