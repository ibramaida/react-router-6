import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./server";

import { Home, About } from "./pages";
import { Vans, VanDetails } from "./pages/Vans";
import { HostLayout, Layout } from "./components";
import {
  Dashboard,
  Income,
  Reviews,
  HostVans,
  HostVanDetails,
} from "./pages/Host";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
