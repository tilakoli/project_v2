import React, { useState } from "react";
import Typical from "react-typical";
import SocialLinks from "../SocialLinks/SocialLinks";

const Index = () => {
  return (
    <div>
      {/* <CustomCursor cursorVariant={cursorVariant} isHidden={isCursorHidden} /> */}
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-[90%] flex flex-col items-center justify-center h-screen md:h-screen text-2xl text-white md:text-5xl md:pr-56">
          <h1 className="font-bold md:text-[70px] mb-2">Tilak Oli</h1>
          <div className="flex md:text-[30px]">
            I am a D
            <span>
              <Typical
                steps={["eveloper", 3000, "esigner", 3000]}
                loop={Infinity}
                wrapper="p"
              />
            </span>
          </div>
        </div>
        <div className=" flex justify-center md:justify-center items-center  md:w-[10%]">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Index;
