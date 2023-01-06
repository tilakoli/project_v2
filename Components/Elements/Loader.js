import React from "react";
import { motion } from "framer-motion";
import {
  XlviLoader,
  BoxesLoader,
  ScatterBoxLoader,
  CircleLoader,
} from "react-awesome-loaders";

const index = () => {
  const loaderVariant = {
    hidden: {
      backgroundColor: "#999696",
      width: "0px",
    },
    visible: {
      backgroundColor: "#999696",
      width: "50%",
      transition: {
        duration: 1.5,
      },
    },
  };
  return (
    <div
      className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen gap-5 bg-black"
      style={{ zIndex: 9999999999 }}
    >
      {/* <XlviLoader boxColors={["#C89B7B", "#F8F991", "#999696"]} /> */}
      {/* <BoxesLoader
        boxColor={"#A30015"}
        shadowColor={"#999696"}
        style={{ marginBottom: "20px" }}
        desktopSize={"128px"}
        mobileSize={"80px"}
      /> */}
      {/* <CircleLoader
        meshColor={"#C89B7B"}
        lightColor={"#F8F991"}
        duration={2}
        desktopSize={"90px"}
        mobileSize={"64px"}
      /> */}
      <ScatterBoxLoader primaryColor={"#999696"} background={"#999696"} />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img src="/background1.jpg" alt="Loader Image" className="w-56 h-56 " /> */}
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={loaderVariant}
        className="w-1 h-1 bg-primary"
      ></motion.div> */}
    </div>
  );
};

export default index;
