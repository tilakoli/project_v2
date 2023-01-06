/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Link from "next/link";

const TestCard = (props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const logos = [
    {
      src: "/reactlogo.png",
    },
    {
      src: "/graphlogo.png",
    },
    {
      src: "/antdesignlogo.png",
    },
  ];

  return (
    <div style={{ perspective: 2000 }}>
      <div className="hidden md:block">
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className="flex items-center justify-center w-[300px] md:w-[340px] min-h-[400px] md:min-h-[450px] bg-black/40 backdrop-blur-sm rounded-[30px] border-[1px] text-white border-white px-[40px] pb-[24px] cursor-grab relative"
        >
          <motion.h1
            style={{ x, y, rotateX, rotateY, z: 100000 }}
            className="absolute left-0 flex items-center justify-center w-full text-3xl font-extrabold text-blue-800 uppercase md:text-5xl top-5"
          >
            {props.projectsData[0].projectFirstName}
            <span className="text-red-800">
              {props.projectsData[0].projectSecondName}
            </span>
          </motion.h1>
          {/* -------------------card body ----------------- */}
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100000 }}
            className="flex flex-col gap-5 p-4 text-black  dark:text-[#ffffff]"
          >
            <motion.p className="max-w-[300px] ">
              {props.projectsData[0].description}
            </motion.p>
            <Link href={props.projectsData[0]?.link}>
              <a
                target="_blank"
                className="capitalize max-w-fit md:text-xl hover:pl-5 hover:transition-all hover:duration-200 hover:border-r hover:pr-4 hover:border-b-0 "
              >
                Visit site
              </a>
            </Link>
            <div className="">
              <h2 className="mb-2 capitalize">technologies used</h2>
              <ul className="flex gap-x-[15px] mb-2">
                {logos.map((src, index) => {
                  return (
                    <img
                      alt="used technologies logo"
                      key={index}
                      src={src.src}
                      className="w-8 h-8 rounded-full cursor-pointer"
                    />
                  );
                })}
              </ul>
            </div>
          </motion.div>
          {/* card image */}
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100000 }}
            className="absolute flex items-center justify-center w-[97%] mx-auto bottom-7 px-3 py-1  bg-white"
          >
            <img
              src={props.projectsData[0].projectLogo}
              alt="logo"
              draggable="false"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="block md:hidden">
        <motion.div className="flex items-center justify-center w-[300px] md:w-[340px] min-h-[400px] md:min-h-[450px] bg-black/40 backdrop-blur-sm rounded-[30px] border-[1px] text-white border-white px-[40px] pb-[24px]  relative">
          <motion.h1 className="absolute left-0 flex items-center justify-center w-full text-3xl font-extrabold text-blue-800 uppercase md:text-5xl top-5">
            {props.projectsData[0].projectFirstName}
            <span className="text-red-800">
              {props.projectsData[0].projectSecondName}
            </span>
          </motion.h1>
          {/* -------------------card body ----------------- */}
          <motion.div className="flex flex-col gap-5 p-4 text-black  dark:text-[#ffffff]">
            <motion.p className="max-w-[300px] ">
              {props.projectsData[0].description}
            </motion.p>
            <Link href={props.projectsData[0]?.link}>
              <a
                target="_blank"
                className="capitalize max-w-fit md:text-xl hover:pl-5 hover:transition-all hover:duration-200 hover:border-r hover:pr-4 hover:border-b-0 "
              >
                Visit site
              </a>
            </Link>
            <div className="">
              <h2 className="mb-2 capitalize">technologies used</h2>
              <ul className="flex gap-x-[15px] mb-2">
                {logos.map((src, index) => {
                  return (
                    <img
                      alt="used technologies logo"
                      key={index}
                      src={src.src}
                      className="w-8 h-8 rounded-full cursor-pointer"
                    />
                  );
                })}
              </ul>
            </div>
          </motion.div>
          {/* card image */}
          <motion.div className="absolute flex items-center justify-center w-[97%] mx-auto bottom-4 px-3 py-1  bg-white">
            <img
              src={props.projectsData[0].projectLogo}
              alt="logo"
              draggable="false"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestCard;
