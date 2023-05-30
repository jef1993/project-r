import React, { useEffect, useState } from "react";
import Background from "./layout/Background/Background";
import MainPage from "./pages/MainPage";
import Track from "./layout/Track/Track";

function App() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const initialTheme = mediaQuery.matches ? "dark" : "light";
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme);

  // useEffect(() => {
  //   document.querySelector("root")?.setAttribute;
  // }, []);

  useEffect(() => {
    const htmlElement = document.querySelector("html") as HTMLElement;
    htmlElement.setAttribute("data-theme", theme);
  }, [theme]);

  const test = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="App" data-theme={theme}>
      {/* <button onClick={test}>Toggle</button> */}
      <Background theme={theme}></Background>
      {/* <svg className="background__border">
        <rect x={20} y={42} rx={12} ry={12} />
      </svg> */}

      <MainPage>
        <Track />
      </MainPage>
    </div>
  );
}

export default App;
