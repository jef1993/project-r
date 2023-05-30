import { motion } from "framer-motion";

interface MainProps {
  children?: React.ReactNode;
}

const MainPage: React.FC<MainProps> = ({ children }) => {
  const borderClipPath = (offSet = 0, gap = 0.2) => {
    return `polygon(0 0,0 100%,100% 100%, 100% 0%, calc(50% + ${offSet}rem) 0%, calc(50% + ${offSet}rem) ${gap}rem, calc(50% - ${offSet}rem) ${gap}rem, calc(50% - ${offSet}rem) 0%)`;
  };
  return (
    <main className="main">
      <div className="track__nav">
        <a href="#section-1">1</a>
        <a href="#section-2">2</a>
        <a href="#section-3">3</a>
        <a href="#section-4">4</a>
      </div>
      <div className="main__content">
        <motion.div
          className="main__border"
          animate={{
            clipPath: [
              borderClipPath(10),
              borderClipPath(0),
              borderClipPath(0),
              borderClipPath(10),
            ],
          }}
          transition={{ repeat: Infinity, type: "tween", duration: 3 }}
        ></motion.div>
        {children}
      </div>
    </main>
  );
};

export default MainPage;
