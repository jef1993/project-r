import SimpleBar from "simplebar-react";
import { motion } from "framer-motion";
import { StyledExperience } from "./styles";
import { Link } from "react-router-dom";
import variables from "../styles/variables";

const Experience = () => {
  return (
    <StyledExperience
      className="page-content"
      initial={{ overflow: "hidden" }}
      animate={{ overflow: "auto" }}
      exit={{ overflow: "hidden" }}
    >
      <motion.div
        className="test"
        initial={{ translateX: "100%" }}
        animate={{ translateX: "0%" }}
        exit={{ translateX: "100%" }}
        transition={{ type: "tween", duration: 0.2 }}
      ></motion.div>
    </StyledExperience>
  );
};

export default Experience;
