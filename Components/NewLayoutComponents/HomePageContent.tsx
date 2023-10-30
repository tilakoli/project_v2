import React from "react";
import ThemeToggler from "../UpdatedElements/ThemeToggler";
import {
  FirstNameNameAnimationConfig,
  LastNameAnimationConfig,
} from "../../utils/PersonalData";
import TypicalAnimation from "../Homepage/TypicalAnimation";
const HomePageContent = ({
  onMouseEnter,
  onMouseLeave,
  renderNameAnimation,
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-[100vh]">
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <ThemeToggler />
          <div className="flex text-3xl font-bold gap-x-2 md:gap-x-4 md:text-8xl">
            <div className="flex " data-scroll data-scroll-speed="0.3">
              {renderNameAnimation(FirstNameNameAnimationConfig)}
            </div>
            <div className="flex" data-scroll data-scroll-speed="0.7">
              {renderNameAnimation(LastNameAnimationConfig)}
            </div>
          </div>
        </div>
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <TypicalAnimation />
        </div>
      </div>
    </>
  );
};

export default HomePageContent;
