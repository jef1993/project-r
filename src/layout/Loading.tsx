import { motion } from "framer-motion";
import { SetStateAction } from "react";
import { StyledLoading } from "./styles";

interface LoadingProps {
  setIsAnimated: React.Dispatch<SetStateAction<boolean>>;
}

const Loading: React.FC<LoadingProps> = ({ setIsAnimated }) => {
  return (
    <StyledLoading>
      Loading
      <motion.div
        className=""
        initial={{ color: "#cfcfcf", opacity: 1 }}
        animate={{ color: "#dd2626", opacity: 1 }}
        exit={{ opacity: 0 }}
        // transition={{ duration: 2, }}
        onAnimationComplete={() => {
          setIsAnimated(true);
        }}
        transition={{ delay: 2 }}
      >
        918237981273987
      </motion.div>
    </StyledLoading>
  );
};

export default Loading;
