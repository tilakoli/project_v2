import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { RiProfileFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { HiMail } from "react-icons/hi";

export const NavigationData = [
  {
    Name: "Home",
    link: "/",
    icon: <AiFillHome />,
    datafor: "homeIcon",
  },
  {
    Name: "About Me",
    link: "/About",
    icon: <BsFillPersonFill />,
    datafor: "about",
  },
  {
    Name: "Resume",
    link: "/Resume",
    icon: <RiProfileFill />,
    datafor: "resume",
  },
  {
    Name: "My Work",
    link: "/Work",
    icon: <MdOutlineWork />,
    datafor: "work",
  },
  {
    Name: "Blogs",
    link: "/Blogs",
    icon: <GiNotebook />,
    datafor: "blogs",
  },
  {
    Name: "Contact Me",
    link: "/ContactMe",
    icon: <HiMail />,
    datafor: "contact",
  },
];
