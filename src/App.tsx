import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";

import Background from "./layout/Background/Background";
import Track from "./layout/Track/Track";

function App() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const initialTheme = mediaQuery.matches ? "dark" : "light";
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme);
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const scrollYValue = useSpring(scrollYProgress);
  const borderClipPath = (offSet = 0, gap = 0.2) => {
    return `polygon(0 0,0 100%,100% 100%, 100% 0%, calc(50% + ${offSet}rem) 0%, calc(50% + ${offSet}rem) ${gap}rem, calc(50% - ${offSet}rem) ${gap}rem, calc(50% - ${offSet}rem) 0%)`;
  };
  const bordertest = useTransform(scrollYValue, [0, 1], [0, 1]);

  useEffect(() => {
    const htmlElement = document.querySelector("html") as HTMLElement;
    htmlElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  const test = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Background theme={theme}></Background>
            <main className="main">
              <div className="main__wrapper">
                <div className="main__nav">
                  <a href="#section-1">1</a>
                  <Link to="/">2</Link>
                  <Link to="/test">3</Link>
                </div>
                <div className="main__content">
                  <Outlet />
                </div>
              </div>
            </main>
          </>
        }
        errorElement={<div>error</div>}
      >
        <Route index element={<Track />} />
        <Route path="/test" element={<Track isTitleTop />} />
      </Route>
    )
  );

  return (
    <div className="App" data-theme={theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
