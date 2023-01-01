import React, { useState } from "react";
import Layout from "../Layout/index";
import CustomCursor from "../Components/CustomCursor/CustomCursor";
import { MdArrowForwardIos } from "react-icons/md";
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
// give a different background color to each of the showCase rows with sufficient spacing
// above and below to break the symmetry of one single box
//

const About = () => {
  const handleCvDownload = () => {
    console.log("download");
  };

  return (
    <div className="h-full">
      {/* <CustomCursor cursorVariant={cursorVariant} isHidden={isCursorHidden} /> */}
      <Layout>
        <div className="z-50 flex flex-col items-center justify-center h-full min-w-full text-black md:mb-12 bg-customWhite dark:bg-black/30 dark:text-white">
          <div className="h-full w-full md:mt-16 rounded-md  md:w-[80%] flex items-start flex-col pt-14 pb-8 px-5 md:px-10 gap-5 ">
            {" "}
            <div className="p-2 rounded-sm bg-white/50 text-black/50 backdrop-blur-sm">
              <p>About</p>
            </div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold md:text-5xl">About Me</h2>
            </div>
            <div className="w-full h-auto md:h-[40rem] relative">
              {/* <div className="absolute top-0 left-0 w-full h-full backdrop-grayscale"></div> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/background4.jpg"
                alt="User profile picture"
                className="object-fill w-full h-full bg-no-repeat bg-cover"
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
                      <div className="flex flex-col gap-2 md:gap-3" key={index}>
                        <div className="flex gap-2 text-lg md:text-xl">
                          <div className="">{elem.label}:</div>
                          <div>{elem.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex w-full h-full md:w-1/2">
                  {personalDetail2.map((elem, index) => {
                    return (
                      <div className="flex flex-col gap-2 md:gap-3" key={index}>
                        <div className="flex gap-2 text-lg md:text-xl">
                          <div className="">{elem.label}:</div>
                          <div>{elem.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={handleCvDownload}
                className="p-5 text-white uppercase bg-black dark:text-black cursor-none dark:bg-white"
              >
                Download cv
              </button>
            </div>
            <hr className="hidden w-full h-[2px] border-black border dark:border-customWhite md:block mt-5 mb-4" />
            {/* -------------------------skills ------------------------ */}
            <div className="flex flex-col w-full gap-4 p-8 mt-4 mb-8 text-white bg-black rounded-md dark:bg-gray-400 dark:text-black md:gap-0 md:flex-row">
              <div className="flex flex-col w-full h-full gap-2 md:w-1/2 md:gap-3">
                <div>
                  <h1 className="text-2xl font-bold underline ">
                    Programming Skills
                  </h1>
                </div>
                <div className="">
                  {skills.map((elem, index) => {
                    return (
                      <div className="flex flex-col gap-2 md:gap-3" key={index}>
                        <div className="flex gap-2 mb-3 text-lg md:text-xl">
                          <div className="flex items-center ">
                            {elem.languageName}:
                          </div>
                          <div className="flex items-center">
                            <progress value={elem.skillLevel} className="" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col w-full h-full gap-2 md:gap-3 md:w-1/2">
                <div>
                  <h1 className="text-2xl font-bold underline ">
                    Languages Spoken
                  </h1>
                </div>
                {Languages.map((elem, index) => {
                  return (
                    <div className="flex flex-col gap-2 md:gap-3" key={index}>
                      <div className="flex gap-2 mb-3 text-lg md:text-xl">
                        <div className="flex items-center ">
                          {elem.language}:
                        </div>
                        <div className="flex items-center">
                          <progress
                            value={elem.languageProficiency}
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* ------------------------------------Knowledge/Interests ------------------------------------ */}
            <div className="flex flex-col w-full gap-4 p-8 mb-8 text-white bg-black rounded-md md:mt-4 md:flex-row md:gap-4 dark:bg-gray-400 dark:text-black">
              <div className="flex flex-col w-full h-full gap-2 md:gap-3 md:w-1/2">
                <div>
                  <h1 className="text-2xl font-bold underline ">Knowledge</h1>
                </div>
                {Knowledge.map((e, i) => {
                  return (
                    <div
                      className="flex flex-col gap-2 cursor-pointer md:gap-3"
                      key={i}
                    >
                      <div className="flex items-center gap-2 text-lg capitalize md:text-xl">
                        <div className="">
                          <MdArrowForwardIos />
                        </div>
                        <div>{e}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col w-full h-full gap-2 md:gap-3 md:w-1/2">
                <div>
                  <h1 className="text-2xl font-bold underline ">Interests</h1>
                </div>
                {Interests.map((e, i) => {
                  return (
                    <div className="flex flex-col gap-2 md:gap-3" key={i}>
                      <div className="flex items-center gap-2 text-lg capitalize md:text-xl">
                        <div className="">
                          <MdArrowForwardIos />
                        </div>
                        <div>{e}</div>
                      </div>
                    </div>
                  );
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
