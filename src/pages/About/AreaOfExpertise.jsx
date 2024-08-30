import { Tooltip } from "@mui/material";
import React from "react";
import SkillBox from "../../components/SkillBox";
import htmlIcon from "../../assets/html-logo.svg";
import cssIcon from "../../assets/css-logo.svg";
import jsIcon from "../../assets/js-logo.svg";
import tailwindIcon from "../../assets/tailwind-logo.svg";
import bootstrapIcon from "../../assets/bootstrap-logo.svg";
import reactIcon from "../../assets/react-logo.svg";
import pythonIcon from "../../assets/python-logo.svg";
import djangoIcon from "../../assets/django-logo.svg";

const AreaOfExpertise = () => {
  return (
    <div className="bg-primary">
      <section className="container px-4 mx-auto">
        {/* Areas of Expertise div */}
        <div className="py-20">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-4xl text-center text-white mt-10">
              Areas of Expertise
            </h1>
            <hr className="border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <p className="text-accent">
            I’ve built a diverse skill set through education and hands-on
            projects. My expertise spans several areas, allowing me to tackle
            complex challenges effectively. Here are key areas where I excel and
            deliver high-quality results.
          </p>
          <div className="flex flex-wrap justify-center gap-12 my-14">
            <Tooltip
              content="HTML"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillBox
                  icon={htmlIcon}
                  className="bg-htmlColor border-htmlColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="CSS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div className="cursor-default">
                <SkillBox
                  icon={cssIcon}
                  className="bg-cssColor border-cssColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="JavaScript"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillBox icon={jsIcon} className="bg-jsColor border-jsColor" />
              </div>
            </Tooltip>
            <Tooltip
              content="Tailwind CSS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillBox
                  icon={tailwindIcon}
                  className="bg-tailwindColor border-tailwindColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="Bootstrap"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillBox
                  icon={bootstrapIcon}
                  className="bg-bootstrapColor border-bootstrapColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="React JS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillBox
                  icon={reactIcon}
                  className="bg-reactColor border-reactColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="Python"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillBox
                  icon={pythonIcon}
                  className="bg-pythonColor border-pythonColor"
                />
              </div>
            </Tooltip>
            {/* <Tooltip
              content="Django"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillBox
                  icon={djangoIcon}
                  className="bg-djangoColor border-djangoColor"
                />
              </div>
            </Tooltip> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaOfExpertise;
