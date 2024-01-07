import React from "react";
import { motion } from "framer-motion";

const CustomCursor = ({ variants, animationVariants }) => {
  return (
    <motion.div
      transition={{type: 'spring', mass: 1, duration: 1000   }}
      animate={animationVariants ? animationVariants : "default"}
      variants={variants}
      style={{ zIndex: 999999999999 }}
      className={`
      fixed top-0 left-0 duration-75 h-[32px] w-[32px] ${
        animationVariants !== "negative"
          ? "border border-black dark:border-white"
          : "border-none"
      } rounded-full pointer-events-none `}
    ></motion.div>
  );
};

export default CustomCursor;
