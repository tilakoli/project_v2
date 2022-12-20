import React, { useState } from "react";
import Typical from "react-typical";
import SocialLinks from "../SocialLinks/SocialLinks";
import TextAnimation from "../TextAnimation/TextAnimation";

const Index = () => {
  return (
    <div>
      {/* <CustomCursor cursorVariant={cursorVariant} isHidden={isCursorHidden} /> */}
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-[90%] flex flex-col items-center justify-center h-[calc(100vh-5rem)] md:h-screen text-2xl text-white md:text-8xl md:pr-56">
          <div className="flex mb-2 font-bold gap-x-4">
            <TextAnimation label="Tilak" />
            <TextAnimation label="Oli" />
          </div>
          <div className="flex items-center justify-center md:text-4xl gap-x-2">
            I am a
            {/* <TextAnimation label="I" />
            <TextAnimation label="am" />
            <TextAnimation label="a" /> */}
            <span>
              <Typical
                steps={[
                  "Developer!",
                  4000,
                  "Designer!",
                  4000,
                  "Freelancer!",
                  4000,
                ]}
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
