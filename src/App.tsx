import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useSpring, AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import theme, { darkTheme, lightTheme } from "./styles/themes";
import Layout from "./layout";
import { ReactComponent as ContourMap } from "./assets/contourMap2.svg";
import contourMap from "./assets/contourMap.svg";

function App() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const initialTheme = mediaQuery.matches ? "dark" : "light";
  const [currentTheme, setcuurentTheme] = useState<"light" | "dark">(
    initialTheme
  );
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const scrollYValue = useSpring(scrollYProgress);
  const location = useLocation();

  useEffect(() => {
    const htmlElement = document.querySelector("html") as HTMLElement;
    htmlElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  // useEffect(() => {
  //   console.log(scrollYProgress);
  // }, [scrollYProgress]);

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="App" data-theme={currentTheme}>
        <ContourMap className="background" />
        <Layout>
          <main className="main">
            <AnimatePresence mode="wait">
              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<></>} />
                <Route path="/about" element={<div>home</div>} />
              </Routes>
            </AnimatePresence>
          </main>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
