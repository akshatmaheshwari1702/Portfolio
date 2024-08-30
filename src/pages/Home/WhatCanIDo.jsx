import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import 'swiper/swiper-bundle.css'; // Ensure Swiper styles are imported
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const WhatCanIDo = () => {
  return (
    <div className="bg-primary">
      <section className="container px-4 mx-auto ">
        {/* Services div */}
        <div className="py-20">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-4xl mt-10 text-center text-white">
              What Can I Do <span className="whitespace-nowrap">For You</span>
            </h1>
            <hr className="border-b-4 border-secondary w-48 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <p className="text-accent ">
            Discover how I can bring your projects to life. With expertise in
            web development, I offer a blend of creative UI/UX design, efficient
            frontend development with React.js, and robust backend solutions
            using Node Js and Express Js. Let's collaborate to turn your ideas into
            reality.
          </p>
          {/* For smaller screens */}
          <div className="md:hidden mt-14">
            <Swiper
              modules={[EffectCards, Pagination]}
              effect="cards"
              pagination={true}
              grabCursor={true}
              style={{ overflow: "hidden" }}
            >
              <SwiperSlide
                className="justify-center"
                style={{ display: "flex" }}
              >
                <ServiceCard
                  image="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/uiux"
                  title="UI/UX Design"
                  description="Crafting visually appealing and user-friendly designs that provide a seamless and engaging user experience."
                />
              </SwiperSlide>
              <SwiperSlide
                className="justify-center"
                style={{ display: "flex" }}
              >
                <ServiceCard
                  image="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/frontend"
                  title="Front-End Development"
                  description="Crafting dynamic and responsive websites using HTML, CSS, JavaScript, and modern frameworks like React.js, Bootstrap, and Tailwind CSS."
                />
              </SwiperSlide>
              <SwiperSlide
                className="justify-center"
                style={{ display: "flex" }}
              >
                <ServiceCard
                  image="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/backend"
                  title="Back-End Development"
                  description="Developing robust and scalable backend systems using NodeJs and Express Js, ensuring your website performs efficiently and securely."
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* For larger screens */}
          <div className="hidden md:flex justify-center items-center flex-row gap-14 flex-wrap mt-14">
            <ServiceCard
              image="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/uiux"
              title="UI/UX Design"
              description="Crafting visually appealing and user-friendly designs that provide a seamless and engaging user experience."
            />
            <ServiceCard
              image="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/frontend"
              title="Front-End Development"
              description="Crafting dynamic and responsive websites using HTML, CSS, JavaScript, and modern frameworks like React.js, Bootstrap, and Tailwind CSS."
            />
            <ServiceCard
              image="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/backend"
              title="Back-End Development"
              description="Developing robust and scalable backend systems using NodeJs and Express Js, ensuring your website performs efficiently and securely."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatCanIDo;
