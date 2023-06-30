import {
  NavLink,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import "./styles.scss";
import { useState } from "react";
export const ProfileNavigate = () => {
  // const [currentPath, setCurrentPath] = useState("/profile");

  const location = useLocation();

  return (
    <ul className="profile-navigate ">
      <li className={location.pathname === "/profile" ? "active" : ""}>
        <NavLink to="/profile" />
      </li>
      <li className={location.pathname === "/basket" ? "active" : ""}>
        <NavLink to="/basket" />
      </li>
      <li className={location.pathname === "/tracking" ? "active" : ""}>
        <NavLink to="/tracking" />
      </li>
    </ul>
  );
};
