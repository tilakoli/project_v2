import React from "react";
import { motion } from "framer-motion";
import Layout from "../Layout/index";
import Badge from "../Components/Elements/Badge";
import { Interests, description1, description2 } from "../utils/PersonalData";
import DetailsContainer from "../Components/Elements/DetailsContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signature from "../Components/Elements/Signature";
import { useTheme } from "next-themes";
import SkillsSphere from "../Components/SkillsSphere/SkillsSphere";

const About = () => {
  const { theme } = useTheme();

  const signatureStrokeColor = theme === "light" ? "black" : "white";

  const SectionHeading = (sectionTitle: string) => (
    <h1 className="pb-2 text-2xl font-bold underline md:text-4xl ">
      {sectionTitle}
    </h1>
  );

  return (
    <div className="h-full">
      <div className="hidden md:block"></div>

      <Layout>
        <div className="z-50 flex flex-col items-center justify-center h-full min-w-full text-black md:mb-12 bg-customWhite dark:bg-primaryBlack/50 dark:text-white">
          <div className="h-full w-full md:mt-16 rounded-md  lg:w-[80%] flex items-start flex-col pt-14 pb-8 px-5 md:px-10 gap-5 ">
            {" "}
            <ToastContainer
              autoClose={4000}
              closeOnClick
              draggable
              hideProgressBar={true}
              // theme={toastTheme}
            />
            <Badge label="About" Heading="About Me" />
            <div className="relative w-full h-auto md:flex ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/background4.jpg"
                alt="User profile picture"
                className="object-cover w-full h-full bg-no-repeat bg-contain md:w-1/2 md:h-[500px] "
              />
              <div className="flex flex-col w-full h-auto leading-5 tracking-tighter md:leading-normal md:tracking-normal md:w-1/2">
                <div className="h-auto text-justify md:pt-0 md:p-4 md:text-start text-md md:text-lg xl:text-xl">
                  <p>{description1}</p>
                  <br />
                  <p>{description2}</p>
                </div>

                <div className="flex items-end justify-start mt-5 md:justify-end">
                  <Signature
                    strokeColor={theme ? signatureStrokeColor : "white"}
                  />
                </div>
              </div>
            </div>
            {/* -------------------------skills ------------------------ */}
            <motion.div className="flex flex-col items-center justify-center w-full mt-4 mb-8 text-white bg-black rounded-md dark:bg-gray-400/60 backdrop-blur-sm dark:text-black">
              <div className="flex items-center w-full pt-5 pl-5">
                {SectionHeading("My TechStack")}
              </div>
              <SkillsSphere />
            </motion.div>
            {/* ------------------------------------Knowledge/Interests ------------------------------------ */}
            <div className="flex flex-col w-full gap-4 p-8 mb-8 text-white bg-black rounded-md md:mt-4 md:flex-row md:gap-4 dark:bg-gray-400/60 backdrop-blur-sm dark:text-black">
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
