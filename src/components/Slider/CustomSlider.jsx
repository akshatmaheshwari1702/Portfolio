import React, { useState, useEffect } from "react";
import "./CustomSlider.css"; // CSS file for custom styles
import ProjectCard from "../ProjectCard/ProjectCard";

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      laptopImg: "https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj1laptop",
      title: "Basic Chat Application",
      description: "Developed a basic chat application using ReactJs and NodeJs...",
      demoLink: "https://sync-chat-frontend-six.vercel.app",
      codeLink: "https://github.com/ils-AkshatM/sync-chat-frontend"
    },
    {
      laptopImg: "https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/proj2laptop",
      title: "Basic Ecommerce Website",
      description: "A web app for learning the concepts for ecommerce websites...",
      demoLink: "https://spawn-11wv.onrender.com",
      codeLink: "https://github.com/ils-AkshatM/Ecomm-Spawn"
    },
    // Add more slides if needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Slide transition interval (3 seconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <ProjectCard
            laptopImg={slide.laptopImg}
            title={slide.title}
            description={slide.description}
            demoLink={slide.demoLink}
            codeLink={slide.codeLink}
          />
        </div>
      ))}
    </div>
  );
};

export default CustomSlider;
