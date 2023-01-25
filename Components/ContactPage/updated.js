import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import Button from "../Elements/button";
import CustomCursor from "../CustomCursor/CustomCursor";
const Index = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16, // subtract half of the div's height & width
      y: mousePosition.y - 16,
    },
    negative: {
      height: 150,
      width: 150,
      backgroundColor: "white",
      mixBlendMode: "difference",
      x: mousePosition.x - 75, // subtract half of the div's height & width
      y: mousePosition.y - 75,
    },
  };

  const onMouseEnter = () => setCursorVariant("negative");
  const onMouseLeave = () => setCursorVariant("default");

  const submit = () => {
    window.alert("Because his field of expertise was outstanding.");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <div className="z-50 flex flex-col items-center justify-center h-screen min-w-full text-black mt-14 md:mt-0 bg-customWhite dark:bg-red-500 dark:text-white dark:backdrop-blur-sm">
      <div className="hidden md:block">
        <CustomCursor variants={variants} animationVariants={cursorVariant} />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-12 text-3xl font-bold h-28">
        Contact {/*{infinityVector} */}
        <div className="w-full border border-customBlue"></div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-5 p-5 rounded-lg bg-black/50 md:gap-20 md:w-2/3 backdrop-blur-sm backdropFilter h-96">
        <div className="flex flex-col items-center justify-center w-full gap-5 md:flex-row">
          <input
            required
            type="text"
            className="w-full p-4 bg-transparent border-b outline-none focus:border-b-0 focus:border-l focus:duration-100 focus:transition-all md:w-1/2"
            placeholder="FullName"
            onChange={(e) => setFullName(e.target.value)}
          />{" "}
          <input
            required
            type="email"
            className="w-full p-4 bg-transparent border-b outline-none focus:border-b-0 focus:border-l focus:duration-100 focus:transition-all md:w-1/2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          required
          type="textarea"
          className="w-full p-4 bg-transparent border-b outline-none h-96 focus:border-b-0 focus:border-l focus:duration-100 focus:transition-all "
          placeholder="Your Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Button onClick={submit} />
        </div>
      </div>
      <div
        className="flex flex-col w-full h-auto p-5 mt-12 rounded-lg md:p-0 backdrop-blur-sm bg-black/50 md:w-2/3 md:flex-row"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-3 md:border-r md:w-1/3">
          <div className="text-2xl md:text-4xl">
            <AiOutlineMail />
          </div>
          <p className="md:text-2xl">tilak.81oli@gmail.com</p>
          <span className="text-xl">Email</span>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-3 md:border-r md:w-1/3">
          <div className="text-2xl md:text-4xl">
            <GoLocation />
          </div>
          <p className="md:text-2xl">123 Lorem Ipsum, Mars</p>
          <span className="text-xl">Address</span>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-3 md:w-1/3">
          <div className="text-2xl md:text-4xl">
            <FiPhoneCall />
          </div>
          <p className="md:text-2xl">(+977) 123 456 7890</p>
          <span className="text-xl">Phone</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
