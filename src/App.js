import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./App.css";
import "./server";

import { Home, About, Page404 } from "./pages";
import { Vans, VanDetails } from "./pages/Vans";
import { loader as vansLoader } from "./pages/Vans/Vans";
import { HostLayout, Layout } from "./components";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetails />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />

        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="vans" element={<Vans />} />
    //       <Route path="vans/:id" element={<VanDetails />} />
    //       <Route path="host" element={<HostLayout />}>
    //         <Route index element={<Dashboard />} />
    //         <Route path="reviews" element={<Reviews />} />
    //         <Route path="income" element={<Income />} />
    //         <Route path="vans" element={<HostVans />} />
    //         <Route path="vans/:id" element={<HostVanDetails />}>
    //           <Route index element={<HostVanInfo />} />
    //           <Route path="pricing" element={<HostVanPricing />} />
    //           <Route path="photos" element={<HostVanPhotos />} />
    //         </Route>
    //       </Route>
    //       <Route path="*" element={<Page404 />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
};

export default App;
