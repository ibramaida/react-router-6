import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav ">
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          vans
        </NavLink>
        <NavLink
          to="reviews"
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
