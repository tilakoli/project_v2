import React, { useState, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import ShowCaseNameAnimation from "../Homepage/ShowCaseNameAnimation";
import Section from "../UpdatedElements/Section";
import CustomCursor from "../CustomCursor/CustomCursor";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "next-themes";
import { useInView } from "react-intersection-observer";
import Example from "../HorizontalScrollCarousel/HorizontalScrollCarousel";
import HomePageContent from "../NewLayoutComponents/HomePageContent";
import AboutPageContent from "../NewLayoutComponents/AboutPageContent";
import Lenis from "@studio-freight/lenis";
import spaceShipAnimation from "../../utils/spaceshipAnimation.json";
import spaceship from "../../utils/spaceship.json";
import HorizontalScrollWrapper from "../HorizontalScrollCarousel/HorizontalScrollCarousel";
import { cards } from "../../utils/PersonalData";
import { Card } from "../UpdatedElements/Card";

const LandingPage = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const spaceShipRef = React.useRef<LottieRefCurrentProps>(null);
  const lenisConfig = {
    smoothWheel: true,
    duration: 0.7, // Adjust this value to control scroll speed
    // Other configuration options
  };

  useEffect(() => {
    if (document === undefined) return;
    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    const lenis = new Lenis(lenisConfig);
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const [sectionRef, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
  });

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

  const renderNameAnimation = (config) => {
    return config.map((letter, index) => (
      <div key={index}>
        <ShowCaseNameAnimation
          label={letter.lable}
          animationDelay={letter.animationDelay}
          animationDuration={letter.animationDuration}
        />
      </div>
    ));
  };

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 45],
      },
    ],
  };

  return (
    <div
      className="h-auto bg-no-repeat bg-cover dark:bg-transparent bg-customWhite"
      id="main_container"
      // data-scroll
    >
      <div className="hidden md:block">
        <CustomCursor variants={variants} animationVariants={cursorVariant} />
      </div>
      <Section>
        <HomePageContent
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          renderNameAnimation={renderNameAnimation}
        />
      </Section>

      <Section>
        <AboutPageContent
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          theme={theme}
        />
      </Section>
      <br />
      <br />
      <br />
      <Section>
        <div
          id="slider"
          className=" relative flex flex-col md:flex-row items-center px-2 md:px-0 justify-center w-[90%] h-screen gap-10 m-auto  mt-44"
        >
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </Section>
      {/* <Section>
        <HorizontalScrollWrapper cardData={cards} />
      </Section> */}

      <Section>
        <div className="flex justify-center w-full h-screen">
          <div className="w-auto h-96 ">
            <h1 className="w-full h-full text-5xl text-white">
              Fourth section
            </h1>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LandingPage;
