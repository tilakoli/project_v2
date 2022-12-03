import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const CustomCursor = ({ cursorVariant, isHidden }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const variants = {
    hidden: {},
    default: {
      zIndex: 999,
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    text: {
      zIndex: 999,
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      background: "white",
      mixBlendMode: "difference",
    },
  };

  return (
    <div>
      {isHidden ? (
        <></>
      ) : (
        <motion.div
          variants={variants}
          initial="hidden"
          animate={cursorVariant}
          className="fixed items-center justify-center hidden w-10 h-10 text-center transition-all duration-75 ease-linear border rounded-full pointer-events-none md:flex z-80 text-md content-none border-primary"
        >
          <motion.div className="relative w-1 h-1 bg-white rounded-full"></motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CustomCursor;
