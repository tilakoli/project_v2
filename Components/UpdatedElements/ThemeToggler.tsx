import React, { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  // handle the hydration error
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
  return <>{renderThemeChanger()}</>;
};

export default ThemeToggler;
