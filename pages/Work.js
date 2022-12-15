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

  return (
    <Layout>
      <div className="z-50 flex flex-col items-center justify-center h-full min-w-full md:mb-12 ">
        <div className="h-full w-full md:mt-16 rounded-md  md:w-[80%] flex items-start flex-col pt-8 pb-8 px-5 md:px-10 gap-5 ">
          <div className="p-2 text-white rounded-sm bg-white/50 backdrop-blur-sm">
            <p>Projects</p>
          </div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              My Projects
            </h2>
          </div>
          <TestCard />
        </div>
      </div>
    </Layout>
  );
};

export default Work;
