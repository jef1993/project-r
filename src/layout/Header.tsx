import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { StyledHeader, StyledHeaderLogo } from "./styles";

interface HeaderProps {
  isAnimated: boolean;
}

const headerAnimate = {
  index: {
    paddingInline: "1.2rem",
    fontSize: "3rem",
    logoSize: "5.6rem",
    logoMarginLeft: "1.5rem",
    delay: 0.45,
  },
  pages: {
    paddingInline: "0.8rem",
    fontSize: "1.6rem",
    logoSize: "3.6rem",
    logoMarginLeft: "1rem",
    delay: 0.45,
  },
};

const Header: React.FC<HeaderProps> = ({ isAnimated }) => {
  const { pathname } = useLocation();
  const isInIndex = pathname === "/";
  const animateKey = isInIndex ? "index" : "pages";
  const { paddingInline, delay, fontSize, logoMarginLeft, logoSize } =
    headerAnimate[animateKey];
  return (
    <StyledHeader
      className="header"
      initial={{
        paddingInline: paddingInline,
      }}
      animate={{
        paddingInline,
      }}
      transition={{ delay: isAnimated ? 0.45 : 0 }}
    >
      <StyledHeaderLogo className="header-logo">
        <motion.p
          className="header-logo__title"
          initial={{
            fontSize,
            marginLeft: logoMarginLeft,
            opacity: 0,
          }}
          animate={{
            fontSize,
            marginLeft: logoMarginLeft,
            opacity: 1,
          }}
          transition={{ delay: isAnimated ? 0.45 : 0 }}
        >
          Front End Developer
        </motion.p>
        <motion.p
          className="header-logo__name"
          initial={{
            fontSize: logoSize,
            opacity: 0,
          }}
          animate={{
            fontSize: logoSize,
            opacity: 1,
          }}
          transition={{ delay: isAnimated ? 0.45 : 0 }}
        >
          Jeffrey Leung
        </motion.p>
      </StyledHeaderLogo>
      <div className="header__pattern">
        <div className="links">
          <Link to="">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/info">Info</Link>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
