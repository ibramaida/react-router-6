import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav ">
        <NavLink
          to="/host"
          end
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          income
        </NavLink>
        <NavLink
          to="/host/vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
