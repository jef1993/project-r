import React, {
  Suspense,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import { ThemeProvider } from "styled-components";
import {
  useSpring,
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useVelocity,
  useMotionValueEvent,
} from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import "simplebar-react/dist/simplebar.min.css";

import GlobalStyles from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/themes";

import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Experience from "./pages/Experience";
import Loading from "./layout/Loading";
import TestMain from "./pages/Grids";
import BgGrid from "./layout/BgGrid";

// const Home = lazy(() => import("./pages/Home"));

function App() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const initialTheme = mediaQuery.matches ? "dark" : "light";
  const [currentTheme, setcuurentTheme] = useState<"light" | "dark">(
    initialTheme
  );
  const theme = currentTheme === "dark" ? darkTheme : lightTheme;
  const location = useLocation();
  const isInIndex = location.pathname === "/";
  const [isAnimated, setIsAnimated] = useState(!isInIndex);
  const [isTrasitioned, setIsTrasitioned] = useState(false);
  const y = useMotionValue(0);
  const ySpring = useSpring(y, { mass: 0.1, stiffness: 33 });

  useEffect(() => {
    const interval = setInterval(() => y.set(y.get() + 1), 1000 / 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const htmlElement = document.querySelector("html") as HTMLElement;
    htmlElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    console.log(isAnimated);
    if (isAnimated) setTimeout(() => setIsTrasitioned(true), 100);
  }, [isAnimated]);

  const pageGrid = {
    loading: "40px 5fr 5fr 5fr 1fr 1fr 0fr 0fr 0fr 0fr 0fr",
    home: "40px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    pages: "40px 0fr 0fr 0fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  };

  const compoment = isAnimated ? (
    <Routes>
      <Route path="/" element={<TestMain y={y} />}>
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Experience />} />
        <Route path="info" element={<Experience />} />
      </Route>
    </Routes>
  ) : (
    <Loading setIsAnimated={setIsAnimated} />
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <motion.div className="App" data-theme={currentTheme}>
        <BgGrid y={ySpring} />
        <AnimatePresence mode="wait">
          <motion.div
            className="page-container"
            initial={{
              gridTemplateRows: isAnimated ? pageGrid.pages : pageGrid.loading,
              width: isInIndex ? "1408px" : "100%",
            }}
            animate={{
              gridTemplateRows: isAnimated
                ? isInIndex
                  ? pageGrid.home
                  : pageGrid.pages
                : pageGrid.loading,

              width: isInIndex ? "1408px" : "100%",
              height: isInIndex ? "1400px" : "100vh",
            }}
            transition={{ delay: isTrasitioned ? 0.45 : 0 }}
          >
            <Header isAnimated={isAnimated} />

            <AnimatePresence mode="popLayout">
              <motion.main
                key={isAnimated ? 1 : 0}
                initial={{ x: "110%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-110%", opacity: 0 }}
                transition={{ stiffness: 60 }}
              >
                {compoment}
              </motion.main>
            </AnimatePresence>

            <Footer />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
