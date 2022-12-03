import React, { useState } from "react";
import Link from "next/link";
import SocialLinks from "../SocialLinks/SocialLinks";
import { NavigationData } from "./navigationData";

const MobileSidebar = () => {
  return (
    <>
      <div className="h-[calc(100vh-2.8rem)] w-screen bg-gray-600  fixed top-0 left-0">
        <div className="flex flex-col items-center justify-between text-[2rem] h-full">
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
                  <div></div>
                </div>
              );
            })}
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
