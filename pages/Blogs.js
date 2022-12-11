import Layout from "../Layout";
import React from "react";
import Card from "../Components/Card/Card";
const Blogs = () => {
  const blogsData = [
    {
      src: "/aboutImage.png",
      Title: "Project ONe",
      link: "something.com",
      linkText: "Read More",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    },
    {
      src: "/aboutImage.png",
      Title: "Project Two",
      link: "something.com",
      linkText: "Read More",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      src: "/aboutImage.png",
      Title: "Project Three",
      link: "something.com",
      linkText: "Read More",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];
  return (
    <Layout>
      <div className="z-50 flex flex-col items-center justify-center h-full min-w-full mb-12 ">
        <div className="h-full w-full text-white  md:w-[70%] flex items-start flex-col pt-24 px-5 md:px-0 gap-5">
          <div className="p-2 rounded-sm bg-white/50 text-black/50 backdrop-blur-sm">
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
