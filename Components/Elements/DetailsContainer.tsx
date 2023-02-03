import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

type Props = {
  label: string;
  key: number;
  value?: string;
  type?: "details" | "bullet" | "skills";
};

const DetailsContainer = ({ label, key, value, type = "details" }: Props) => {
  if (type === "details") {
    return (
      <div className="flex flex-col gap-2 md:gap-3" key={key}>
        <div className="flex gap-2 text-lg md:text-xl">
          <div className="">{label}:</div>
          <div>{value}</div>
        </div>
      </div>
    );
  }
  if (type === "bullet") {
    return (
      <div className="flex flex-col gap-2 cursor-pointer md:gap-3" key={key}>
        <div className="flex items-center gap-2 text-lg capitalize md:text-xl">
          <div className="">
            <MdArrowForwardIos />
          </div>
          <div>{label}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-2 md:gap-3" key={key}>
        <div className="flex gap-2 mb-3 text-lg md:text-xl">
          <div className="flex items-center ">{label}:</div>
          <div className="flex items-center">
            <progress value={value} className="" />
          </div>
        </div>
      </div>
    );
  }
};

export default DetailsContainer;
