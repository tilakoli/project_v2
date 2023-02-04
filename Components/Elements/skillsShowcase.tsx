import React from "react";

type Props = {
  data: {
    label: string;
    value: string;
  }[];
};
const SkillsShowcase = ({ data }: Props) => {
  return (
    <div className="flex flex-col w-full h-full gap-2 text-white md:w-1/2 md:gap-3">
      {data.map((elem, index) => {
        return (
          <div className="flex flex-col gap-2 md:gap-3 " key={index}>
            <div className="flex gap-2 text-lg md:text-xl">
              <div className="text-gray-300">{elem.label}</div>
              <div>{elem.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsShowcase;
