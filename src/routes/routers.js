import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import * as routes from "./routes";
import Layout from "../pages/Layout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import AboutLayout from "../pages/About/AboutLayout";
import PortfolioLayout from "../pages/Portfolio/PortfolioLayout";

const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={routes.HOME_ENDPOINT} element={<Home />} />
          <Route path={routes.CONTACT_ENDPOINT} element={<Contact />} />
          <Route path={routes.ABOUT_ENDPOINT} element={<AboutLayout />} />
        <Route path={routes.PORTFOLIO_ENDPOINT} element={<PortfolioLayout />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default Routers;
