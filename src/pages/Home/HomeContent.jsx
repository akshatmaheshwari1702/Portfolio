import React, { useEffect, useState } from "react";
import triangle from "../../assets/triangle.svg";
import { Link } from "react-router-dom";
import TypeEffect from "../../components/TypeEffect/TypeEffect";
import "./Home.css";

const HomeContent = ({ isLoading }) => {
  const [waitingTime, setWaitingTime] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setWaitingTime(true);
      }, 1800);
    }
  }, [isLoading]);
  return (
    <>
      <section className="home-hero-section pt-32 pb-20 relative">
        <img
          src={triangle}
          alt="triangle"
          className="absolute left-[10%] top-[20%] animate-rotate-up-down-left"
        />
        <img
          src={triangle}
          alt="triangle"
          className="absolute right-[12%] top-[30%] rotate-[78deg] animate-rotate-up-down-right"
        />
        <img
          src={triangle}
          alt="triangle"
          className="absolute left-2/4 bottom-[10%] rotate-[-90deg] animate-rotate-left-right"
        />
        <div className="container flex flex-wrap md:flex-nowrap justify-between items-center mx-auto my-10 gap-4 px-4">
          <div className="relative text-white">
            <h1 className="text-2xl font-cairo font-semibold tracking-wide">
              Hello World!{" "}
              <span className="emoji-wave" role="img" aria-labelledby="wave">
                👋
              </span>{" "}
              I am{" "}
            </h1>
            <span className="text-secondary text-[42px] font-extrabold font-cairo tracking-wide relative sm:whitespace-normal whitespace-nowrap">
              <svg
                aria-hidden="true"
                id="name-underline"
                viewBox="0 0 297 33"
                className={`absolute left-0 top-[64%] h-[0.58em] w-full fill-transparent sm:opacity-0  ${
                  waitingTime ? "block" : "hidden"
                } stroke-[#9fecff4b] stroke-[3.5]`}
                preserveAspectRatio="none"
              >
                <path d="M0.999989 20.5C79.5 4.5 85.5 5.5 85.5 5.5C354.5 -9.50001 -56.5262 35.0001 216.5 22.8813C235.5 22.0379 266.931 23.7779 296.5 31" />
              </svg>{" "}
              <span className="glow">Akshat Maheshwari</span>
            </span>
            <h2 className="text-3xl font-extrabold tracking-wide text-accent font-cairo my-7">
              <TypeEffect />
            </h2>
            <p className="hover:text-secondary fill-white w-max hover:fill-secondary mt-14 transition-all duration-300">
              <Link
                to={"/portfolio"}
                className="learn-more-link flex items-center relative font-medium text-lg"
              >
                <span>Explore my portfolio</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] fill-inherit ms-2"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </Link>
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/u8g7elqqmc3ogww8lkg3"
              className="h-[300px] md:h-[400px] mt-10 md:mt-0"
              alt="homepage-illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
