import React, { useState } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <motion.div>
          <Component {...pageProps} />
        </motion.div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
