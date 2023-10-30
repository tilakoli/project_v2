import React from "react";
import { motion } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";
import { ProgressBar } from "../Progressbar";

type Props = {
  label: string;
  key: number;
  value?: string;
  type?: "details" | "bullet" | "skills";
};

const DetailsContainer = ({ label, key, value, type = "details" }: Props) => {
  switch (type) {
    case "details":
      return (
        <motion.div className="flex flex-col gap-2 md:gap-3" key={key}>
          <div className="flex gap-2 text-lg md:text-xl">
            <div className="">{label}:</div>
            <div>{value}</div>
          </div>
        </motion.div>
      );
    case "bullet":
      return (
        <motion.div className="flex flex-col h-full justify-evenly" key={key}>
          <div className="flex items-center gap-2 text-lg capitalize md:text-xl">
            <div className="">
              <MdArrowForwardIos />
            </div>
            <div>{label}</div>
          </div>
        </motion.div>
      );
    case "skills":
      return (
        <motion.div className="flex flex-col gap-2 md:gap-3" key={key}>
          <div className="flex items-center justify-start w-full gap-8 mb-3 text-lg md:text-xl">
            <div className="flex items-center ">{label}:</div>
            <div className="flex items-center justify-start w-1/2">
              <ProgressBar width={value} />
            </div>
          </div>
        </motion.div>
      );
    default:
      return null;
  }
};

export default DetailsContainer;
