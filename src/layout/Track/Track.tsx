import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

interface TrackProps {
  children?: React.ReactNode;
}

const Track: React.FC<TrackProps> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: trackRef });
  const scrollYPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleOffset = useTransform(
    scrollYProgress,
    [0, 0.15, 1],
    ["50%", "0%", "0%"]
  );
  const subHeight = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 1],
    [50, 50, 0, 0]
  );

  function debounce<F extends (...args: any[]) => any>(func: F, delay: number) {
    let timeoutId: any;

    return function (...args: Parameters<F>) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => func(...args), delay);
    } as F;
  }

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrentSection(Math.ceil(latest * 4) || 1);
  });

  const testVariant = {
    iniital: {
      opacity: 0,
      // x: "-100%",
    },
    animate: {
      opacity: 1,
      // x: "0%",
    },
    exit: {
      opacity: 0,
      // x: "100%",
    },
  };

  return (
    <div className="track">
      <motion.div
        className="track__title"
        animate={{ x: `-50%` }}
        style={{ top: titleOffset, y: "-50%" }}
      >
        <span>Title</span>
        <motion.div
          animate={{ height: [0, 50] }}
          style={{ overflow: "hidden", height: subHeight }}
          transition={{ height: { delay: 1 } }}
        >
          ksjdfkdjshfkjhdf
        </motion.div>
      </motion.div>
      <motion.div
        className="track__progress"
        key={currentSection}
        animate={{ opacity: [0, 1], x: [-100, 0] }}
      >
        {currentSection}
      </motion.div>
      <div className="track__track" ref={trackRef}>
        <div id="section-1" className="track__rail"></div>
        <div id="section-2" className="track__rail">
          Seciton 1
        </div>
        <div id="section-3" className="track__rail">
          Seciton 2
        </div>
        <div id="section-4" className="track__rail">
          Seciton 3
        </div>
      </div>
    </div>
  );
};

export default Track;
