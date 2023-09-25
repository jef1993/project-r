import { Link, useLocation } from "react-router-dom";
import { StyledHome } from "./styles";
import { motion } from "framer-motion";

const Home = () => {
  const { pathname } = useLocation();
  const mainPath = window.location.pathname.split("/")[1];

  const exitGridRows = () => {
    if (mainPath === "experience") return "0fr 1fr 1fr 0fr 0fr 0fr 0fr";
  };
  return (
    <StyledHome
      className="home"
      initial={{
        gridTemplateColumns: "0fr 0fr 0fr 0fr 0fr 0fr 0fr 1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "0fr 1fr 1fr 0fr 0fr 0fr 0fr",
        gap: "0rem",
      }}
      animate={{
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: [
          "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          "0fr 1fr 1fr 0fr 0fr 0fr 0fr",
          "0fr 1fr 1fr 0fr 0fr 0fr 0fr",
        ].reverse(),
        gap: ["0.8rem", "0rem", "0rem"].reverse(),
      }}
      exit={{
        gridTemplateColumns: "0fr 0fr 0fr 0fr 0fr 0fr 0fr 1fr 1fr 1fr 1fr 1fr",

        gridTemplateRows: [
          "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          "0fr 1fr 1fr 0fr 0fr 0fr 0fr",
          "0fr 1fr 1fr 0fr 0fr 0fr 0fr",
          "0fr 1fr 1fr 0fr 0fr 0fr 0fr",
        ],
        gap: ["0.8rem", "0rem", "0rem"],
      }}
      transition={{ delay: 0.2 }}
    >
      <motion.div
        className="home__intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0, 1] }}
        exit={{ opacity: [1, 0, 0, 0] }}
        transition={{ duration: 0.7 }}
      >
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Porttitor nullam lectus diam
          nulla ultrices tellus hendrerit. Adipiscing hendrerit risus tristique
          arcu in volutpat nibh integer. Adipiscing vulputate nunc et accumsan
          condimentum etiam justo diam. Sodales convallis pharetra sed ultricies
          neque pretium vitae egestas varius.
        </p>
      </motion.div>
      <div className="home__location">
        <h2>Location</h2>
        <p>Manchester</p>
      </div>
      <motion.div className="home__link">
        <Link to="experience">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0, 1] }}
            exit={{ opacity: [1, 0, 0, 0] }}
          >
            experience
          </motion.span>
        </Link>
      </motion.div>
      <motion.div
        className="home__link"
        initial={{
          width: 0,
          opacity: 0,
        }}
        animate={{
          width: ["0%", "0%", "0%", "100%"],
          opacity: [0, 0, 0, 1],
        }}
        exit={{
          width: ["100%", "0%", "0%", "0%"],
          opacity: [1, 0, 0, 0],
        }}
        transition={{ duration: 0.9 }}
      >
        <Link to="experience">experience</Link>
      </motion.div>
      <motion.div
        className="home__link"
        initial={{
          width: 0,
          opacity: 0,
        }}
        animate={{
          width: ["0%", "0%", "0%", "100%"],
          opacity: [0, 0, 0, 1],
        }}
        exit={{
          width: ["100%", "0%", "0%", "0%"],
          opacity: [1, 0, 0, 0],
        }}
        transition={{ duration: 0.9 }}
      >
        <Link to="experience">experience</Link>
      </motion.div>

      {/* <nav className="home__nav">
        <ul className="home__nav__list">
          <li className="home__nav__item">
            <Link className="home__link" to="experience">experience</Link>
          </li>
          <li className="home__nav__item">
            <Link to="projects">experience</Link>
          </li>
          <li className="home__nav__item">
            <Link to="info">Info</Link>
          </li>
        </ul>
      </nav> */}
    </StyledHome>
  );
};

export default Home;
