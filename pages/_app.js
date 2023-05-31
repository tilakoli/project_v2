import React from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
// import Router from "next/router";
// import Loader from "../Components/Elements/Loader";

function MyApp({ Component, pageProps }) {
  // const [isLoading, setIsLoading] = React.useState(false);
  // Router.events.on("routeChangeStart", (url) => {
  //   console.log("routeChangeStart", url);
  //   setIsLoading(true);
  // });
  // Router.events.on("routeChangeComplete", (url) => {
  //   console.log("routeChangeComplete", url);
  //   setIsLoading(false);
  // });
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        {/* {isLoading && <Loader />} */}
        <motion.div>
          <Component {...pageProps} />
          <Analytics />
        </motion.div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
