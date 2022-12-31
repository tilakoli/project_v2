import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const CustomCursor = ({ variants, animationVariants }) => {
  return (
    <motion.div
      animate={animationVariants ? animationVariants : "default"}
      variants={variants}
      className="border-2 border-black dark:border-white h-[32px] w-[32px] rounded-full fixed top-0 left-0 pointer-events-none  duration-75"
    />
  );
};

export default CustomCursor;
