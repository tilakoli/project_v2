import Head from "next/head";
import Layout from "../Layout";
import LandingPage from "../Components/LandingPage/LandingPage";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     // Import Locomotive Scroll
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //     const locomotiveScroll = new LocomotiveScroll({
  //       el: document.querySelector("#main_container"),
  //       smooth: true,
  //     });

  //     // Update Locomotive Scroll on component unmount
  //     return () => {
  //       locomotiveScroll.destroy();
  //     };
  //   })();
  // }, []);
  return (
    <div id="main_container">
      <Head>
        <title>Tilak Oli</title>
      </Head>
      <Layout  >
        <LandingPage />
      </Layout>
    </div>
  );
}
