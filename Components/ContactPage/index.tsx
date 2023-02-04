import React, { useState, useEffect, useRef } from "react";

import Button from "../Elements/button";
import CustomCursor from "../CustomCursor/CustomCursor";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "next-themes";
import { ContactBlocksData } from "../../utils/PersonalData";
import { ContactBlockTypes } from "./types";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  // export const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const toastTheme = theme === "dark" ? "light" : "dark";
  const [cursorVariant, setCursorVariant] = useState("default");
  const onMouseEnter = () => setCursorVariant("negative");
  const onMouseLeave = () => setCursorVariant("default");
  const form = useRef();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
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

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mmw3vbt",
        "template_yhf0vak",
        form.current,
        "CJeOO3qmEBCglKgID"
      )
      .then(
        () => {
          toast.success("Message sent successfully! 😄");
          setTimeout(() => {
            e.target.reset();
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send Message! Please try again... 😥");
        }
      );
  };

  const RenderContactBlocks = ({
    Icon,
    description,
    title,
    key,
  }: ContactBlockTypes) => {
    return (
      <>
        <div
          className="flex flex-col items-center justify-center w-full h-full gap-5 p-3 md:border-r md:w-1/3"
          key={key}
        >
          <div className="text-2xl md:text-4xl">{Icon}</div>
          <p className="md:text-2xl">{description}</p>
          <span className="text-xl">{title}</span>
        </div>
      </>
    );
  };

  return (
    <div className="z-50 flex flex-col items-center justify-center h-auto min-w-full pb-4 text-black md:pb-0 md:h-screen bg-customWhite dark:bg-primaryBlack/50 dark:text-white ">
      <CustomCursor variants={variants} animationVariants={cursorVariant} />
      <ToastContainer
        autoClose={4000}
        closeOnClick
        draggable
        hideProgressBar={true}
        theme={toastTheme}
      />

      <div className="flex flex-col items-center justify-center gap-2 mt-12 text-3xl font-bold h-28">
        Contact
        <div className="w-full border border-customBlue"></div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center justify-center gap-5 p-5 rounded-lg md:gap-20 w-[90%]
        md:w-2/3 backdrop-blur-sm bg-black/50 backdropFilter h-96"
      >
        <div className="flex flex-col items-center justify-center w-full gap-5 md:flex-row">
          <input
            required
            name={"name"}
            type={"text"}
            className={`w-full p-4 bg-transparent border-b outline-none
            focus:border-b-0 focus:border-l focus:duration-100 focus:transition-all  md:w-1/2`}
            placeholder={"Full Name"}
          />

          <input
            required
            name={"email"}
            type={"email"}
            className={`w-full p-4 bg-transparent border-b outline-none
            focus:border-b-0 focus:border-l focus:duration-100 focus:transition-all  md:w-1/2`}
            placeholder={"Email"}
          />
        </div>

        <input
          required
          name="message"
          type="textarea"
          className="w-full p-4 bg-transparent border-b outline-none h-96 focus:border-b-0 focus:border-l focus:duration-100 focus:transition-all md:w-full"
          placeholder="Your Message"
        />
        <Button value="send" label=" Send Message" buttonType="submit" />
      </form>

      <div
        className="flex flex-col w-[90%] h-auto p-5 mt-12 rounded-lg md:p-0 backdrop-blur-sm bg-black/50
         md:w-2/3 md:flex-row"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {ContactBlocksData.map((elem, index) => {
          return (
            <RenderContactBlocks
              key={index}
              Icon={elem.Icon}
              description={elem.description}
              title={elem.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
