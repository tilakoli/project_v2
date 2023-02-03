import { useState } from "react";
import { TbSearch } from "react-icons/tb";
import Search from "../SearchBar/search";
import { animateFromSideLeft } from "../animationConfig/AnimationConfig";
import { motion } from "framer-motion";

function Sidebar() {
  const [open, setOpen] = useState(false);

  function handleSearchBar() {
    setOpen(true);
    console.log("hello");
  }
  return (
    <div className="w-full h-full">
      <motion.h4
        className="fixed text-xl capitalize transform -rotate-90 min-w-max bottom-96 md:bottom-48"
        variants={animateFromSideLeft}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.6 }}
      >
        We specialize in{" "}
        <span className="capitalize text-primary">Design & Development !</span>
      </motion.h4>
    </div>
  );
}

export default Sidebar;
