import Head from "next/head";
import Layout from "../Layout";
import Homepage from "../Components/Homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kagami</title>
      </Head>
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}
