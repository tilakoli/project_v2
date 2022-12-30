import "../styles/globals.css";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <motion.div
        key={router.route}
        // initial="initialPageLoad"
        // animate="pageAnimate"
        // variants={{
        //   initialPageLoad: {
        //     opacity: 0,
        //   },
        //   pageAnimate: {
        //     opacity: 1,
        //     transition: {
        //       duration: 0.5,
        //     },
        //   },
        // }}
      >
        <Component {...pageProps} />
      </motion.div>
    </ThemeProvider>
  );
}

export default MyApp;
