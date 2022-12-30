import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-end h-full gap-5 text-2xl md:pr-8 md:flex-col pb-14">
      <motion.div
        className="hidden border border-black md:block dark:border-customWhite"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 250, opacity: 1 }}
        transition={{
          delay: 4.2,
          duration: 0.9,
          type: "tween",
        }}
      ></motion.div>

      <div className="border border-black w-14 md:hidden dark:border-customWhite"></div>

      <motion.div
        className="hover:cursor-pointer hover:text-secondary"
        initial={{ x: 15, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 3.9,
          duration: 0.7,
          type: "spring",
          stiffness: 120,
        }}
      >
        <Link href="https://facebook.com">
          <a target="_blank">
            <ImFacebook className="text-black dark:text-customWhite" />
          </a>
        </Link>
      </motion.div>

      <motion.div
        className="hover:cursor-pointer hover:text-secondary"
        initial={{ x: 15, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 3.6,
          duration: 0.7,
          type: "spring",
          stiffness: 120,
        }}
      >
        <Link href="https://instagram.com">
          <a target="_blank">
            <BsInstagram className="text-black dark:text-customWhite" />
          </a>
        </Link>
      </motion.div>

      <motion.div
        className="hover:cursor-pointer hover:text-secondary"
        initial={{ x: 15, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 3.3,
          duration: 0.7,
          type: "spring",
          stiffness: 120,
        }}
      >
        <Link href="https://linkedin.com">
          <a target="_blank">
            <FiLinkedin className="text-black dark:text-customWhite" />
          </a>
        </Link>
      </motion.div>

      <motion.div
        className="hover:cursor-pointer hover:text-secondary"
        initial={{ x: 15, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 3,
          duration: 0.7,
          type: "spring",
          stiffness: 120,
        }}
      >
        <Link href="https://twitter.com">
          <a target="_blank">
            <BsTwitter className="text-black dark:text-customWhite" />
          </a>
        </Link>
      </motion.div>

      <div className="border border-black w-14 md:hidden dark:border-customWhite"></div>
    </div>
  );
};

export default SocialLinks;
