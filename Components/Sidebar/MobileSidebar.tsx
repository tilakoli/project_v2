import React from "react";
import Link from "next/link";
import { NavigationData } from "./navigationData";

const MobileSidebar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-40 w-screen h-full transition-all duration-500 ease-in-out dark:bg-black bg-customWhite dark:text-white md:hidden ">
        <div className="flex flex-col items-center justify-between text-[2rem] h-full pb-5">
          <div className="flex flex-col items-start justify-center h-full gap-5 text-left ">
            {NavigationData.map((elem) => {
              return (
                <div
                  key={elem.Name}
                  className="flex items-center gap-5 cursor-pointer justify-evenly"
                >
                  <Link href={elem.link}>
                    <a className="flex items-center gap-5 text-3xl">
                      {elem.icon} {elem.Name}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
