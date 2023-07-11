import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import StyledLayout, { StyledHeader } from "./styles";
import avatar from "../assets/avatar.jpg";
import { useLocation } from "react-router-dom";
import { useWindowSize, useMeasure } from "react-use";
import { AnimatePresence, motion } from "framer-motion";

interface LayoutProps {
  isPageIndex?: boolean;
  children?: React.ReactNode;
}

const navOptions = [
  {
    name: "About Me.",
    path: "/about",
  },
  {
    name: "Projects.",
    path: "/projects",
  },
  {
    name: "Availability.",
    path: "/availability",
  },
];

const Layout: React.FC<LayoutProps> = ({ children, isPageIndex = true }) => {
  const { pathname } = useLocation();
  const isInIndex = pathname === "/";
  const { height } = useWindowSize();
  const navRef = useRef(null);
  const [logoRef, { width: logoWidth, height: logoHeight }] =
    useMeasure<HTMLDivElement>();

  const spring = { stiffness: 80, damping: 6, mass: 0.7 };

  const weakSpring = { stiffness: 50, damping: 6, mass: 3 };

  return (
    <StyledLayout className="layout">
      <StyledHeader className="header">
        <div className="header__left">
          <div className="header__logo">
            <motion.div
              className="header__logo__link"
              initial={{
                fontSize: isInIndex ? "10.2rem" : "4.8rem",
              }}
              animate={{
                fontSize: isInIndex ? "10.2rem" : "4.8rem",
              }}
              ref={logoRef}
              transition={spring}
            >
              <Link to="/">Jeffrey Leung</Link>
            </motion.div>
            <motion.span
              className="header__logo__title"
              initial={{
                fontSize: isInIndex ? "3rem" : "1.6rem",
                y: isInIndex ? "9rem" : "1.4rem",
              }}
              animate={{
                x: isInIndex
                  ? ["38rem", "40rem", "40rem"]
                  : ["40rem", "40rem", "38rem"],
                y: isInIndex ? "9rem" : "1.4rem",
                color: isInIndex ? "hsl(0, 100%, 100%)" : "hsl(0, 0%, 20%)",
                fontSize: isInIndex ? "3rem" : "1.6rem",
              }}
              transition={spring}
            >
              frontend developer
            </motion.span>
          </div>
          <motion.div
            className="header__ctn"
            initial={{ opacity: 0 }}
            animate={{
              gridTemplateColumns: isInIndex
                ? "0px 1fr"
                : `${logoWidth + 24}px 1fr`,
              gridTemplateRows: isInIndex
                ? `${logoHeight + 40}px 1fr`
                : "0px 1fr",
              opacity: [0, 1],
            }}
            transition={spring}
          >
            <motion.div
              className="header__avatar"
              style={{ backgroundImage: `url(${avatar})` }}
              animate={{
                height: isInIndex ? "calc(100vh - 200px)" : "32px",
              }}
              transition={spring}
            ></motion.div>
          </motion.div>
        </div>
        <nav className="header__nav">
          <ul className="header__nav__list">
            <AnimatePresence mode="wait">
              {navOptions.map((option, i) => (
                <motion.li
                  className="header__nav__item"
                  key={option.path}
                  animate={{
                    x:
                      option.path === pathname
                        ? ["0%", "0%", "100%"]
                        : ["100%", "0%", "0%"],
                    height:
                      pathname === "/"
                        ? 90
                        : option.path === pathname
                        ? [90, 0, 0]
                        : [0, 0, 90],
                  }}
                  transition={spring}
                >
                  <NavLink className="header__nav__link" to={option.path}>
                    {option.name}
                  </NavLink>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </nav>
      </StyledHeader>
      {children}
    </StyledLayout>
  );
};

export default Layout;
