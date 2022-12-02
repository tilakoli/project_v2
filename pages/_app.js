import "../styles/globals.css";
import { motion } from "framer-motion";
import Sidebar from "../Components/Sidebar";
function MyApp({ Component, pageProps, router }) {
  return (
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
  );
}

export default MyApp;
