import "./styles.scss";
import { LoginForm } from "../../components/Forms/LoginForm/LoginForm";
import { ProfileNavigate } from "../../components/ProfileNavigate/ProfileNavigate";
import { useDispatch, useSelector } from "react-redux";
import { LogInThunk } from "../../redux/auth/auth.thunk";
import { RootState } from "../../redux/store";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userId, login } = useSelector((state: RootState) => state.auth);
  const onSumbitLoginForm = (values: any, { setSubmitting }: any) => {
    alert("submit");
    setSubmitting(false);
    dispatch(LogInThunk(values) as any);
  };
  console.log("ProfilePage", userId, login);
  return (
    <div className="profile-page">
      <ProfileNavigate />

      {userId && login ? (
        <LoginForm
          formName="Change Personal data"
          onSumbitLoginForm={onSumbitLoginForm}
        />
      ) : (
        <LoginForm
          formName="Personal data"
          onSumbitLoginForm={onSumbitLoginForm}
        />
      )}
    </div>
  );
};
