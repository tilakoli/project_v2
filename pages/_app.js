import "../styles/globals.css";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <motion.div>
        <Component {...pageProps} />
      </motion.div>
    </ThemeProvider>
  );
}

export default MyApp;
