import React from "react";
import ParticlesEffect from "../Components/ParticlesEffect";
import Sidebar from "../Components/Sidebar";
import CustomCursor from "../Components/CustomCursor/CustomCursor";
const Index = ({ children }) => {
  return (
    <div>
      {/* ---------------background particles effect------------ */}
      <div className="-z-50">
        <ParticlesEffect />
      </div>

      {/* -----------main body --------- */}
      <div className="flex flex-col md:flex-row">
        <div>
          <Sidebar />
        </div>

        <div className="w-full h-full">{children}</div>
        <CustomCursor />
      </div>
    </div>
  );
};

export default Index;
