import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavigationData } from "./navigationData";
import CustomCursor from "../CustomCursor/CustomCursor";

const MainSidebar = ({ themeToggleButton }) => {
  const [cursorVariant, setCursorVariant] = useState("default");
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
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 16, // subtract half of the div's height & width
      y: mousePosition.y - 16,
    },
    negative: {
      height: 100,
      width: 100,
      backgroundColor: "white",
      mixBlendMode: "difference",
      x: mousePosition.x - 50, // subtract half of the div's height & width
      y: mousePosition.y - 50,
    },
  };
  const onMouseEnter = () => setCursorVariant("negative");
  const onMouseLeave = () => setCursorVariant("default");
  return (
    <>
      <div className="hidden  bg-gray-300 dark:bg-black h-[100vh] fixed md:flex-col lg:flex text-creamyWhite md:w-56 ">
        <CustomCursor variants={variants} animationVariants={cursorVariant} />
        {/* eslint-disable-next-line @next/next/link-passhref */}
        <Link href="/">
          <div className="flex items-center justify-center border-b-8 dark:border-white border-black h-[17%] cursor-pointer text-xl font-bold ">
            <div
              className="w-min min-h-fit"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              imɒϱɒꓘ
            </div>
          </div>
        </Link>
        <div className="flex flex-col items-center justify-between text-[2rem] h-3/5">
          <div className="h-full">
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {NavigationData.map((elem) => {
                return (
                  <>
                    {" "}
                    <div
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      key={elem.Name}
                      className="flex cursor-pointer text-dark dark:text-white justify-evenly "
                    >
                      <Link href={elem.link}>
                        <a>{elem.icon}</a>
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex items-center justify-center border-t-8 border-black dark:border-white h-[17%]">
          <div
            className="w-min h-min"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {themeToggleButton()}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
