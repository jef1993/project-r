import { useLocation } from "react-router-dom";
import { MotionValue, useTransform, motion } from "framer-motion";
import { StyledBgGrid } from "./styles";
import { useTheme } from "styled-components";

interface BgGridProps {
  y: MotionValue<number>;
  gridSize?: number;
  strokeWidth?: number;
}

const BgGrid: React.FC<BgGridProps> = ({
  y,
  gridSize = 80,
  strokeWidth = 0.25,
}) => {
  const location = useLocation();
  const isInIndex = location.pathname === "/";
  const { colors } = useTheme();
  const xOffset = useTransform(y, (y) => -y * 0.15);
  const pathMid = gridSize / 10;
  const pathEnd = gridSize / 5;

  return (
    <StyledBgGrid>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg-pattern"
        viewBox="0 0 200 200"
      >
        <defs>
          <motion.pattern
            id="Pattern"
            x="0"
            y="0"
            width={gridSize / 1000}
            height={gridSize / 1000}
            style={{
              x: xOffset,
            }}
          >
            <motion.rect
              className="bg-grid__box"
              x={0}
              y={0}
              width={gridSize}
              height={gridSize}
              fill="none"
              strokeWidth={strokeWidth}
              stroke={colors.borderMain}
            />
            <motion.path
              className="bg-grid__line"
              d={`M ${pathMid},${pathMid} L 0,${pathMid} M ${pathMid},${pathMid} L ${pathEnd},${pathMid} M ${pathMid},${pathMid} L ${pathMid},0 M ${pathMid},${pathMid} L ${pathMid},${pathEnd} z`}
              strokeWidth={strokeWidth / 2}
              stroke={colors.borderMain}
              initial={{
                pathLength: isInIndex ? 0 : 1,
              }}
              animate={{
                pathLength: isInIndex ? 0 : 1,
                stroke: [colors.borderMain],
              }}
              transition={{
                duration: isInIndex ? 1 : 2.5,
                delay: isInIndex ? 0 : 0.5,
                stroke: {
                  duration: 10,
                  repeat: Infinity,
                  delay: 0,
                },
              }}
            />
          </motion.pattern>
        </defs>
        <motion.rect
          height="200"
          width="200"
          className="grid-ctn"
          fill="url(#Pattern)"
          strokeWidth={strokeWidth}
          stroke={colors.borderMain}
        />
      </motion.svg>
    </StyledBgGrid>
  );
};

export default BgGrid;
