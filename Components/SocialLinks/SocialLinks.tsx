import React, { MouseEventHandler } from "react";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

type Props = {
  onMouseEnter: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
};

const SocialLinks = ({ onMouseEnter, onMouseLeave }: Props) => {
  return (
    <div className="flex items-center justify-end h-full gap-5 text-2xl md:pr-8 md:flex-col pb-14">
      <motion.div
        className="hidden border border-black md:block dark:border-customWhite"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 250, opacity: 1 }}
        transition={{
          delay: 4.2,
          duration: 0.9,
          type: "spring",
          stiffness: 120,
        }}
      ></motion.div>

      <div className="border border-black w-14 md:hidden dark:border-customWhite"></div>

      <div
        className="flex items-center justify-end gap-5 h-min md:flex-col "
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <motion.div
          className="hover:cursor-pointer "
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 3.9,
            duration: 0.7,
            type: "spring",
            stiffness: 120,
          }}
        >
          <Link href="https://github.com/tilakoli">
            <a target="_blank">
              <AiFillGithub className="text-black dark:text-white" />
            </a>
          </Link>
        </motion.div>

        <motion.div
          className="hover:cursor-pointer "
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 3.3,
            duration: 0.7,
            type: "spring",
            stiffness: 120,
          }}
        >
          <Link href="https://www.linkedin.com/in/tilakoli/">
            <a target="_blank">
              <FiLinkedin className="text-black dark:text-white" />
            </a>
          </Link>
        </motion.div>
        {/* <motion.div
          className="hover:cursor-pointer "
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 3,
            duration: 0.7,
            type: "spring",
            stiffness: 120,
          }}
        >
          <Link href="https://www.instagram.com/tilakoli64/">
            <a target="_blank">
              <BsInstagram className="text-black dark:text-white" />
            </a>
          </Link>
        </motion.div> */}
        <motion.div
          className="hover:cursor-pointer "
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 3.6,
            duration: 0.7,
            type: "spring",
            stiffness: 120,
          }}
        >
          <Link href="/ContactMe">
            <a target="_blank">
              <FiMail className="text-black dark:text-white" />
            </a>
          </Link>
        </motion.div>
      </div>

      <div className="border border-black w-14 md:hidden dark:border-customWhite"></div>
    </div>
  );
};

export default SocialLinks;
