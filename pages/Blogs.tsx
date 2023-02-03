import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import Card from "../Components/Card/Card";
import { blogsData } from "../utils/PersonalData";
import CustomCursor from "../Components/CustomCursor/CustomCursor";
import Badge from "../Components/Elements/Badge";

const Blogs = () => {
  return (
    <Layout>
      {/* //  the cursors animation effect is causing the background animation to glitch 
       in this page and seems to work fine in contact and work pages
      */}
      <div className="hidden md:block">
        {/* <CustomCursor variants={variants} animationVariants={"default"} /> */}
      </div>
      <div className="z-50 flex flex-col items-center justify-center h-full min-w-full pb-5 text-black md:mb-12 bg-customWhite dark:bg-primaryBlack/30 dark:text-white">
        <div className="h-full w-full   md:w-[70%] flex items-start flex-col pt-24 px-5 md:px-0 gap-5">
          <Badge label="Blogs" Heading="My Blogs" />
          <div className="flex flex-col w-full md:grid gap-y-16 md:grid-flow-row md:grid-cols-2 md:gap-x-10">
            {blogsData.map((elem, index) => {
              return (
                <div key={index} className="flex flex-row gap-5">
                  <Card
                    // onMouseEnter={onMouseEnter}
                    // onMouseLeave={onMouseLeave}
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
