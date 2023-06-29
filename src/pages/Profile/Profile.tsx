import { NavLink } from "react-router-dom";
import "./styles.scss";

import { LoginForm } from "./LoginForm";

export const ProfilePage = () => {
  const onSumbitLoginForm = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 200);
  };

  return (
    <div className="profile-page">
      <ul className="profile-navigate ">
        <li>
          <NavLink to="/profile" />
        </li>
        <li>
          <NavLink to="/basket" />
        </li>
        <li>
          <NavLink to="" />
        </li>
      </ul>
      <LoginForm onSumbitLoginForm={onSumbitLoginForm} />
    </div>
  );
};

//LoginForm
