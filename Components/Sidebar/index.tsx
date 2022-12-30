import React, { useState, useEffect } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import MobileSidebar from "./MobileSidebar";
import MainSidebar from "./MainSidebar";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import Link from "next/link";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  // useState to handle the hydration error -----------------------------
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div>
          <BsFillSunFill
            className="cursor-pointer w-7 h-7"
            onClick={() => setTheme("light")}
          />
        </div>
      );
    } else {
      return (
        <div>
          <BsFillMoonStarsFill
            className="cursor-pointer w-7 h-7"
            onClick={() => setTheme("dark")}
          />
        </div>
      );
    }
  };
  return (
    <div className="w-full">
      <div>
        <MainSidebar themeToggleButton={renderThemeChanger} />
      </div>
      {/* --------------------------------mobile sidebar ------------------------ */}
      <div className="fixed z-50 flex items-center justify-between w-screen h-10 px-4 text-white bg-gray-600 lg:hidden">
        <Link href="/">
          <a>
            <h1 className="text-xl font-bold tracking-wider text-black dark:text-customWhite">
              Tilak
            </h1>
          </a>
        </Link>
        {renderThemeChanger()}
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
