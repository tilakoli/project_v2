import React, { useState } from "react";
import Layout from "../Layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TestCard from "../Components/Card/TestCard";
import TesxtAnimation from "../Components/TextAnimation/TextAnimation";
const Work = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Tab 1",
      title: "Title 1",
      content:
        "Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.",
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      title: "Title 2",
      content: "Contenido de tab 2.",
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      title: "Title 3",
      content: "Contenido de tab 3.",
    },
    {
      id: 4,
      tabTitle: "Tab 4",
      title: "Title 4",
      content: "Contenido de tab 4.",
    },
  ];
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  const projectsData = [
    {
      projectFirstName: "Fly",
      projectSecondName: "Nepa",
      description:
        " Lorem ipsum is simply dummy text of the printing and typesetting printing and typesetting printing and typesetting",
      link: "http://youtube.com/",
      projectLogo: "/flynepaLogo.png",
    },
  ];
  return (
    <Layout>
      <div className="z-50 flex flex-col items-center justify-center h-full min-w-full text-black lg:mb-12 bg-customWhite dark:bg-black dark:text-white">
        <div className="h-full w-full mt-6 md:mt-16 rounded-md  lg:w-[80%] flex items-start flex-col pt-8 pb-6 px-2 lg:px-10 gap-5 ">
          <div className="p-2 rounded-sm bg-white/50 backdrop-blur-sm">
            <p>Projects</p>
          </div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold md:text-5xl">My Projects</h2>
          </div>
          <div className="flex flex-col justify-center w-full h-full gap-y-14 xl:gap-y-20 md:justify-start">
            <div className="flex flex-col items-center  w-full xl:w-[80%] gap-y-10 md:gap-y-0 md:flex-row md:gap-x-10 xl:justify-around">
              <div className="rounded-xl bg-[#7a7a7a]">
                <TestCard projectsData={projectsData} />
              </div>
              <div className="rounded-xl bg-[#7a7a7a] ">
                <TestCard projectsData={projectsData} />
              </div>
            </div>

            <div className="flex flex-col items-center  w-full xl:w-[80%] gap-y-10 md:gap-y-0 md:flex-row md:gap-x-10 xl:justify-around">
              <div className="rounded-xl bg-[#7a7a7a] ">
                <TestCard projectsData={projectsData} />
              </div>
              <div className="rounded-xl bg-[#7a7a7a] ">
                <TestCard projectsData={projectsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
