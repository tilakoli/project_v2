import Head from "next/head";
import Layout from "../Layout";
import Homepage from "../Components/Homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tilak-Oli</title>
      </Head>
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}
