import React from "react";
// import { ScatterBoxLoader } from "react-awesome-loaders";

const Loader = () => {
  return (
    <div
      className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen gap-5 bg-black"
      style={{ zIndex: 9999999999 }}
    >
      Loader
      {/* <ScatterBoxLoader primaryColor={"#999696"} background={"#999696"} />
       */}
    </div>
  );
};

export default Loader;
