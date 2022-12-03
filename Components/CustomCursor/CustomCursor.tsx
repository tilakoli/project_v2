import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
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
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const variants = {
    hidden: {},
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      background: "white",
      // mixBlendMode: 'difference'
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="default"
      className="fixed items-center justify-center hidden w-10 h-10 text-center transition-all duration-75 ease-linear border rounded-full pointer-events-none md:flex z-80 text-md content-none border-primary"
    >
      <motion.div className="relative w-1 h-1 bg-white rounded-full"></motion.div>
    </motion.div>
  );
};

export default CustomCursor;
