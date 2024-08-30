import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const Layout = () => {
  // Creating state for loader
  const [isLoading, setIsLoading] = useState(true);

  useScrollToTop();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Header />
      <div>
        <Outlet isLoading={isLoading} />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
