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
  const infinityVector = (
    <svg
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      fill="#fff"
      viewBox="0 0 60 60"
      style={{ enableBackground: "new 0 0 10 10" }}
      xmlSpace="preserve"
    >
      <path
        d="M43.594,12.5c-9.046,0-16.406,7.851-16.406,17.5c0,6.341-4.836,11.5-10.781,11.5S5.625,36.341,5.625,30
	s4.836-11.5,10.781-11.5c2.146,0,4.218,0.67,5.992,1.938c0.593,0.425,1.147,0.911,1.645,1.445c1.061,1.136,2.914,1.14,3.977,0.009
	c1.099-1.167,1.103-3.07,0.009-4.243c-0.76-0.813-1.601-1.552-2.499-2.194c-2.704-1.933-5.858-2.954-9.124-2.954
	C7.36,12.5,0,20.351,0,30s7.36,17.5,16.406,17.5S32.812,39.649,32.812,30c0-6.341,4.836-11.5,10.781-11.5S54.375,23.659,54.375,30
	s-4.836,11.5-10.781,11.5c-2.879,0-5.586-1.195-7.622-3.366c-1.062-1.133-2.915-1.133-3.978,0c-0.531,0.567-0.823,1.32-0.823,2.121
	c0,0.802,0.293,1.556,0.824,2.121c3.098,3.305,7.218,5.124,11.599,5.124C52.64,47.5,60,39.649,60,30S52.64,12.5,43.594,12.5z"
      />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
  return (
    <div className="z-50 flex flex-col items-center justify-center h-screen min-w-full text-black bg-customWhite dark:bg-black/30 dark:text-white">
      <CustomCursor variants={variants} animationVariants={cursorVariant} />
      <div className="flex flex-col items-center justify-center gap-2 mt-12 text-3xl font-bold h-28">
        Contact {/*{infinityVector} */}
        <div className="w-full border border-customBlue"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 p-5 rounded-lg md:gap-20 md:w-2/3 backdrop-blur-sm bg-black/50 backdropFilter h-96">
        <div className="flex flex-col items-center justify-center w-full gap-5 md:flex-row">
          <input
            required
            type="text"
            className="w-48 p-4 bg-transparent border-b outline-none focus:border-b-0 focus:border-l focus:duration-100 focus:transition-all md:w-1/2"
            placeholder="FullName"
            onChange={(e) => setFullName(e.target.value)}
          />{" "}
          <input
            required
            type="email"
            className="w-48 p-4 bg-transparent border-b outline-none focus:border-b-0 focus:border-l focus:duration-100 focus:transition-all md:w-1/2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          required
          type="textarea"
          className="w-48 p-4 bg-transparent border-b outline-none  h-96 focus:border-b-0 focus:border-l focus:duration-100 focus:transition-all md:w-full"
          placeholder="Your Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Button onClick={submit} />
        </div>
      </div>
      <div
        className="flex flex-col h-auto p-5 mt-12 rounded-lg md:p-0 backdrop-blur-sm bg-black/50 md:w-2/3 md:flex-row"
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
