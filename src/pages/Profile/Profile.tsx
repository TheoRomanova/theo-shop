import { NavLink } from "react-router-dom";
import "./styles.scss";

import { LoginForm } from "./LoginForm";
import { ProfileNavigate } from "../../components/ProfileNavigate/ProfileNavigate";

export const ProfilePage = () => {
  const onSumbitLoginForm = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 200);
  };

  return (
    <div className="profile-page">
      <ProfileNavigate />
      <LoginForm onSumbitLoginForm={onSumbitLoginForm} />
    </div>
  );
};

//LoginForm
