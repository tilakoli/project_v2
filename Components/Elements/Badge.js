import React from "react";

const Badge = ({ label, Heading }) => {
  return (
    <>
      <div className="p-2 text-black rounded-sm bg-black/50 dark:text-white backdrop-blur-sm dark:bg-customWhite">
        <p>{label}</p>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl font-bold md:text-5xl">{Heading}</h2>
      </div>
    </>
  );
};

export default Badge;
