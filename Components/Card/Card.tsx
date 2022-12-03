import Link from "next/link";
import React from "react";

const Card = ({ src, Title, link, linkText, description }) => {
  return (
    <div className="w-full backdrop-blur-sm bg-black/50 rounded-md  h-[30rem] md:w-[28rem] cursor-pointer pb-3">
      <div className="bg-gray-300 w-full h-[60%]">
        {/* Image  */}
        <img
          src={src}
          className="object-fill w-full h-full"
          alt="Blogs card image"
        />
      </div>
      <div className=" w-full h-[40%] flex flex-col justify-around p-5 gap-2  md:gap-5">
        {/* text  */}
        <div className="text-2xl md:text-3xl text-white/50">{Title}</div>
        <div className="text-white/80">{description}</div>
        <div>
          <Link href="">
            <a
              href={link}
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
