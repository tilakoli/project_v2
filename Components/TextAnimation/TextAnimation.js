import React from "react";
import Textspan from "./Textspan";
const TextAnimation = ({ label }) => {
  const sentence = label.split("");
  return (
    <div className="">
      {sentence.map((e, index) => {
        return <Textspan key={index}>{e} </Textspan>;
      })}
    </div>
  );
};

export default TextAnimation;
