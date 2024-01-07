import React, { useState, useEffect } from "react";
import ShowCaseNameAnimation from "../Homepage/ShowCaseNameAnimation";
import Section from "../UpdatedElements/Section";
import CustomCursor from "../CustomCursor/CustomCursor";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";
import HomePageContent from "../NewLayoutComponents/HomePageContent";
import AboutPageContent from "../NewLayoutComponents/AboutPageContent";
import { cards } from "../../utils/PersonalData";
import { Card } from "../UpdatedElements/Card";
import MagneticWrapper from "../MagneticWrapper/MagneticWrapper";

const LandingPage = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    if (document === undefined) return;
    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    function raf(time) {
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const variants = {
    default: { x: mousePosition.x - 16, y: mousePosition.y - 16 },
    negative: {
      height: 150,
      width: 150,
      backgroundColor: "white",
      mixBlendMode: "difference",
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
    },
  };

  const handleMouseEnter = () => setCursorVariant("negative");
  const handleMouseLeave = () => setCursorVariant("default");


  return (
    <div className=" bg-no-repeat bg-cover h-auto"
    >
        <div className="hidden md:block">
        <CustomCursor variants={variants} animationVariants={cursorVariant} />
      </div>
        <HomePageContent
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

      <div className="h-screen w-full flex items-center justify-evenly border-4 border-red-500">
       One
       </div> 

       
      {/* <Section>
        <AboutPageContent
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          theme={theme}
        />
      </Section> */}
      
      {/* <Section>
        <div
         data-scroll data-scroll-speed="0.3"
          id="slider"
          className=" relative flex flex-col md:flex-row items-center px-2 md:px-0 justify-center w-[90%] h-screen gap-10 m-auto mt-44"
        >
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </Section> */}


      {/* <Section>
        <div className="flex justify-center w-full h-screen">
          <div className="w-auto h-96 ">
            <h1 className="w-full h-full text-5xl text-white">
              Fourth section
              <MagneticWrapper />
            </h1>
          </div>
        </div>
      </Section> */}
    </div>
  );
};

export default LandingPage;
