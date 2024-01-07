import React from "react";
import { motion } from "framer-motion";
import TextAnimation from "../TextAnimation/TextAnimation";

type Props = {
  label: String;
  animationDelay: number;
  animationDuration: number;
  parallaxValue: number;
};

const ShowCaseNameAnimation = ({
  label,
  animationDelay,
  animationDuration,
  parallaxValue
}: Props) => {
  return (
    <div className="flex">
      <motion.div
        initial={{ y: -300, opacity: 0, rotate: -120 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{
          delay: animationDelay,
          duration: animationDuration,
          type: "spring",
          stiffness: 120,
        }}
      >
        <TextAnimation label={label} parallaxValue={parallaxValue} />
      </motion.div>
    </div>
  );
};

export default ShowCaseNameAnimation;
