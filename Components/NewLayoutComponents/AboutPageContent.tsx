import React from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import {
  Interests,
  description1,
  description2,
} from "../../utils/PersonalData";
import Signature from "../Elements/Signature";
import SkillsSphere from "../SkillsSphere/SkillsSphere";
import DetailsContainer from "../Elements/DetailsContainer";

const AboutPageContent = ({ onMouseEnter, onMouseLeave, theme }) => {
  const signatureStrokeColor = theme === "light" ? "black" : "white";
  const descriptionTransition = { duration: 1 };

  const descriptionVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const SectionHeading = ({ sectionTitle }) => (
    <h1 className="pb-2 text-2xl font-bold underline md:text-4xl">
      {sectionTitle}
    </h1>
  );

  return (
    <>
      <div className=" flex flex-col items-center justify-center h-[100vh] pt-28 text-black  dark:text-white md:mb-32 mb-[110vh]">
        <div className="flex flex-col items-start w-full h-full rounded-md md:gap-24 md:px-10">
          <div className="absolute flex flex-col w-full h-auto gap-8 md:flex-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="top-0 w-full md:justify-center md:flex aboslute md:w-1/2">
              <img
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                src="/profile4.jpg"
                alt="User profile picture"
                className="object-cover w-[500px] h-[40vh] bg-no-repeat bg-contain  md:h-[450px] sticky top-[20%] "
              />
            </div>

            {/* Scrollable section  */}
            <div className="flex flex-col w-full h-auto gap-8 p-8 overflow-y-auto leading-5 tracking-tighter md:p-0 md:pr-24 md:leading-normal md:tracking-normal md:w-1/2">
              <motion.div className="h-auto text-justify md:text-start text-md md:text-lg xl:text-xl">
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

              <div className="flex items-center justify-center w-full h-96 dark:bg-primaryBlack/50">
                <SkillsSphere radius={200} />
              </div>

              <div className="flex flex-col w-full p-4 bg-gray-400/50 h-96">
                <div>
                  <SectionHeading sectionTitle="Interests" />
                </div>
                {Interests.map((e, i) => (
                  <DetailsContainer key={i} label={e} type="bullet" />
                ))}
              </div>
            </div>
          </div>
          {/* -------------------------skills ------------------------ */}
        </div>
      </div>
    </>
  );
};

export default AboutPageContent;
{
  /* <div className="flex flex-col w-full h-full gap-8 md:flex-row">
            <div className="flex items-center justify-center w-full h-96 dark:bg-primaryBlack/50">
              <SkillsSphere radius={200} />
            </div>

          
          </div> */
}

{
  /* <motion.div className="h-auto text-justify bg-yellow-300 md:text-start text-md md:text-lg xl:text-xl">
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
              <div className="flex items-center justify-center w-full h-96 dark:bg-primaryBlack/50">
                <SkillsSphere radius={200} />
              </div>
              */
}
