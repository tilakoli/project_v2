import React, { useState } from "react";
import Layout from "../Layout/index";
import CustomCursor from "../Components/CustomCursor/CustomCursor";
import { MdArrowForwardIos } from "react-icons/md";

// give a different background color to each of the showCase rows with sufficient spacing
// above and below to break the symmetry of one single box
//

const About = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isCursorHidden, setIsCursorHidden] = useState(false);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const handleCvDownload = () => {
    console.log("download");
  };

  const personalData = [
    {
      label: "Birthday",
      value: "1998-04-01",
    },
    {
      label: "Age",
      value: "23",
    },
    {
      label: "Address",
      value: "Kathmandu, Nepal",
    },
    {
      label: "email",
      value: "tilak.81oli@gmail.com",
    },
    {
      label: "Phone",
      value: "0987654321",
    },
    {
      label: "Nationality",
      value: "Nepali",
    },
  ];
  const personalDetail2 = [
    {
      label: "Interests",
      value: "Coding, Music!",
    },
  ];
  const skills = [
    {
      languageName: "ReactJs",
      skillLevel: "80%",
    },
    {
      languageName: "NextJs",
      skillLevel: "80%",
    },
    {
      languageName: "Css",
      skillLevel: "80%",
    },
    {
      languageName: "Redux",
      skillLevel: "80%",
    },
    {
      languageName: "JestJs",
      skillLevel: "80%",
    },
  ];
  const Languages = [
    {
      language: "English",
      languageProficiency: "80%",
    },
    {
      language: "Hindi",
      languageProficiency: "80%",
    },
    {
      language: "Nepali",
      languageProficiency: "100%",
    },
  ];
  const Knowledge = ["Bootstrap", "Reactjs", "NextJs", "tailwindcss"];
  const Interests = ["Music", "Books", "Coding", "Experimenting"];
  return (
    <div className="h-full">
      {/* <CustomCursor cursorVariant={cursorVariant} isHidden={isCursorHidden} /> */}
      <Layout>
        <div className="z-50 flex flex-col items-center justify-center h-full min-w-full md:mb-12 ">
          <div className="h-full w-full md:mt-16 rounded-md  md:w-[80%] flex items-start flex-col pt-14 pb-8 px-5 md:px-10 gap-5 ">
            {" "}
            {/* //bg-gray-400/40 */}
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
                className="w-[90%] h-full hover:cursor-none"
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
            <hr className="hidden w-full h-[2px] bg-white/50 md:block mt-5 mb-4" />
            <div className="text-white text-md md:text-xl">
              <p>
                lorem ipsum dolor sit amet, consectetur adip occure lorem ipsum
                dolor sit amet, consectetur adip occure lorem ipsum dolor sit
                amet, consectetur adip occure lorem ipsum dolor sit amet,
              </p>
              <br />
              <p>
                lorem ipsum dolor sit amet, consectetur adip occure lorem ipsum
                dolor sit amet, consectetur adip occure lorem ipsum dolor sit
                amet, consectetur adip occure lorem ipsum dolor sit amet,
                consectetur adip occure lorem ipsum dolor sit amet, consectetur
                adip occure. adip occure lorem ipsum dolor sit amet, consectetur
                adip occure lorem ipsum dolor sit amet, consectetur adip occure
                lorem ipsum dolor sit amet, consectetur adip occure lorem ipsum
                dolor sit amet, consectetur adip occure lorem ipsum dolor sit
                amet,
              </p>
              <br />
              {/* -----------------------personal Details --------------------
               */}
              <div className="flex flex-col w-full mb-8 md:flex-row">
                <div className="flex flex-col w-full h-full gap-2 text-white md:w-1/2 md:gap-3">
                  {personalData.map((elem, index) => {
                    return (
                      <div className="flex flex-col gap-2 md:gap-3" key={index}>
                        <div className="flex gap-2 text-lg md:text-xl">
                          <div className="text-gray-300">{elem.label}:</div>
                          <div>{elem.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex w-full h-full text-white md:w-1/2">
                  {personalDetail2.map((elem, index) => {
                    return (
                      <div className="flex flex-col gap-2 md:gap-3" key={index}>
                        <div className="flex gap-2 text-lg md:text-xl">
                          <div className="text-gray-300">{elem.label}:</div>
                          <div>{elem.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                onMouseEnter={() => setIsCursorHidden(true)}
                onMouseLeave={() => setIsCursorHidden(false)}
                onClick={handleCvDownload}
                className="p-5 text-black uppercase bg-white cursor-none hover:border hover:border-white hover:bg-black/50 backdrop-blur-sm hover:text-white"
              >
                Download cv
              </button>
            </div>
            <hr className="hidden w-full h-[2px] bg-white/50 md:block mt-5 mb-4" />
            {/* -------------------------skills ------------------------ */}
            <div className="flex flex-col w-full gap-4 mt-4 mb-8 md:gap-0 md:flex-row">
              <div className="flex flex-col w-full h-full gap-2 text-white md:w-1/2 md:gap-3">
                <div>
                  <h1 className="text-2xl font-bold underline ">
                    Programming Skills
                  </h1>
                </div>
                {skills.map((elem, index) => {
                  return (
                    <div className="flex flex-col gap-2 md:gap-3" key={index}>
                      <div className="flex gap-2 text-lg md:text-xl">
                        <div className="text-gray-300">
                          {elem.languageName}:
                        </div>
                        <progress value={elem.skillLevel} className="" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col w-full h-full gap-2 text-white md:gap-3 md:w-1/2">
                <div>
                  <h1 className="text-2xl font-bold underline ">
                    Languages Spoken
                  </h1>
                </div>
                {Languages.map((elem, index) => {
                  return (
                    <div className="flex flex-col gap-2 md:gap-3" key={index}>
                      <div className="flex gap-2 text-lg md:text-xl">
                        <div className="text-gray-300">{elem.language}:</div>
                        <progress
                          value={elem.languageProficiency}
                          className=""
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* ------------------------------------Knowledge/Interests ------------------------------------ */}
            <div className="flex flex-col w-full gap-4 mb-8 md:mt-4 md:flex-row md:gap-4">
              <div className="flex flex-col w-full h-full gap-2 text-white md:gap-3 md:w-1/2">
                <div>
                  <h1 className="text-2xl font-bold underline ">Knowledge</h1>
                </div>
                {Knowledge.map((e, i) => {
                  return (
                    <div className="flex flex-col gap-2 md:gap-3" key={i}>
                      <div className="flex items-center gap-2 text-lg capitalize md:text-xl">
                        <div className="text-gray-300">
                          <MdArrowForwardIos />
                        </div>
                        <div>{e}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col w-full h-full gap-2 text-white md:gap-3 md:w-1/2">
                <div>
                  <h1 className="text-2xl font-bold underline ">Interests</h1>
                </div>
                {Interests.map((e, i) => {
                  return (
                    <div className="flex flex-col gap-2 md:gap-3" key={i}>
                      <div className="flex items-center gap-2 text-lg capitalize md:text-xl">
                        <div className="text-gray-300">
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
