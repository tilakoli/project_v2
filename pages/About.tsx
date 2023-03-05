import React from "react";
import { motion } from "framer-motion";
import Layout from "../Layout/index";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signature from "../Components/Elements/Signature";
import { useTheme } from "next-themes";

const About = () => {
  const { theme } = useTheme();

  const signatureStrokeColor = theme === "dark" ? "White" : "black";

  const SectionHeading = (sectionTitle: string) => (
    <h1 className="text-2xl font-bold underline ">{sectionTitle}</h1>
  );

  return (
    <div className="h-full">
      <div className="hidden md:block"></div>

      <Layout>
        <div className="z-50 flex flex-col items-center justify-center h-full min-w-full text-black md:mb-12 bg-customWhite dark:bg-primaryBlack/50 dark:text-white">
          <div className="h-full w-full md:mt-16 rounded-md  md:w-[80%] flex items-start flex-col pt-14 pb-8 px-5 md:px-10 gap-5 ">
            {" "}
            <ToastContainer
              autoClose={4000}
              closeOnClick
              draggable
              hideProgressBar={true}
              // theme={toastTheme}
            />
            <Badge label="About" Heading="About Me" />
            <div className="w-full md:flex h-auto md:h-[40rem] relative ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/background4.jpg"
                alt="User profile picture"
                className="object-cover w-full h-full bg-no-repeat bg-contain md:w-1/2 "
              />
              <div className="flex flex-col justify-between w-full p-8 leading-5 tracking-tighter md:leading-normal md:tracking-normal md:w-1/2">
                <div className="text-justify md:text-start text-md md:text-2xl">
                  <p>{description1}</p>
                  <br />
                  <p>{description2}</p>
                </div>

                <div className="flex items-end justify-center mt-8 md:justify-end md:mt-0">
                  <Signature strokeColor={signatureStrokeColor} />
                </div>
              </div>
            </div>
            <hr className="hidden w-full h-[2px] border-black border dark:border-customWhite md:block mt-5 mb-4" />
            {/* -------------------------skills ------------------------ */}
            <motion.div className="flex flex-col w-full gap-4 p-8 mt-4 mb-8 text-white bg-black rounded-md dark:bg-gray-400 dark:text-black md:gap-0 md:flex-row">
              <div className="flex flex-col w-full h-full gap-2 md:w-1/2 md:gap-3">
                <div>{SectionHeading("Programming Skills")}</div>
                <div className="w-full">
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
            </motion.div>
            {/* ------------------------------------Knowledge/Interests ------------------------------------ */}
            <div className="flex flex-col w-full gap-4 p-8 mb-8 text-white bg-black rounded-md md:mt-4 md:flex-row md:gap-4 dark:bg-gray-400 dark:text-black">
              <div className="flex flex-col w-full h-full gap-2 md:gap-3 md:w-1/2">
                <div>{SectionHeading("Interests")}</div>
                {Interests.map((e, i) => {
                  return <DetailsContainer key={i} label={e} type="bullet" />;
                })}
              </div>

              <div className="flex flex-col w-full h-full gap-2 md:gap-3 md:w-1/2">
                <div>{SectionHeading("Others")}</div>

                {Knowledge.map((e, i) => {
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
