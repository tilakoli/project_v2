import React, { useState } from "react";
import Link from "next/link";
import { Spiral as Hamburger } from "hamburger-react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { RiProfileFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { HiMail } from "react-icons/hi";
import ReactTooltip from "react-tooltip";
import MobileSidebar from "./MobileSidebar";
import MainSidebar from "./MainSidebar";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <div>
        <MainSidebar />
      </div>

      {/* --------------------------------mobile sidebar ------------------------ */}
      <div className="flex items-center justify-between w-screen h-10 px-4 text-white bg-gray-500 md:hidden">
        <h1>Tilak</h1>
        <button>
          <Hamburger
            toggled={isOpen}
            rounded
            color="#fff"
            onToggle={() => setIsOpen(!isOpen)}
          />
        </button>
      </div>
      {isOpen && <MobileSidebar />}
    </div>
  );
};

export default Index;
