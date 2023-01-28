import React, { useState, useEffect } from "react";
import Layout from "../Layout/index";
import CustomCursor from "../Components/CustomCursor/CustomCursor";
import Badge from "../Components/Elements/Badge";
import {
  personalData,
  personalDetail2,
  skills,
  Languages,
  Knowledge,
  Interests,
  description1,
  description2,
} from "../utils/PersonalData";
import DetailsContainer from "../Components/Elements/DetailsContainer";
// give a different background color to each of the showCase rows with sufficient spacing
// above and below to break the symmetry of one single box
//

const About = () => {
  // const [cursorVariant, setCursorVariant] = useState("default");
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };
  //   window.addEventListener("mousemove", onMouseMove);
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 16, // subtract half of the div's height & width
  //     y: mousePosition.y - 16,
  //   },
  //   negative: {
  //     height: 150,
  //     width: 150,
  //     backgroundColor: "white",
  //     mixBlendMode: "difference",
  //     x: mousePosition.x - 75, // subtract half of the div's height & width
  //     y: mousePosition.y - 75,
  //   },
  // };

  // const onMouseEnter = () => setCursorVariant("negative");
  // const onMouseLeave = () => setCursorVariant("default");

  const handleCvDownload = () => {
    console.log("download");
    alert("Why was the scarecrow hired?");
  };

  const SectionHeading = (sectionTitle) => (
    <h1 className="text-2xl font-bold underline ">{sectionTitle}</h1>
  );

  return (
    <div className="h-full">
      <div className="hidden md:block">
        {/* <CustomCursor variants={variants} animationVariants={cursorVariant} /> */}
      </div>
      <Layout>
        <div className="z-50 flex flex-col items-center justify-center h-full min-w-full text-black md:mb-12 bg-customWhite dark:bg-primaryBlack/50 dark:text-white">
          <div className="h-full w-full md:mt-16 rounded-md  md:w-[80%] flex items-start flex-col pt-14 pb-8 px-5 md:px-10 gap-5 ">
            {" "}
            <Badge label="About" Heading="About Me" />
            <div className="w-full h-auto md:h-[40rem] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                // onMouseEnter={onMouseEnter}
                // onMouseLeave={onMouseLeave}
                src="/background4.jpg"
                alt="User profile picture"
                className="object-fill w-full h-full bg-no-repeat bg-cover "
              />
            </div>
            <div className="">
              <h1 className="text-2xl md:text-4xl">Tilak Oli</h1>
              <h3 className=" text-md md:text-xl">Web Developer</h3>
            </div>
            <hr className="hidden w-full h-[2px] border-black border dark:border-customWhite md:block mt-5 mb-4" />
            <div className=" text-md md:text-xl">
              <p>{description1}</p>
              <br />
              <p>{description2}</p>
              <br />
              {/* -----------------------personal Details --------------------
               */}
              <div className="flex flex-col w-full mb-8 md:flex-row">
                <div className="flex flex-col w-full h-full gap-2 md:w-1/2 md:gap-3">
                  {personalData.map((elem, index) => {
                    return (
                      <DetailsContainer
                        label={elem.label}
                        key={index}
                        value={elem.value}
                      />
                    );
                  })}
                </div>
                <div className="flex w-full h-full md:w-1/2">
                  {personalDetail2.map((elem, index) => {
                    return (
                      <DetailsContainer
                        label={elem.label}
                        key={index}
                        value={elem.value}
                      />
                    );
                  })}
                </div>
              </div>
              <button
                onClick={handleCvDownload}
                // onMouseEnter={onMouseEnter}
                // onMouseLeave={onMouseLeave}
                className="p-5 text-white uppercase bg-black dark:text-black dark:bg-white/80 "
              >
                Download cv
              </button>
            </div>
            <hr className="hidden w-full h-[2px] border-black border dark:border-customWhite md:block mt-5 mb-4" />
            {/* -------------------------skills ------------------------ */}
            <div
              className="flex flex-col w-full gap-4 p-8 mt-4 mb-8 text-white bg-black rounded-md dark:bg-gray-400 dark:text-black md:gap-0 md:flex-row"
              // onMouseEnter={onMouseEnter}
              // onMouseLeave={onMouseLeave}
            >
              <div className="flex flex-col w-full h-full gap-2 md:w-1/2 md:gap-3">
                <div>{SectionHeading("Programming Skills")}</div>
                <div className="">
                  {skills.map((elem, index) => {
                    return (
                      <DetailsContainer
                        key={index}
                        label={elem.languageName}
                        value={elem.skillLevel}
                        type="skills"
                      />
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col w-full h-full gap-2 md:gap-3 md:w-1/2">
                <div>{SectionHeading("Languages Spoken")}</div>

                {Languages.map((elem, index) => {
                  return (
                    <DetailsContainer
                      key={index}
                      label={elem.language}
                      value={elem.languageProficiency}
                      type="skills"
                    />
                  );
                })}
              </div>
            </div>
            {/* ------------------------------------Knowledge/Interests ------------------------------------ */}
            <div
              className="flex flex-col w-full gap-4 p-8 mb-8 text-white bg-black rounded-md md:mt-4 md:flex-row md:gap-4 dark:bg-gray-400 dark:text-black"
              // onMouseEnter={onMouseEnter}
              // onMouseLeave={onMouseLeave}
            >
              <div className="flex flex-col w-full h-full gap-2 md:gap-3 md:w-1/2">
                <div>{SectionHeading("Knowledge")}</div>

                {Knowledge.map((e, i) => {
                  return <DetailsContainer key={i} label={e} type="bullet" />;
                })}
              </div>

              <div className="flex flex-col w-full h-full gap-2 md:gap-3 md:w-1/2">
                <div>{SectionHeading("Interests")}</div>
                {Interests.map((e, i) => {
                  return <DetailsContainer key={i} label={e} type="bullet" />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
