import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import Card from "../Components/Card/Card";
import { blogsData } from "../utils/PersonalData";
import CustomCursor from "../Components/CustomCursor/CustomCursor";
import Badge from "../Components/Elements/Badge";

const Blogs = () => {
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
      height: 150,
      width: 150,
      backgroundColor: "white",
      mixBlendMode: "difference",
      x: mousePosition.x - 75, // subtract half of the div's height & width
      y: mousePosition.y - 75,
    },
  };

  const onMouseEnter = () => setCursorVariant("negative");
  const onMouseLeave = () => setCursorVariant("default");

  return (
    <Layout>
      <CustomCursor variants={variants} animationVariants={cursorVariant} />
      <div className="z-50 flex flex-col items-center justify-center h-full min-w-full pb-5 text-black md:mb-12 bg-customWhite dark:bg-primaryBlack dark:text-white">
        <div className="h-full w-full   md:w-[70%] flex items-start flex-col pt-24 px-5 md:px-0 gap-5">
          <Badge label="Blogs" Heading="My Blogs" />
          <div className="flex flex-col w-full md:grid gap-y-5 md:grid-flow-row md:grid-cols-2 md:gap-x-10">
            {blogsData.map((elem, index) => {
              return (
                <div key={index} className="flex flex-row gap-5">
                  <Card
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    src={elem.src}
                    Title={elem.Title}
                    link={elem.link}
                    linkText={elem.linkText}
                    description={elem.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
