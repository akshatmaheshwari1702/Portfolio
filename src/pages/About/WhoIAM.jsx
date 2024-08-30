import React from "react";
import "./About.css";

const WhoIAM = () => {
  return (
    <div className="bg-primary">
      <section className="container px-4 mx-auto bg-primary">
        {/* Know who I am div */}
        <div className="py-20">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-4xl text-center text-white mt-10">
              Know Who I Am
            </h1>
            <hr className="border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <p className="text-accent">
            Hi, I'm Akshat Maheshwari, a web developer from Madhya Pradesh,
            India. I create engaging and interactive websites with a passion for
            coding. I am a BTech Graduate, and I’m deeply focused on both
            front-end and back-end development to enhance my skills.
          </p>
          <br />
          <p className="text-accent">
            Beyond coding, I enjoy exploring design trends, listening to music,
            and playing video games, which help me stay creative and inspired.
            These hobbies keep me motivated and refreshed.
          </p>
          <br />
          <p className="text-accent">
            Committed to continuous learning, I strive to push the boundaries of
            web development and turn innovative ideas into reality, delivering
            high-quality solutions for diverse projects.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhoIAM;
