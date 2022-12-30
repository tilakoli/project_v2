import React, { useState } from "react";
import Typical from "react-typical";
import SocialLinks from "../SocialLinks/SocialLinks";
import TextAnimation from "../TextAnimation/TextAnimation";
import { motion } from "framer-motion";

const Index = () => {
  const [showName, setShowName] = useState(true);

  return (
    <div className="dark:bg-black/30 bg-customWhite">
      {/* <CustomCursor cursorVariant={cursorVariant} isHidden={isCursorHidden} /> */}
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-[90%] flex flex-col items-center pl-[10%]  justify-center h-[calc(100vh-5rem)] md:h-screen text-2xl dark:text-white text-black  md:text-8xl md:pr-56 ">
          <div className="flex mb-2 font-bold gap-x-4">
            {/* initial == animate from  */}
            {/* animate == animate to  */}
            <motion.div
              initial={{ y: -250, opacity: 0, rotate: -120 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                type: "spring",
                stiffness: 120,
              }}
            >
              <TextAnimation label="Tilak" />
            </motion.div>
            <motion.div
              initial={{ y: -250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.3,
                duration: 0.7,
                type: "spring",
                stiffness: 120,
              }}
            >
              <TextAnimation label="Oli" />
            </motion.div>
          </div>
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
            I am a
            <span>
              <Typical
                steps={[
                  "Developer!",
                  4000,
                  "Designer!",
                  4000,
                  "Freelancer!",
                  4000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </span>
          </motion.div>
        </div>
        <div className=" flex justify-center md:justify-center items-center  md:w-[10%]">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Index;
