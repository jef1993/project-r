import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { StyledHeader, StyledHeaderLogo } from "./styles";

const Header = () => {
  const { pathname } = useLocation();
  const isInIndex = pathname === "/";
  return (
    <StyledHeader
      className="header"
      animate={{
        paddingInline: isInIndex ? "1.2rem" : "0.8rem",
      }}
      transition={{ delay: isInIndex ? 0.7 : 0.55 }}
    >
      <StyledHeaderLogo className="header-logo">
        <motion.p
          className="header-logo__title"
          initial={{
            fontSize: isInIndex ? "3rem" : "1.6rem",

            opacity: 0,
          }}
          animate={{
            fontSize: isInIndex ? "3rem" : "1.6rem",
            marginLeft: isInIndex ? "1.5rem" : "1rem",
            opacity: 1,
          }}
          transition={{ delay: isInIndex ? 0.7 : 0.55 }}
        >
          Front End Developer
        </motion.p>
        <motion.p
          className="header-logo__name"
          initial={{
            fontSize: isInIndex ? "5.6rem" : "3.6rem",
            opacity: 0,
          }}
          animate={{
            fontSize: isInIndex ? "5.6rem" : "3.6rem",
            opacity: 1,
          }}
          transition={{ delay: isInIndex ? 0.7 : 0.55 }}
        >
          Jeffrey Leung
        </motion.p>
      </StyledHeaderLogo>
      <div className="header__pattern">
        <Link to="">Back</Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
