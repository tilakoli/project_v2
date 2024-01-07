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
      <div className="bg-red-400 h-screen"></div>
    </>
  );
};

export default AboutPageContent;
