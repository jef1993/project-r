import { useLocation } from "react-router-dom";
import { MotionValue, useTransform } from "framer-motion";
import { StyledBgGrid } from "./styles";
import rectangle from "../assets/rectangle.svg";

interface BgGridProps {
  y: MotionValue<number>;
}

const BgGrid: React.FC<BgGridProps> = ({ y }) => {
  const location = useLocation();
  const isInIndex = location.pathname === "/";
  const backgroundPosition = useTransform(y, (y) => `${-y * 1.5}px 50%`);

  return (
    <StyledBgGrid
      style={{
        backgroundImage: `url(${rectangle})`,
        backgroundPosition,
      }}
      animate={{
        backgroundSize: isInIndex ? "100px 92px" : "100px 100px",
      }}
      transition={{
        duration: 1,
        delay: 0.3,
      }}
    ></StyledBgGrid>
  );
};

export default BgGrid;
