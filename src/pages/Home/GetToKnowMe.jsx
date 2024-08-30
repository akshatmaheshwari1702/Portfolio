import React from "react";
import "./Home.css";
import profile from "../../assets/profile img.png";
import gradient from "../../assets/radial gradient.webp";
import whitegradient from "../../assets/white radial gradient.webp";

const GetToKnowMe = () => {
  return (
    <div className="bg-primary">
      <section className="container px-4 mx-auto ">
        {/* Get To know me div */}
        <div className="py-20">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-center text-4xl mt-10 text-white">
              Get To Know Me
            </h1>
            <hr className="border-b-4 border-secondary w-36 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div>
              <p className="text-accent">
                My journey in programming has been a thrilling ride of learning
                and discovery. I’ve developed skills in HTML, CSS, JavaScript,
                and I’m expanding my expertise in React JS and
                Nodejs.
              </p>
              <br />
              <p className="text-accent">
                I enjoy building dynamic web applications that offer smooth user
                experiences. From front-end design to back-end logic, I take
                pleasure in creating efficient and elegant solutions.
              </p>
              <br />
              <p className="text-accent">
                I’m keen on exploring new technologies and frameworks, staying
                updated with trends in web development. Whether it’s interactive
                UIs or robust back-end systems, I’m passionate about turning
                ideas into reality through code.
              </p>
            </div>
            <div className="relative w-full flex justify-center">
              <img src={profile} alt="profile-img" className="h-52 z-10" />
              <img
                src={gradient}
                alt="gradient"
                className="absolute -top-16 h-[350px] z-0"
              />
              <img
                src={whitegradient}
                alt="gradient"
                className="absolute blur-xl h-52  z-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetToKnowMe;
