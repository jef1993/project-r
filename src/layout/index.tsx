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
  const spring = { stiffness: 40, damping: 5, mass: 0.4, delay: 0.3 };
  const weakSpring = { stiffness: 50, damping: 3, mass: 3 };

  return (
    <StyledLayout className="layout">
      <StyledHeader className="header">
        <div className="header__left">
          <div className="header__logo">
            <motion.div
              className="header__logo__link"
              initial={{
                fontSize: isInIndex ? "10.2rem" : "4.8rem",
                x: isInIndex ? "-30%" : "-30%",
                opacity: isInIndex ? 0 : 0,
              }}
              animate={{
                fontSize: isInIndex ? "10.2rem" : "4.8rem",
                x: isInIndex ? "0%" : "0%",
                opacity: isInIndex ? 1 : 1,
              }}
              transition={spring}
            >
              <Link to="/">Jeffrey Leung</Link>
            </motion.div>
            <motion.span
              className="header__logo__title"
              initial={{
                fontSize: isInIndex ? "3rem" : "1.6rem",
                y: isInIndex ? "9rem" : "1.4rem",
                x: isInIndex ? "48rem" : "40rem",
                // color: isInIndex ? "hsl(230, 5%, 94%)" : "hsl(0, 0%, 20%)",
                opacity: isInIndex ? 0 : 0,
              }}
              animate={{
                x: isInIndex ? "40rem" : "37rem",
                y: isInIndex ? "9rem" : "1.4rem",
                color: isInIndex ? "hsl(230, 5%, 94%)" : "hsl(0, 0%, 20%)",
                fontSize: isInIndex ? "3rem" : "1.6rem",
                opacity: isInIndex ? 1 : 1,
              }}
              transition={spring}
            >
              frontend developer
            </motion.span>
            <motion.div
              className="header__logo__divider"
              initial={{
                width: isInIndex ? "0%" : "100%",
              }}
              animate={{
                width: isInIndex ? "0%" : "100%",
              }}
              transition={{ delay: isInIndex ? 0 : 0.4, ...weakSpring }}
            ></motion.div>
          </div>
          <motion.div
            className="header__ctn"
            initial={{
              // opacity: isInIndex ? 0 : 1,
              gridTemplateColumns: isInIndex ? "0px 1fr" : `${350}px 1fr`,
              gridTemplateRows: isInIndex ? `${142}px 1fr` : "0px 1fr",
            }}
            animate={{
              gridTemplateColumns: isInIndex ? "0px 1fr" : `${350}px 1fr`,
              gridTemplateRows: isInIndex ? `${142}px 1fr` : "0px 1fr",
              // opacity: 1,
            }}
            transition={spring}
          >
            <motion.div
              className="header__avatar"
              style={{ backgroundImage: `url(${avatar})` }}
              initial={{
                y: isInIndex ? "25%" : "0%",
                height: isInIndex ? "calc(100vh - 200px)" : "32px",
                opacity: isInIndex ? 0 : 0,
              }}
              animate={{
                height: isInIndex ? "calc(100vh - 200px)" : "32px",
                y: isInIndex ? "0%" : "0%",
                opacity: isInIndex ? 1 : 1,
              }}
              transition={weakSpring}
            ></motion.div>
          </motion.div>
        </div>
        <motion.nav
          className="header__nav"
          // animate={{
          //   gridColumn: isInIndex ? "8/-1" : "10/-1",
          // }}
        >
          <ul className="header__nav__list">
            <AnimatePresence mode="wait">
              {navOptions.map((option, i) => (
                <motion.li
                  className="header__nav__item"
                  key={option.path}
                  animate={{
                    x: option.path === pathname ? "100%" : "0%",
                    height: isInIndex ? 64 : option.path === pathname ? 0 : 22,
                    fontSize: isInIndex ? "6.4rem" : "2rem",
                    marginBottom:
                      option.path === pathname ? 0 : isInIndex ? 16 : 8,
                  }}
                  transition={{
                    borderBottom: {
                      duration: 0,
                    },
                  }}
                  whileHover={{
                    x: 6,
                    fontVariationSettings: '"ital" 0, "wdth" 100, "wght" 800',
                  }}
                >
                  <NavLink className="header__nav__link" to={option.path}>
                    {option.name}
                  </NavLink>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </motion.nav>
      </StyledHeader>
      {children}
    </StyledLayout>
  );
};

export default Layout;
