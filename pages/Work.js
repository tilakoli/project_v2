import React from "react";
import Layout from "../Layout";
import TestCard from "../Components/Card/TestCard";
import { projectsData } from "../utils/PersonalData";
import { motion } from "framer-motion";
import Badge from "../Components/Elements/Badge";
import ShowCaseNameAnimation from "../Components/Homepage/ShowCaseNameAnimation";
import { projectsPageTextAnimation } from "../utils/PersonalData";

const Work = () => {
  const animateFromSideLeft = {
    hidden: {
      x: "300",
      opacity: 1,
      rotate: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: "-90deg",
      transition: {
        type: "linear",
        bounce: 0.4,
        duration: 0.8,
        delay: 0.5,
      },
    },
  };
  return (
    <Layout>
      <div className="z-50 flex flex-col items-center justify-center h-full min-w-full text-black lg:mb-12 bg-customWhite dark:bg-primaryBlack/50 dark:text-white">
        <div className="h-full w-full mt-6 md:mt-16 rounded-md  lg:w-[80%] flex items-start flex-col pt-8 pb-6 px-2 lg:px-10 gap-5 ">
          <Badge label="Portfolio" Heading="My Projects" />
          <div className="flex flex-col justify-center w-full h-full gap-y-14 xl:gap-y-20 md:justify-start">
            <div className="flex flex-col items-center  w-full xl:w-[96%] gap-y-10 md:gap-y-0 md:flex-row md:gap-x-10 xl:justify-around ">
              <div className="rounded-[30px] bg-[#7a7a7a]">
                <TestCard projectsData={projectsData} />
              </div>
              <div className="rounded-[30px] bg-[#7a7a7a]">
                <TestCard projectsData={projectsData} />
              </div>
            </div>

            <div className="flex flex-col items-center  w-full xl:w-[96%] gap-y-10 md:gap-y-0 md:flex-row md:gap-x-10 xl:justify-around">
              <div className="rounded-[30px] bg-[#7a7a7a]">
                <TestCard projectsData={projectsData} />
              </div>
              <div className="rounded-[30px] bg-[#7a7a7a]">
                <TestCard projectsData={projectsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  <motion.div
        variants={animateFromSideLeft}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.8 }}
        style={{ zIndex: 99999999999 }}
        className="fixed w-12 top-[25%] h-96 right-8 bg-orange-300  text-xl capitalize transform -rotate-90 "
      >
   
       {projectsPageTextAnimation.map((letter, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center "
            >
              <ShowCaseNameAnimation
                label={letter.lable}
                animationDelay={letter.animationDelay}
                animationDuration={letter.animationDuration}
              />
            </div>
          );
        })} 
      </motion.div> */}
    </Layout>
  );
};

export default Work;
