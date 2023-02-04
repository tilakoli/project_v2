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
