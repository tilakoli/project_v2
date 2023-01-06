import React, { useState } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Loader from "../Components/Elements/Loader";
import Router from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <motion.div>
        {loading ? <Loader /> : null}
        <Component {...pageProps} />
      </motion.div>
    </ThemeProvider>
  );
}

export default MyApp;
