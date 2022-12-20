import React, { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import MobileSidebar from "./MobileSidebar";
import MainSidebar from "./MainSidebar";
import Link from "next/link";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <div>
        <MainSidebar />
      </div>
      {/* --------------------------------mobile sidebar ------------------------ */}
      <div className="fixed z-50 flex items-center justify-between w-screen h-10 px-4 text-white bg-gray-600 lg:hidden">
        <Link href="/">
          <a>
            <h1 className="text-xl font-bold tracking-wider">Tilak</h1>
          </a>
        </Link>
        <button className="">
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
