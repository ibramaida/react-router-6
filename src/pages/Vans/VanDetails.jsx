import React from "react";
import {
  Link,
  useLocation,
  defer,
  Await,
  useLoaderData,
} from "react-router-dom";

import { getVans } from "../../api";
export function loader({ params }) {
  return defer({ van: getVans(params.id) });
}

const VanDetails = () => {
  const loaderData = useLoaderData();

  const location = useLocation();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
      <React.Suspense fallback={<h2>Loading van details...</h2>}>
        <Await resolve={loaderData.van}>
          {(van) => (
            <div className="van-detail">
              <img src={van.imageUrl} alt={van.name} />
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
              <h2>{van.name}</h2>
              <p className="van-price">
                <span>${van.price}</span>/day
              </p>
              <p>{van.description}</p>
              <button className="link-button">Rent this van</button>
            </div>
          )}
        </Await>
      </React.Suspense>
    </div>
  );
};

export default VanDetails;
