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
    Name: "About",
    link: "/About",
    icon: <BsFillPersonFill />,
    datafor: "about",
  },
  {
    Name: "Blogs",
    link: "/Blogs",
    icon: <GiNotebook />,
    datafor: "blogs",
  },
  {
    Name: "Projects",
    link: "/MyProjects",
    icon: <MdOutlineWork />,
    datafor: "work",
  },

  {
    Name: "Contact",
    link: "/ContactMe",
    icon: <HiMail />,
    datafor: "contact",
  },
];
