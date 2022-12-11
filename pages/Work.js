import React, { useState } from "react";
import Layout from "../Layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
          <div className="flex items-center justify-end w-full ">
            <div className="w-full md:w-[80%]  mt-8 ">
              <div className="flex gap-3 md:pr-10 md:justify-end">
                {tabs.map((tab, i) => (
                  <button
                    className=" text-[#888888] py-2 w-28 rounded-md  cursor-pointer border transition-all duration-500 ease-out hover:text-white hover:bg-gray-300 tab-button "
                    key={i}
                    id={tab.id}
                    disabled={currentTab === `${tab.id}`}
                    onClick={handleTabClick}
                  >
                    {tab.tabTitle}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start w-full mt-0 text-white rounded-md md:p-5 bg-black/50 backdrop-blur-sm md:mt-16">
            <div className="w-full">
              <div className="content">
                {tabs.map((tab, i) => (
                  <div key={i}>
                    {currentTab === `${tab.id}` && (
                      <div>
                        <p className="text-white text-lg mb-[15px] font-bold p-2">
                          {tab.title}
                        </p>
                        <p className="md:px-[50px] md:py-[80px] font-medium text-xl text-start p-2">
                          {tab.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
