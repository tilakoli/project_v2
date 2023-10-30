import React, { ReactNode } from "react";
import ParticlesEffect from "../Components/ParticlesEffect";
import Sidebar from "../Components/Sidebar";

type Prop = {
  children: ReactNode;
};

const Index = ({ children }: Prop) => {
  return (
    <div className="h-full">
      <div className=" -z-50">
        <ParticlesEffect />
      </div>
      <div className="flex ">
        <div className="w-full ">{children}</div>
      </div>
    </div>
  );
};

export default Index;
