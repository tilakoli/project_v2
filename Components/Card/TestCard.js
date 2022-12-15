import React from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Link from "next/link";

const TestCard = () => {
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
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="flex items-center justify-center w-[400px] min-h-[500px] bg-black/50 backdrop-blur-sm rounded-[30px] border-[1px] text-white border-white px-[40px] pb-[24px] cursor-grab relative"
      >
        {/* <div className="mb-6">
          <img src="/vercel.svg" alt="" />
        </div> */}
        <motion.h1
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className="absolute left-0 flex items-center justify-center w-full text-5xl font-extrabold text-blue-800 top-5"
        >
          Fly
          <span className="text-red-800">Nepa</span>
        </motion.h1>
        {/* -------------------card body ----------------- */}
        <div className="flex flex-col gap-5 p-4">
          <motion.p className="max-w-[300px] text-[#ffffff]">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </motion.p>
          <Link href="">
            <a
              href="#"
              className="capitalize max-w-fit md:text-xl hover:pl-5 hover:transition-all hover:duration-200 hover:border-r hover:pr-4 hover:border-b-0 "
            >
              Visit site
            </a>
          </Link>
          <div className="">
            <h2 className="mb-2 capitalize">technologies used</h2>
            <ul className="flex gap-x-[15px]">
              {logos.map((src, index) => {
                return (
                  <img
                    key={index}
                    src={src.src}
                    className="w-8 h-8 rounded-full cursor-pointer"
                  />
                );
              })}
            </ul>
          </div>
        </div>
        {/* card image */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className="absolute flex items-center justify-center w-[97%] mx-auto bottom-7 px-3 py-1  bg-white"
        >
          <img src="/flynepaLogo.png" alt="" draggable="false" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TestCard;
