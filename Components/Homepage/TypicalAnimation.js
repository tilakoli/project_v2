import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";

const TypicalAnimation = () => {
  return (
    <div className="">
      <motion.div
        className="flex items-center justify-center md:text-4xl gap-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 0.9,
          type: "tween",
        }}
      >
        {/* I am a Developer! 😀 */}I am Saisha`s Love😀!
        {/* <span>
          <Typical
            steps={["Developer!", 4000, "Designer!", 4000, "Freelancer!", 4000]}
            loop={Infinity}
            wrapper="p"
          />
        </span> */}
      </motion.div>
    </div>
  );
};

export default TypicalAnimation;
