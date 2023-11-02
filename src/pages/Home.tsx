import { useNavigate } from "react-router-dom";
import { StyledHome } from "./styles";
import { motion } from "framer-motion";

const gridRows = {
  rowIn: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  rowOut: "0fr 1fr 1fr 0fr 0fr 0fr 0fr",
  row2Out: "0fr 0fr 0fr 1fr 1fr 0fr 0fr",
  row3Out: "0fr 0fr 0fr 0fr 0fr 1fr 1fr",
};
const gridCols = {
  colIn: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  colOut: "0fr 0fr 0fr 0fr 0fr 0fr 0fr 1fr 1fr 1fr 1fr 1fr",
};
const { rowIn, rowOut, row2Out, row3Out } = gridRows;
const { colIn, colOut } = gridCols;
const rowSeq = (path: string) => {
  const pathname = path.replace("/", "");
  if (pathname === "projects") return [rowIn, row2Out, row2Out, row2Out];
  if (pathname === "info") return [rowIn, row3Out, row3Out, row3Out];
  return [rowIn, rowOut, rowOut, rowOut];
};

const linkAnimate = {
  initial: {
    width: 0,
    opacity: 0,
  },
  animate: {
    width: ["0%", "0%", "0%", "100%"],
    opacity: [0, 0, 0, 1],
  },
  exit: {
    width: ["100%", "0%", "0%", "0%"],
    opacity: [1, 0, 0, 0],
  },
  transition: { duration: 0.9 },
};

interface HomeProps {
  isAnimated: boolean;
  pathname?: string;
}

const Home: React.FC<HomeProps> = ({ isAnimated }) => {
  const mainPath = window.location.pathname.split("/")[1];
  const navigate = useNavigate();
  console.log(mainPath);

  const paths = [
    {
      name: "experience",
    },
    {
      name: "projects",
    },
    {
      name: "info",
    },
  ];

  const clickHandler = (path: string) => {
    setTimeout(() => navigate(path), 75);
  };

  return (
    <StyledHome
      className="home"
      initial={{
        gridTemplateColumns: colOut,
        gap: "0rem",
        opacity: isAnimated ? 1 : 0,
      }}
      animate={{
        gridTemplateColumns: colIn,
        gridTemplateRows: rowSeq("info").reverse(),
        gap: ["0.8rem", "0rem", "0rem"].reverse(),
        opacity: 1,
      }}
      exit={{
        gridTemplateColumns: colOut,
        gridTemplateRows: rowSeq(mainPath),
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
      {/* <motion.div className="home__link">
        <Link to="experience">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0, 1] }}
            exit={{ opacity: [1, 0, 0, 0] }}
          >
            experience
          </motion.span>
        </Link>
      </motion.div> */}
      {paths.map((path) => (
        <motion.div
          key={path.name}
          className="home__link"
          initial={mainPath === path.name ? undefined : linkAnimate.initial}
          animate={{
            width:
              mainPath === path.name ? undefined : ["0%", "0%", "0%", "100%"],
            opacity: mainPath === path.name ? undefined : [0, 0, 0, 1],
          }}
          exit={{
            width:
              mainPath === path.name ? undefined : ["100%", "0%", "0%", "0%"],
            opacity: mainPath === path.name ? undefined : [1, 0, 0, 0],
          }}
          // transition={{ duration: mainPath === path.name ? undefined : 0.9 }}

          // initial={{
          //   width: mainPath === path.name ? 0 : 0,
          //   opacity: 0,
          // }}
          // animate={{
          //   width:
          //     mainPath === path.name ? undefined : ["0%", "0%", "0%", "100%"],
          //   opacity: [0, 0, 0, 1],
          // }}
          // exit={{
          //   width:
          //     mainPath === path.name ? undefined : ["100%", "0%", "0%", "0%"],
          //   opacity: [1, 0, 0, 0],
          // }}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: [0, 0, 0, 1] }}
          // exit={{ opacity: [1, 0, 0, 0] }}
          // transition={{ duration: mainPath === path.name ? undefined : 0.9 }}
        >
          <button onClick={clickHandler.bind(null, path.name)}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 0, 1] }}
              exit={{ opacity: [1, 0, 0, 0] }}
            >
              {path.name}
            </motion.span>
          </button>
        </motion.div>
      ))}
      {/* <motion.div
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
        <Link to="project">project</Link>
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
        <Link to="contact">contact</Link>
      </motion.div> */}
    </StyledHome>
  );
};

export default Home;
