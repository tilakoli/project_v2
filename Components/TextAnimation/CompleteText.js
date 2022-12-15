import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

// ================ should be like this but throwing error useAnimationControls is not a function =======
const Textspan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState();

  const textBand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        !isPlaying && textBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

export default Textspan;
