import React from "react";
import CustomButton from "../../components/Button/Button";
import downloadIcon from "../../assets/download-icon.svg";
import arrowIcon from "../../assets/arrow.svg";
import Connect from "../../components/Connect/Connect";

const Resume = () => {
  return (
    <div className="bg-primary">
      <section className="container px-4 mx-auto ">
        {/* View Resume */}
        <div className="py-20 flex flex-col items-center">
          <p className="text-accent italic mb-6">
            Curious about my journey and achievements? Take a closer look at my
            detailed resume.
          </p>
          <img
            src={arrowIcon}
            alt="arrow-icon"
            className="translate-x-10 mb-3"
          />
          <a
            href="https://drive.google.com/file/d/1VfrwdctemkqPPCoykPZG-y8HkXSLqmue/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <CustomButton
              text="View My Resume"
              icon={downloadIcon}
              className="w-[18px]"
            />
          </a>
        </div>

        {/* Let's Connect div */}
        <div className="py-20">
          <Connect />
        </div>
      </section>
    </div>
  );
};

export default Resume;
