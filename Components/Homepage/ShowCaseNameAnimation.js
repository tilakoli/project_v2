import React from "react";
import { motion } from "framer-motion";
import TextAnimation from "../TextAnimation/TextAnimation";

const ShowCaseNameAnimation = ({
  label,
  animationDelay,
  animationDuration,
}) => {
  return (
    <div className="flex">
      {/* initial == animate from  */}
      {/* animate == animate to  */}
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
        <TextAnimation label={label} />
      </motion.div>
    </div>
  );
};

export default ShowCaseNameAnimation;
