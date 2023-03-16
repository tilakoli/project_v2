import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";

// ---------HomePage Data ----------
export const FirstNameNameAnimationConfig = [
  {
    lable: "T",
    animationDelay: 0.3,
    animationDuration: 0.7,
  },
  {
    lable: "i",
    animationDelay: 0.5,
    animationDuration: 0.7,
  },
  {
    lable: "l",
    animationDelay: 0.7,
    animationDuration: 0.7,
  },
  {
    lable: "a",
    animationDelay: 0.9,
    animationDuration: 0.7,
  },
  {
    lable: "k",
    animationDelay: 1.1,
    animationDuration: 0.7,
  },
];

export const LastNameAnimationConfig = [
  {
    lable: "O",
    animationDelay: 1.3,
    animationDuration: 0.7,
  },
  {
    lable: "l",
    animationDelay: 1.5,
    animationDuration: 0.7,
  },
  {
    lable: "i",
    animationDelay: 1.7,
    animationDuration: 0.7,
  },
];

// -----------AboutmePage Data---------
export const description1 =
  "I am a 2* year old Front-End Developer with a strong passion for creating beautiful and intuitive user experiences and a firm believer in the power of continuous learning and growth, and I am always seeking out new challenges and opportunities to improve my skills.";

export const description2 =
  "As a FrontEnd developer, I specialize in designing and building responsive user interfaces that provide a seamless and enjoyable experience for users. In this portfolio, you will find examples of my work that showcase my creativity, technical expertise, and attention to detail as a FrontEnd developer.";

export const personalData = [
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Kathmandu, Nepal",
  },
  {
    label: "email",
    value: "tilak.81oli@gmail.com",
  },
  {
    label: "Phone",
    value: "*********",
  },
  {
    label: "Nationality",
    value: "Nepali",
  },
];

export const personalDetail2 = [
  {
    label: "Interests",
    value: "Coding, Music!",
  },
];

export const skills = [
  {
    languageName: "ReactJs",
    skillLevel: "80%",
  },
  {
    languageName: "NextJs",
    skillLevel: "80%",
  },

  {
    languageName: "Redux",
    skillLevel: "80%",
  },
  {
    languageName: "JestJs",
    skillLevel: "80%",
  },
  {
    languageName: "Css/Scss",
    skillLevel: "80%",
  },
  {
    languageName: "Googling",
    skillLevel: "80%",
  },

  {
    languageName: "Typescript",
    skillLevel: "80%",
  },
  {
    languageName: "FramerMotion",
    skillLevel: "80%",
  },
];

export const Languages = [
  {
    language: "English",
    languageProficiency: "80%",
  },
  {
    language: "Hindi",
    languageProficiency: "80%",
  },
  {
    language: "Nepali",
    languageProficiency: "100%",
  },
];

export const Knowledge = [
  "Figma",
  "Linux",
  "Docker",
  "Tailwindcss",
  "UI Frameworks",
];

export const Interests = [
  "Music",
  "Coding",
  "Technology",
  "Space & Cosmos",
  "Myths & Legends",
];

// -----------BlogsPage Data---------

export const blogsData = [
  {
    src: "/blogAssets/dockerblog.png",
    Title: "Dockerize a react application.",
    link: "https://medium.com/@tilakOli/dockerize-react-app-8c943d7ab6d9",
    linkText: "Read More",
    description:
      "Dockerizing a react application and enable hot reload with docker-compose.",
  },
  {
    src: "/blogAssets/darkmodeblogbanner.png",
    Title: "Dark Mode with tailwind CSS",
    link: "https://medium.com/@tilakOli/darkmode-with-tailwindcss-next-js-a-step-by-step-guide-3d2b56412c92",
    linkText: "Read More",
    description:
      "Adding the dark mode feature to your NextJS/ReactJS application with tailiwind CSS.",
  },
  {
    src: "/blogAssets/accessibilitybanner.png",
    Title: "Accessibility in ReactJS",
    link: "https://medium.com/@tilakOli/a-short-guide-to-accessibility-in-reactjs-and-the-importance-of-aria-for-accessibility-7278139930e9",
    linkText: "Read More",
    description:
      "A short guide to accessibility in ReactJS and the use of ARIA attributes for accessibility!",
  },
];

// -----------MyWorkPage Data---------
export const projectsData = [
  {
    projectFirstName: "Show",
    projectSecondName: "case",
    description:
      "A personal project to showcase some of the images that I took with a simple parallax effect.",
    link: "https://my-images-showcase.vercel.app/",
    projectLogo: "/showcasebanner.png",
  },
  {
    projectFirstName: "Fly",
    projectSecondName: "Nepa",
    description: "A flight booking system.One of my previous projects.",
    link: "https://beta.flynepa.com/",
    projectLogo: "/flynepaLogo.png",
  },
];

export const projectsPageTextAnimation = [
  {
    lable: "Try",
    animationDelay: 0.3,
    animationDuration: 0.7,
  },
  {
    lable: "",
    animationDelay: 0.5,
    animationDuration: 0.7,
  },
  {
    lable: "grabbing",
    animationDelay: 0.7,
    animationDuration: 0.7,
  },
  {
    lable: " ",
    animationDelay: 0.9,
    animationDuration: 0.7,
  },
  {
    lable: "the",
    animationDelay: 1.1,
    animationDuration: 0.7,
  },
  {
    lable: " ",
    animationDelay: 0.9,
    animationDuration: 0.7,
  },
  {
    lable: "cards.",
    animationDelay: 1.3,
    animationDuration: 0.7,
  },
];

// grabbing the cards

// ------------Contact Page Data ---------

export const ContactBlocksData = [
  {
    Icon: <AiOutlineMail />,
    description: "tilak.81oli@gmail.com",
    title: "Email",
  },
  {
    Icon: <GoLocation />,
    description: "123 Lorem Ipsum, Mars",
    title: "Address",
  },
  {
    Icon: <FiPhoneCall />,
    description: "(+977) *** *** ****",
    title: "Phone Number",
  },
];
