import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReactTooltip from "react-tooltip";
import { NavigationData } from "./navigationData";

const MainSidebar = ({ themeToggleButton }) => {
  return (
    <>
      <div className="hidden bg-gray-300 backdrop-blur-sm dark:bg-black/50 h-[100vh] fixed transition-all duration-700 md:flex-col lg:flex text-creamyWhite md:w-56 ">
        <div className="flex items-center justify-center border-b-8 dark:border-white border-black  h-[17%] ">
          Top
        </div>
        <div className="flex flex-col items-center justify-between text-[2rem] h-3/5">
          <div className="h-full">
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {NavigationData.map((elem) => {
                return (
                  <>
                    {" "}
                    <div
                      data-tip
                      data-for={elem.datafor}
                      key={elem.Name}
                      className="flex cursor-pointer text-dark dark:text-white justify-evenly hover:text-secondary hover:animate-bounce"
                    >
                      <Link href={elem.link}>
                        <a>{elem.icon}</a>
                      </Link>
                    </div>
                    <ReactTooltip id={elem.datafor} place="top" effect="solid">
                      {elem.Name}
                    </ReactTooltip>
                  </>
                );
              })}
            </div>

            <div></div>
          </div>
        </div>
        <div className="flex items-center justify-center border-t-8 border-black dark:border-white h-[17%]">
          {themeToggleButton()}
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
