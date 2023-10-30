import React from "react";

const Section = ({ children }) => {
  return (
    <div className="w-full h-full bg-transparent" data-scroll-section>
      {children}
    </div>
  );
};

export default Section;
