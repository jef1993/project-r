import React, { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "styled-components";
import { useSpring, AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import GlobalStyles from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/themes";

import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Experience from "./pages/Experience";

function App() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const initialTheme = mediaQuery.matches ? "dark" : "light";
  const [currentTheme, setcuurentTheme] = useState<"light" | "dark">(
    initialTheme
  );
  const theme = currentTheme === "dark" ? darkTheme : lightTheme;
  const location = useLocation();
  const isInIndex = location.pathname === "/";

  // const [scrollYProgress, setScrollYProgress] = useState(0);
  // const scrollYValue = useSpring(scrollYProgress);

  useEffect(() => {
    const htmlElement = document.querySelector("html") as HTMLElement;
    htmlElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  // useEffect(() => {
  //   console.log(scrollYProgress);
  // }, [scrollYProgress]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <motion.div className="App" data-theme={currentTheme}>
        <motion.div
          className="page-container"
          initial={{
            gridTemplateRows: isInIndex
              ? "40px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 64px"
              : "40px 0fr 0fr 0fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 64px",
            width: isInIndex ? "1408px" : "100%",
          }}
          animate={{
            gridTemplateRows: isInIndex
              ? "40px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 64px"
              : "40px 0fr 0fr 0fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 64px",
            width: isInIndex ? "1408px" : "100%",
          }}
          transition={{ delay: isInIndex ? 0.7 : 0.55 }}
        >
          <Header />
          <motion.main className="main">
            {/* <SimpleBar className="simple-bar" autoHide={false}> */}
            <AnimatePresence mode="wait">
              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="experience" element={<Experience />} />
              </Routes>
            </AnimatePresence>
            {/* </SimpleBar> */}
          </motion.main>
          <Footer />
        </motion.div>
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
