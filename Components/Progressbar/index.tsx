import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
  width: string;
};

const ProgressBar = ({ width }: Props) => {
  return (
    <motion.hr
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: `${width}`, opacity: 1 }}
      transition={{
        delay: 1,
        duration: 1,
        type: "spring",
        stiffness: 120,
      }}
      className={`w-full h-7 bg-white border-none`}
    ></motion.hr>
  );
};

export { ProgressBar };
