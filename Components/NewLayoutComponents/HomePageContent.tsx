import React from "react";
import ThemeToggler from "../UpdatedElements/ThemeToggler";
import {
  FirstNameNameAnimationConfig,
  LastNameAnimationConfig,
} from "../../utils/PersonalData";

import TypicalAnimation from "../NameAnimation/TypicalAnimation";
import ShowCaseNameAnimation from "../NameAnimation/ShowCaseNameAnimation";


const HomePageContent = ({
  onMouseEnter,
  onMouseLeave,
}) => {

  const renderNameAnimation = (config) => {
    return config.map((letter, index) => (
      <div key={index} className="pr-2">
        <ShowCaseNameAnimation
          parallaxValue={letter.parallaxValue}
          label={letter.lable}
          animationDelay={letter.animationDelay}
          animationDuration={letter.animationDuration}
        />
      </div>
    ));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen ">
        
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="font-primary">
          <div className="flex text-3xl font-bold gap-x-2 md:gap-x-4 md:text-8xl">
            <div className="flex">
              {renderNameAnimation(FirstNameNameAnimationConfig)}
            </div>
            <div className="flex" >
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
