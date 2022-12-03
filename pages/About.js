import React, { useState } from "react";
import Layout from "../Layout/index";
import CustomCursor from "../Components/CustomCursor/CustomCursor";
const About = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isCursorHidden, setIsCursorHidden] = useState(false);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const handleCvDownload = () => {
    console.log("download");
  };
  return (
    <div>
      {/* <CustomCursor cursorVariant={cursorVariant} isHidden={isCursorHidden} /> */}
      <Layout>
        <div className="z-50 flex flex-col items-center justify-center h-full min-w-full mb-12 ">
          <div className="h-full w-full  md:w-[70%] flex items-start flex-col pt-24 px-5 md:px-0 gap-5">
            <div className="p-2 rounded-sm bg-white/50 text-black/50 backdrop-blur-sm">
              <p>About</p>
            </div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                About Me
              </h2>
            </div>
            <div className="w-full h-auto md:h-[40rem] relative">
              {/* <div className="absolute top-0 left-0 w-full h-full backdrop-grayscale"></div> */}
              <img
                src="/aboutImage.png"
                alt="User profile picture"
                className="w-full h-full hover:cursor-none"
                // onMouseEnter={textEnter}
                // onMouseLeave={textLeave}
              />
            </div>
            <div
              className="text-white "
              // onMouseEnter={textEnter}
              // onMouseLeave={textLeave}
            >
              <h1 className="text-2xl md:text-4xl">Tilak Oli</h1>
              <h3 className="text-gray-400 text-md md:text-xl">
                Web Developer
              </h3>
            </div>
            <hr className="hidden w-full h-[2px] bg-white/50 md:block" />
            <div className="text-white">
              <p>
                Hi, my name is Tilak Oli and I began using React when it first
                began. I’ve spent most of my waking hours for the last ten years
                designing, programming and operating React sites.
              </p>
              <br />
              <p>
                One of my specialties is taking an idea from scratch and
                creating a full-fledged platform. I go beyond to produce sites
                with a unique, outstanding, contemporary look-and-feel. With
                extensive knowledge of web mechanics, I’m able to optimize
                complex integrations to require little-to-no maintenance while
                running on their own for years.
              </p>
              <br />
              <button
                onMouseEnter={() => setIsCursorHidden(true)}
                onMouseLeave={() => setIsCursorHidden(false)}
                onClick={handleCvDownload}
                className="p-5 text-black uppercase bg-white cursor-none hover:border hover:border-white hover:bg-black/50 backdrop-blur-sm hover:text-white"
              >
                Download cv
              </button>
            </div>
            {/* <hr className="hidden w-full h-1 bg-white/50 md:block" /> */}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
