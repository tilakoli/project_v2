import Layout from "../Layout";
import React from "react";
import Card from "../Components/Card/Card";
import { blogsData } from "../utils/PersonalData";
const Blogs = () => {
  return (
    <Layout>
      <div className="z-50 flex flex-col items-center justify-center h-full min-w-full pb-5 text-black md:mb-12 bg-customWhite dark:bg-black/30 dark:text-white">
        <div className="h-full w-full text-white  md:w-[70%] flex items-start flex-col pt-24 px-5 md:px-0 gap-5">
          <div className="p-2 text-white bg-black rounded-sm dark:bg-white dark:text-black backdrop-blur-sm">
            <p>Blogs</p>
          </div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              My Blogs
            </h2>
          </div>
          <div className="flex flex-col w-full md:grid gap-y-5 md:grid-flow-row md:grid-cols-2 md:gap-x-10">
            {blogsData.map((elem, index) => {
              return (
                <div key={index} className="flex flex-row gap-5">
                  <Card
                    src={elem.src}
                    Title={elem.Title}
                    link={elem.link}
                    linkText={elem.linkText}
                    description={elem.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
