import { Link, useLocation } from "react-router-dom";
import { StyledHeader, StyledHeaderLogo } from "./styles";
import { MotionValue, motion, useTransform } from "framer-motion";

interface HeaderProps {
  isAnimated: boolean;
  y: MotionValue<number>;
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

const Header: React.FC<HeaderProps> = ({ isAnimated, y }) => {
  const { pathname } = useLocation();
  const isInIndex = pathname === "/";
  const animateKey = isInIndex ? "index" : "pages";
  const offset = useTransform(y, (y) => -y * 0.08);
  const { paddingInline, fontSize, logoMarginLeft, logoSize } =
    headerAnimate[animateKey];

  const waveLinePoints = (offset = 0, strokeWidth = 18) => {
    return `0,${100 + offset} 0,${
      100 - strokeWidth + offset
    } 50,${offset} 100,${100 - strokeWidth + offset} 100,${100 + offset} 50,${
      strokeWidth + offset
    }`;
  };

  return (
    <StyledHeader
      className="header"
      transition={{ delay: isAnimated ? 0.45 : 0 }}
    >
      <StyledHeaderLogo
        className="header-logo"
        initial={{ paddingInline }}
        animate={{ paddingInline }}
        transition={{ delay: isAnimated ? 0.45 : 0 }}
      >
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
        <svg
          className="header__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          opacity={0.25}
        >
          <defs>
            <motion.pattern
              id="arrows"
              viewBox="0 0 100 100"
              width="0.1"
              height="0.1"
            >
              <polygon fill="#000000" points={waveLinePoints(75)} />
              <polygon fill="#000000" points={waveLinePoints(50)} />
              <polygon fill="#000000" points={waveLinePoints(25)} />
              <polygon fill="#000000" points={waveLinePoints()} />
              <polygon fill="#000000" points={waveLinePoints(-25)} />
              <polygon fill="#000000" points={waveLinePoints(-50)} />
              <polygon fill="#000000" points={waveLinePoints(-75)} />
            </motion.pattern>
            <motion.pattern
              viewBox="0 0 20 20"
              width="0.5"
              height="0.5"
              id="arrow-box"
              animate={{ stroke: ["#72eb02", "#aa1a1a"] }}
              style={{ y: offset }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <rect
                width="100%"
                height="100%"
                fill="url(#arrows)"
                strokeWidth={0}
              />
            </motion.pattern>
          </defs>
          <motion.rect height="100%" width="100%" fill="url(#arrow-box)" />
        </svg>
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
