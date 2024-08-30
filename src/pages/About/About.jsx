import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { Breadcrumbs, Tooltip } from "@mui/material";


function About() {
  return (
    <>
    {/* header  */}
      <section className="about-hero-section relative min-h-[45vh] md:min-h-[65vh] flex flex-col justify-center items-center shadow-lg shadow-black ">
        <h1 className="text-4xl font-cairo md:text-[40px] lg:text-5xl font-bold mb-3 mt-14 text-white">
          About Me
        </h1>
        <Breadcrumbs
          separator={<p className="text-white">/</p>}
          className="bg-transparent "
        >
          <Link
            to="/"
            className="opacity-60 text-white text-base"
            style={{ fontWeight: "400" }}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="text-white text-base"
            style={{ fontWeight: "400" }}
          >
            ABOUT
          </Link>
        </Breadcrumbs>
      </section>
    </>
  );
}

export default About;
