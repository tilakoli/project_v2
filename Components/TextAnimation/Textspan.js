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
      color: ["#fff", "#fff", "#000"], //upto 3 colors looks good
    };
  };

  return (
    <motion.span
      whileHover={() => textBand()}
      className="inline-block cursor-none"
    >
      {children}
    </motion.span>
  );
};

export default Textspan;
