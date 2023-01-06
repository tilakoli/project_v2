import React from "react";
import { motion } from "framer-motion";
import TypeWriter from 'typewriter-effect'

const TypicalAnimation = () => {
  return (
    <div className="">
      <motion.div
        className="flex items-center justify-center md:text-4xl gap-x-2 cursor-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 0.9,
          type: "tween",
        }}
      >
        I am a <span className="capitalize"> 
        <TypeWriter 
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={
         ((typewriter) => {
          typewriter.typeString('Developer!').pauseFor(2000).deleteAll().pauseFor(2000).typeString('Technophile!').pauseFor(2000).deleteAll().pauseFor(2000).typeString('Astrophile!').pauseFor(2000).deleteAll().pauseFor(2000).typeString('codaholic!').pauseFor(2000).deleteAll().start()
         })
        }/>
        </span>
        {/* I am an apostrophe -> just a symbol to remind you that theres more to see  */}
      </motion.div>
    </div>
  );
};

export default TypicalAnimation;
