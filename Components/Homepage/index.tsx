import React, { useState, useEffect } from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import CustomCursor from "../CustomCursor/CustomCursor";
import ShowCaseNameAnimation from "./ShowCaseNameAnimation";
import TypicalAnimation from "./TypicalAnimation";
import {
  FirstNameNameAnimationConfig,
  LastNameAnimationConfig,
} from "../../utils/PersonalData";
// import StarsCanvas from "../Stars";

const Index = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16, // subtract half of the div's height & width
      y: mousePosition.y - 16,
    },
    negative: {
      height: 150,
      width: 150,
      backgroundColor: "white",
      mixBlendMode: "difference",
      x: mousePosition.x - 75, // subtract half of the div's height & width
      y: mousePosition.y - 75,
    },
  };

  const onMouseEnter = () => setCursorVariant("negative");
  const onMouseLeave = () => setCursorVariant("default");

  return (
    <div className="bg-no-repeat bg-cover dark:bg-black/30 bg-customWhite ">
      <div className="hidden md:block">
        <CustomCursor variants={variants} animationVariants={cursorVariant} />
      </div>
      <div className="flex flex-col h-screen md:flex-row">
        <div className="md:w-[90%] flex flex-col items-center md:pl-[10%] justify-center h-full md:h-screen text-3xl dark:text-white text-black  md:text-8xl md:pr-56 ">
          <div className="flex mb-2 font-bold gap-x-2 md:gap-x-4">
            {/*----------------- firstName--------  */}
            <div className="flex">
              {FirstNameNameAnimationConfig.map((letter, index) => {
                return (
                  <div key={index}>
                    <ShowCaseNameAnimation
                      label={letter.lable}
                      animationDelay={letter.animationDelay}
                      animationDuration={letter.animationDuration}
                    />
                  </div>
                );
              })}
            </div>
            {/* ------------ lastName -------- */}
            <div className="flex">
              {LastNameAnimationConfig.map((letter, index) => {
                return (
                  <div key={index}>
                    <ShowCaseNameAnimation
                      label={letter.lable}
                      animationDelay={letter.animationDelay}
                      animationDuration={letter.animationDuration}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <TypicalAnimation />
          </div>
        </div>
        <div className=" flex justify-center md:justify-center items-center md:w-[10%] h-auto  md:h-auto bg-red-400">
          <SocialLinks
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
