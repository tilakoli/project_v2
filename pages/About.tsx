import React from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import Layout from "../Layout/index";
import Badge from "../Components/Elements/Badge";
import { Interests, description1, description2 } from "../utils/PersonalData";
import DetailsContainer from "../Components/Elements/DetailsContainer";
import "react-toastify/dist/ReactToastify.css";
import Signature from "../Components/Elements/Signature";
import { useTheme } from "next-themes";
import SkillsSphere from "../Components/SkillsSphere/SkillsSphere";
import { useInView } from "react-intersection-observer";

const SectionHeading = ({ sectionTitle }) => (
  <h1 className="pb-2 text-2xl font-bold underline md:text-4xl">
    {sectionTitle}
  </h1>
);

const About = () => {
  const { theme } = useTheme();
  const signatureStrokeColor = theme === "light" ? "#C0C0C0" : "#797979";

  const descriptionVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const descriptionTransition = {
    duration: 1,
  };
  const [sectionRef, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
  });

  return (
    <>
      <div className="hidden md:block" />

      <Layout>
        <div className="z-50 flex flex-col items-center justify-center h-full min-w-full text-black md:mb-12 bg-customWhite dark:bg-primaryBlack/50 dark:text-white">
          <div className="h-full w-full md:mt-16 rounded-md  lg:w-[80%] flex items-start flex-col pt-14 pb-8 px-5 md:px-10 gap-5 ">
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
                src="/profile4.jpg"
                alt="User profile picture"
                className="object-cover w-full h-full bg-no-repeat  bg-contain md:w-1/2 md:h-[450px] opacity-60"
              />
              <div className="flex flex-col w-full h-auto leading-5 tracking-tighter md:leading-normal md:tracking-normal md:w-1/2">
                <motion.div className="h-auto text-justify md:pt-0 md:p-4 md:text-start text-md md:text-lg xl:text-xl">
                  <motion.p
                    variants={descriptionVariants}
                    initial="initial"
                    animate="animate"
                    transition={descriptionTransition}
                  >
                    {description1}
                  </motion.p>
                  <br />
                  <motion.p
                    variants={descriptionVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ ...descriptionTransition, delay: 0.7 }}
                  >
                    {description2}
                  </motion.p>
                </motion.div>

                <div className="flex items-end justify-start mt-5 md:justify-end">
                  {theme && <Signature strokeColor={signatureStrokeColor} />}
                </div>
              </div>
            </div>
            {/* -------------------------skills ------------------------ */}
            <motion.div className="flex flex-col items-center justify-center w-full mt-4 mb-8 text-white bg-black rounded-md dark:bg-gray-400/60 backdrop-blur-sm dark:text-black">
              <div className="flex items-center w-full pt-5 pl-5">
                <SectionHeading sectionTitle="My TechStack" />
              </div>
              <SkillsSphere />
            </motion.div>
            {/* ------------------------------------Knowledge/Interests ------------------------------------ */}
            <motion.div
              className="flex flex-col w-full gap-4 p-8 mb-8 text-white bg-black rounded-md md:mt-4 md:flex-row md:gap-4 dark:bg-gray-400/60 backdrop-blur-sm dark:text-black"
              ref={sectionRef} // Add the ref to the motion.div
              initial={{ opacity: 0, y: -20 }} // Initial animation values
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }} // Animation values based on the inView status
              transition={{ duration: 0.7, delay: 0.5 }} // Animation duration
            >
              <div className="flex flex-col w-full h-full gap-2 md:gap-3 md:w-1/2">
                <div>
                  <SectionHeading sectionTitle="Interests" />
                </div>
                {Interests.map((e, i) => (
                  <DetailsContainer key={i} label={e} type="bullet" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
