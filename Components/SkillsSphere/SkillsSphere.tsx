import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";

export default function Home({ radius }) {
  useEffect(() => {
    const container = Array.from(document.querySelectorAll(".tagcloud")); // had to use Array.from  because of type error on the container
    const texts = [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "FramerMotion",
      "ReactJS",
      "NextJS",
      "Redux",
      "JestJs",
      "TypeScript",
      "Googling",
      "Git",
      "Linux",
      "Docker",
      "TailwindCSS",
      "Figma",
      "Bootstrap",
      "MaterialUI",
    ];

    const options = {
      radius: radius ? radius : 100,
      //   window.innerWidth > 1440 ? 500 : window.innerWidth > 713 ? 400 : 150,
      maxSpeed: "fast",
      initSpeed: "medium",
      keep: false,
    } as any;

    TagCloud(container, texts, options);
  }, []);
  return (
    <>
      <div className="text-black cursor-pointer text-sphere dark:text-white">
        <span className="tagcloud"></span>
      </div>
    </>
  );
}
