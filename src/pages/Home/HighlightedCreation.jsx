import React from "react";
import Swiper from "swiper";
import { EffectCreative, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import CustomSlider from "../../components/Slider/CustomSlider";

const HighlightedCreation = () => {
  return (
    <div className="bg-primary">
      <section className="container px-4 mx-auto ">
        {/* Highlighted creations div */}
        <div className="py-20">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo text-white font-bold text-4xl mt-10 text-center">
              Highlighted Creations
            </h1>
            <hr className="border-b-4 border-secondary w-48 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <p className="text-accent mb-12">
            Explore my top projects, crafted with creativity and precision. Each
            highlights my expertise in UI/UX design and web development,
            showcasing how I blend aesthetics with functionality. Check out my
            portfolio to see these impactful digital creations.
          </p>

          {/* Project card for smaller screens */}
          <div className="md:hidden my-10">
            {/* <Swiper
              modules={[EffectCreative, Pagination]}
              effect="creative"
              creativeEffect={{
                prev: {
                  shadow: true,
                  origin: "left center",
                  translate: ["-5%", 0, -200],
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: "right center",
                  translate: ["5%", 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              pagination={true}
              grabCursor={true}
            >
              <SwiperSlide
                className="justify-center items-center"
                style={{ display: "flex" }}
              >
                <ProjectCard
                  laptopImg="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj1laptop"
                  //   mobileImg="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj1mob"
                  title="Basic Chat Application"
                  description="Developed an basic chat application using ReactJs and NodeJs. Features include user authentication, real-time communications, channels, and Profile Setup. Responsive design ensures a seamless experience across devices."
                  demoLink="https://sync-chat-frontend-six.vercel.app"
                  codeLink="https://github.com/ils-AkshatM/sync-chat-frontend"
                  className="hidden"
                />
              </SwiperSlide>
              <SwiperSlide
                className="justify-center items-center"
                style={{ display: "flex" }}
              >
                <ProjectCard
                  laptopImg="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj2laptop"
                  //   mobileImg="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj2mob"
                  title="Basic Ecommerce Website"
                  description="A web app for learning the concepts for ecommerce websites. This project consists of purchase of furnitures, electronics etc. Also added the prod descriptions and check in/out for the users."
                  demoLink="https://spawn-11wv.onrender.com"
                  codeLink="https://github.com/ils-AkshatM/Ecomm-Spawn"
                  className="hidden"
                />
              </SwiperSlide>
            </Swiper> */}
            <CustomSlider />
          </div>

          {/* Project card for larger screens */}
          <div className="hidden md:flex md:flex-wrap justify-center items-center gap-20">
            <ProjectCard
              laptopImg="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj1laptop"
              //   mobileImg="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj1mob"
              title="Basic Chat Application"
              description="Developed an basic chat application using ReactJs and NodeJs and NodeJs.. Features include user authentication, real-time communications, channels, and Profile Setup. Responsive design ensures a seamless experience across devices."
              demoLink="https://sync-chat-frontend-six.vercel.app"
              codeLink="https://github.com/ils-AkshatM/sync-chat-frontend"
            />
            <ProjectCard
              laptopImg="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj2laptop"
              //   mobileImg="https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj2mob"
              title="Basic Ecommerce Website"
              description="A web app for learning the concepts for ecommerce websites. This project consists of purchase of furnitures, electronics etc. Also added the prod descriptions and check in/out for the users."
              demoLink="https://spawn-11wv.onrender.com"
              codeLink="https://github.com/ils-AkshatM/Ecomm-Spawn"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighlightedCreation;
