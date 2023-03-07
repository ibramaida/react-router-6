import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./App.css";
import "./server";

import { Home, About, Page404, Login } from "./pages";
import { action as loginAction } from "./pages/Login";
import { Vans, VanDetails } from "./pages/Vans";
import { loader as vansLoader } from "./pages/Vans/Vans";
import { HostLayout, Layout, Error, AuthRequired } from "./components";
import {
  Dashboard,
  Income,
  Reviews,
  HostVans,
  HostVanDetails,
  HostVanPricing,
  HostVanPhotos,
  HostVanInfo,
} from "./pages/Host";
import { loader as hostVansLoader } from "./pages/Host/HostVans";
import { loader as VanDetailsLoader } from "./pages/Vans/VanDetails";
import { loader as hostDetailLoader } from "./pages/Host/HostVanDetails";
import { loader as dashboardLoader } from "./pages/Host/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        errorElement={<Error />}
        loader={VanDetailsLoader}
      />
      <Route path="login" element={<Login />} action={loginAction} />

      <Route element={<AuthRequired />}>
        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            errorElement={<Error />}
            loader={dashboardLoader}
          />
          <Route path="reviews" element={<Reviews />} />
          <Route path="income" element={<Income />} />
          <Route
            path="vans"
            element={<HostVans />}
            errorElement={<Error />}
            loader={hostVansLoader}
          />

          <Route
            path="vans/:id"
            element={<HostVanDetails />}
            errorElement={<Error />}
            loader={hostDetailLoader}
          >
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
