import React from "react";
import ParticlesEffect from "../Components/ParticlesEffect";
import Sidebar from "../Components/Sidebar";

const Index = ({ children }: any) => {
  return (
    <div className="h-full">
      {/* ---------------background particles effect------------ */}
      <div className=" -z-50">
        <ParticlesEffect />
      </div>

      {/* -----------main body --------- */}
      <div className="flex flex-col md:flex-row">
        <div>
          <Sidebar />
        </div>

        <div className="w-full lg:pl-36">{children}</div>
      </div>
    </div>
  );
};

export default Index;
