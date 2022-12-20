import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const Textspan = ({ children }) => {
  //   const controls = useAnimationControls();
  const textBand = () => {
    return {
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      color: ["#F8F991", "#fff", "#000000"],
    };
  };

  return (
    <motion.span
      whileHover={() => textBand()}
      className="inline-block cursor-pointer"
    >
      {children}
    </motion.span>
  );
};

export default Textspan;
