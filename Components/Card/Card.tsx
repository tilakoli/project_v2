import Link from "next/link";
import React from "react";
import Image from "next/image";

const Card = ({
  src,
  Title,
  link,
  linkText,
  description,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div className="w-full backdrop-blur-sm bg-black/30   dark:bg-gray-400/80 dark:backdrop-blur-sm   dark:text-black rounded-md  h-[30rem] md:w-[28rem] cursor-pointer pb-3 gap-2 flex flex-col">
      <div className=" w-full h-[60%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          src={src}
          className="object-fill w-full h-full cursor-default "
          alt="Blogs card image"
        />
      </div>
      <div className=" w-full h-[40%] flex flex-col justify-around p-5 gap-2 md:gap-5">
        {/* text  */}
        <div className="text-2xl md:text-3xl cursor-text ">{Title}</div>
        <div className=" cursor-text">{description}</div>
        <div>
          <Link href={link}>
            <a
              target="_blank"
              className="uppercase md:text-sm hover:pl-5 hover:transition-all hover:duration-200 hover:border-r hover:pr-4"
            >
              {linkText}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
