import React from "react";
import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Web Developer", "Web Designer", "UI/UX Developer"],
          autoStart: true,
          loop: true,
          delay: 45,
          deleteSpeed: 30,
        }}
      />
    </div>
  );
};

export default TypeEffect;
