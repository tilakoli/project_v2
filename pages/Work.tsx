import React from "react";
import Layout from "../Layout";
import TestCard from "../Components/Card/TestCard";
import { projectsData } from "../utils/PersonalData";
import Badge from "../Components/Elements/Badge";
import { motion } from "framer-motion";

const HintText = ({ hint }) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 1,
          y: -200,
          rotate: 90,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: 90,
          scale: 1,
          transition: {
            duration: 0.7,
            type: "spring",
            stiffness: 120,
          },
        }}
        className=" hidden fixed dark:text-white text-primaryBlack text-lg md:block right-0 top-[50%] tracking-wider "
      >
        {hint}
      </motion.div>
    </>
  );
};
const Work = () => {
  return (
    <Layout>
      <div className="z-50 flex flex-col items-center justify-center h-full min-w-full text-black lg:mb-12 bg-customWhite dark:bg-primaryBlack/50 dark:text-white">
        <div className="h-full w-full mt-6 md:mt-16 rounded-md  lg:w-[80%] flex items-start flex-col pt-8 pb-6 px-2 lg:px-10 gap-5 ">
          <Badge label="Portfolio" Heading="My Projects" />
          <div className="flex flex-col justify-center w-full h-full gap-y-14 xl:gap-y-20 md:justify-start">
            <div className="flex flex-col items-center  w-full xl:w-[96%] gap-y-10 md:gap-y-0 md:flex-row md:gap-x-10 xl:justify-around ">
              <div className="rounded-[30px] bg-[#7a7a7a]">
                <TestCard projectsData={projectsData[1]} />
              </div>
              <div className="rounded-[30px] bg-[#7a7a7a]">
                <TestCard projectsData={projectsData[0]} />
              </div>
            </div>

            <div className="flex flex-col items-center  w-full xl:w-[96%] gap-y-10 md:gap-y-0 md:flex-row md:gap-x-10 xl:justify-around">
              <div className="rounded-[30px] bg-[#7a7a7a]">
                <TestCard projectsData={projectsData[0]} />
              </div>
              <div className="rounded-[30px] bg-[#7a7a7a]">
                <TestCard projectsData={projectsData[1]} />
              </div>
            </div>
          </div>
          {<HintText hint="Try Grabbing the Cards." />}
        </div>
      </div>
    </Layout>
  );
};

export default Work;
