import { motion } from "framer-motion";

interface BackgroundProps {
  children?: React.ReactNode;
  theme: "light" | "dark";
}

const Background: React.FC<BackgroundProps> = ({ children, theme }) => {
  return (
    <motion.div
      className={`background background--${theme}`}
      data-theme={theme}
      animate={{
        backgroundColor:
          theme === "light" ? "var(--bg-color)" : "var(--bg-color-dark)",
      }}
    >
      {children}
      <motion.div
        className="background__gradient"
        initial={{
          backgroundImage:
            theme === "light"
              ? "var(--bg-gradient)"
              : "var(--bg-gradient-dark)",
        }}
        animate={{
          backgroundImage:
            theme === "light"
              ? "var(--bg-gradient)"
              : "var(--bg-gradient-dark)",
          // backgroundImage:
          //   theme === "dark"
          //     ? "radial-gradient(circle at 50% 100%,rgba(14, 21, 31, 0.3) 0%,rgba(36, 30, 29, 0.15) 80%,rgba(23, 24, 29, 0.3) 100%),radial-gradient(circle at 5% 80%,rgba(13, 18, 32, 0.5) 0%,rgba(20, 26, 27, 0.2) 50%,rgba(22, 24, 29, 0) 85%),radial-gradient(circle at -25% -25%,rgba(241, 203, 36, 0.35) 0%,rgba(240, 92, 47, 0.25) 16%,rgba(238, 81, 81, 0.09) 40%,rgba(20, 26, 27, 0.3) 75%,rgba(22, 24, 29, 0.25) 85%),radial-gradient(circle at 100% 10%,rgba(28, 173, 240, 0.25) -10%,rgba(28, 173, 240, 0.06) 40%,rgba(32, 17, 15, 0.15) 76%,rgba(10, 14, 36, 0.08) 110%),radial-gradient(circle at 110% 110%,rgba(218, 57, 36, 0.15) -5%,rgba(36, 30, 29, 0.15) 50%,rgba(15, 16, 22, 0.3) 100%)"
          //     : "radial-gradient( circle at 50% 50%, rgba(253, 247, 240, 0.6) 0%, rgba(252, 249, 239, 0.2) 80%, rgba(171, 214, 240, 0.3) 100% ), radial-gradient( circle at 5% 80%, rgba(238, 170, 143, 0.2) 0%, rgba(236, 228, 181, 0.2) 50%, rgba(245, 124, 144, 0) 85% ), radial-gradient( circle at -8% -8%, rgba(250, 236, 134, 0.45) 0%, rgba(248, 231, 155, 0.2) 16%, rgba(243, 224, 224, 0.45) 40%, rgba(109, 144, 150, 0.3) 75%, rgba(107, 117, 143, 0.25) 85% ), radial-gradient( circle at 100% 10%, rgba(84, 213, 245, 0.4) -10%, rgba(252, 245, 224, 0.20) 40%, rgba(247, 187, 180, 0.15) 76%, rgba(233, 129, 137, 0.2) 110% ), radial-gradient( circle at 110% 110%, rgba(236, 148, 136, 0.15) -5%, rgba(185, 166, 162, 0.15) 50%, rgba(188, 191, 211, 0.3) 100% )",
        }}
      >
        {/* <svg className="background__border">
          <rect x={20} y={42} rx={12} ry={12} fill="red" />
        </svg> */}
      </motion.div>
    </motion.div>
  );
};

export default Background;
