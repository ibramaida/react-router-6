import React from "react";
import {
  Link,
  Outlet,
  NavLink,
  defer,
  Await,
  useLoaderData,
} from "react-router-dom";

import { getHostVans } from "../../api";

export function loader({ params }) {
  return defer({ van: getHostVans(params.id) });
}

const HostVanDetails = () => {
  const loaderData = useLoaderData();

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <React.Suspense fallback={<h2>Loading van details...</h2>}>
        <Await resolve={loaderData.van}>
          {(currentVan) => (
            <div className="host-van-detail-layout-container">
              <div className="host-van-detail">
                <img src={currentVan.imageUrl} alt={currentVan.name} />
                <div className="host-van-detail-info-text">
                  <i className={`van-type van-type-${currentVan.type}`}>
                    {currentVan.type}
                  </i>
                  <h3>{currentVan.name}</h3>
                  <h4>${currentVan.price}/day</h4>
                </div>
              </div>

              <nav className="host-van-detail-nav">
                <NavLink
                  to="."
                  end
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  details
                </NavLink>
                <NavLink
                  to="pricing"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  pricing
                </NavLink>
                <NavLink
                  to="photos"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  photos
                </NavLink>
              </nav>

              <Outlet context={{ currentVan }} />
            </div>
          )}
        </Await>
      </React.Suspense>
    </section>
  );
};

export default HostVanDetails;
