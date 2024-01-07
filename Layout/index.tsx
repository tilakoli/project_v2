import React, { ReactNode } from "react";
import ParticlesEffect from "../Components/ParticlesEffect";

type Prop = {
  children: ReactNode;
};

const Index = ({ children }: Prop) => {
  return (
    <div className="h-full" 
    >
      <div className="-z-50 w-full h-full fixed top-0 left-0">
        <ParticlesEffect />
      </div>
      <div className="flex">
        <div className="w-full bg-transparent">{children}</div>
      </div>
    </div>
  );
};

export default Index;
