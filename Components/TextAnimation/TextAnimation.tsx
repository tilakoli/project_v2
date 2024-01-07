import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion'


const TextAnimation = ({ label, parallaxValue }) => {
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
 
  const y = useTransform(scrollYProgress, [0, 1], [-parallaxValue, parallaxValue])
  const sentence = label ? label.split("") : [];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const textBand = (index:number) => {
    return {
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      color: index % 2 === 0 ? "#fff" : "#000", // alternate between white and black
    };
  };

  return (
    <div>
      {sentence.map((e: string, index: number) => {
        return (  
        <motion.span
          ref={ref}
          style={scrolled ? { y } : {}}
          key={index}
          whileHover={textBand(index)}
          transition={{
            ease: "easeInOut",
          }}
          className="inline-block cursor-default">
          {e} 
        </motion.span>
        )
      })}
    </div>
  );
}

export default TextAnimation