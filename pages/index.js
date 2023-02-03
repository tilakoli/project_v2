import Head from "next/head";
import Layout from "../Layout";
import Homepage from "../Components/Homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tilak Oli</title>
        <meta charset="UTF-8" />
        <meta name="google" content="notranslate" />
        <meta http-equiv="Content-Language" content="en" />
      </Head>
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}
