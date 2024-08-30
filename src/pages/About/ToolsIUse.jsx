import { Tooltip } from "@mui/material";
import React from "react";
import SkillBox from "../../components/SkillBox";
import wordpressIcon from "../../assets/wordpress-logo.svg";
import figmaIcon from "../../assets/figma-logo.svg";
import vscodeIcon from "../../assets/vscode-logo.svg";
import githubIcon from "../../assets/github-logo.svg";

const ToolsIUse = () => {
  return (
    <div className="bg-primary">
      <section className="container px-4 mx-auto ">
          {/* Tools I play with div */}
          <div className="py-20">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-4xl text-center text-white mt-10">
              Tools I play With
            </h1>
            <hr className="border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <p className="text-accent">
            I use various tools to streamline my workflow and boost
            productivity. Key tools include WordPress for content management,
            Figma for design and prototyping, Visual Studio Code for coding, and
            GitHub for version control and collaboration.
          </p>
          <div className="flex flex-wrap justify-center gap-12 my-14">
            <Tooltip
              content="WordPress"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillBox
                  icon={wordpressIcon}
                  className="bg-wordpressColor border-wordpressColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="Figma"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillBox
                  icon={figmaIcon}
                  className="bg-figmaColor border-figmaColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="VS Code"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillBox
                  icon={vscodeIcon}
                  className="bg-vscodeColor border-vscodeColor"
                />
              </div>
            </Tooltip>
            <Tooltip
              content="GitHub"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div>
                <SkillBox
                  icon={githubIcon}
                  className="bg-githubColor border-githubColor"
                />
              </div>
            </Tooltip>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsIUse;
