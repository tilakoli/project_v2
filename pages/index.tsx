import Head from "next/head";
import Layout from "../Layout";
import LandingPage from "../Components/LandingPage/LandingPage";
import About from "./About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tilak Oli</title>
      </Head>
      <Layout>
        {/* <Homepage /> */}
        <LandingPage />
      </Layout>
    </div>
  );
}
