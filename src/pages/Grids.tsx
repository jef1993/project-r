import React, { useRef } from "react";
import { motion, MotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import { StlyedGrids } from "./styles";
import { useTheme } from "styled-components";
import SimpleBar from "simplebar-react";

interface TestMainProps {
  y: MotionValue<number>;
}

const TestMain: React.FC<TestMainProps> = ({ y }) => {
  const { pathname } = useLocation();
  const { colors } = useTheme();
  const scrollRef = useRef(null);
  const paths = ["experience", "projects", "info"];
  const mainPath = pathname.split("/")[1];
  const isInIndex = pathname === "/";

  const gridRows = (path: string) => {
    if (path === "experience") return "0fr 1fr 1fr 0fr 0fr 0fr 0fr";
    if (path === "projects") return "0fr 0fr 0fr 1fr 1fr 0fr 0fr";
    if (path === "info") return "0fr 0fr 0fr 0fr 0fr 1fr 1fr";
    return "1fr 1fr 1fr 1fr 1fr 1fr 1fr";
  };
  return (
    <StlyedGrids
      className="grids"
      initial={{
        opacity: 0,
        x: "100%",
        gridTemplateColumns: isInIndex
          ? "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
          : "0fr 0fr 0fr 0fr 0fr 0fr 0fr 1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: gridRows(mainPath),
      }}
      animate={{
        gridTemplateColumns: isInIndex
          ? "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
          : "0fr 0fr 0fr 0fr 0fr 0fr 0fr 1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: gridRows(mainPath),
        gap: isInIndex ? "0.6rem" : "0rem",
        opacity: 1,
        x: "0",
      }}
      transition={{ stiffness: 60 }}
    >
      <motion.div
        className="grids__intro"
        animate={{
          opacity: isInIndex ? 1 : 0,
          minWidth: isInIndex ? "270px" : "0px",
        }}
      >
        intro
      </motion.div>
      <div className="grids__location">location</div>
      {paths.map((path) => (
        <motion.div className="grids__ctn" ref={scrollRef} key={path}>
          <motion.div
            className="inner"
            initial={{
              borderWidth: isInIndex ? "0.1rem" : "0.16rem",
              borderColor: isInIndex
                ? colors.borderOuter
                : `${colors.borderMain}${path === mainPath ? "" : "0"}`,
              backgroundColor: isInIndex
                ? `${colors.accent}`
                : `${colors.accent}0`,
            }}
            animate={{
              borderWidth: isInIndex ? "0.1rem" : "0.16rem",
              borderColor: isInIndex
                ? colors.borderOuter
                : `${colors.borderMain}${path === mainPath ? "" : "0"}`,
              backgroundColor: isInIndex
                ? `${colors.accent}`
                : `${colors.accent}0`,
            }}
            exit={{
              opacity: 0,
            }}
          >
            {pathname === "/" && <Link to={path}>{path}</Link>}
            {pathname === `/${path}` && (
              <SimpleBar
                className="simple-bar"
                onScrollCapture={() => {
                  y.set(y.get() + 1);
                }}
              >
                <Outlet />
              </SimpleBar>
            )}
          </motion.div>
        </motion.div>
      ))}
    </StlyedGrids>
  );
};

export default TestMain;
