import React from "react";
import Link from "next/link";
import Layout from "../Layout/index";

const About = () => {
  return (
    <div>
      <Layout>
        <div className="z-50 flex flex-col items-center justify-center w-full bg-red-900">
          ABout page
          <Link href="/">
            <a className="text-lg text-white">home</a>
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default About;
