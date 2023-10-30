import React from "react";
import Textspan from "./Textspan";

const TextAnimation = ({ label }) => {
  const sentence = label ? label.split("") : [];

  return (
    <div className="">
      {sentence.map((e: any, index: React.Key) => {
        return <Textspan key={index}>{e} </Textspan>;
      })}
    </div>
  );
};

export default TextAnimation;
