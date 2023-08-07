import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import "./styles.scss";

export const ProfileNavigate = () => {
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
