import React from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <motion.div>
          <Component {...pageProps} />
          <Analytics />
        </motion.div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
