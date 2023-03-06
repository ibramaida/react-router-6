import React from "react";
import { NavLink, Link } from "react-router-dom";

import avatarIcon from "../assets/images/avatar-icon.png";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink to="login" className="login-link">
          <img src={avatarIcon} className="login-icon" alt="avatar" />
        </NavLink>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
};

export default Header;
