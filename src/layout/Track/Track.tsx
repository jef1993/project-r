import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";

interface TrackProps {
  setScrollYProgress?: (value?: MotionValue<number>) => void;
  isTitleTop?: boolean;
}

const Track: React.FC<TrackProps> = ({
  setScrollYProgress,
  isTitleTop = false,
}) => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: trackRef,
    offset: ["start start", "end start"],
  });
  const scrollYPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleOffset = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    ["50%", "0%", "0%"]
  );
  const subHeight = useTransform(
    scrollYProgress,
    [0, 0.04, 0.08, 1],
    [50, 50, 0, 0]
  );

  useEffect(() => {
    if (trackRef?.current)
      trackRef?.current.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  const borderClipPath = (offSet = 0, gap = 0.2) => {
    return `polygon(0 0,0 100%,100% 100%, 100% 0%, calc(50% + ${offSet}rem) 0%, calc(50% + ${offSet}rem) ${gap}rem, calc(50% - ${offSet}rem) ${gap}rem, calc(50% - ${offSet}rem) 0%)`;
  };

  const borderOffset = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1],
    [borderClipPath(0), borderClipPath(0), borderClipPath(5)],
    { clamp: true }
  );

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  // });

  return (
    <div className="track" ref={ref}>
      <motion.div
        className="track__title"
        style={{
          top: isTitleTop ? 0 : titleOffset,
          y: "-50%",
          x: "-50%",
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ type: "tween", duration: 0.3, delay: 0.2 }}
        >
          Title
        </motion.span>
        <AnimatePresence>
          {!isTitleTop ? (
            <>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: isTitleTop ? 0 : [0, 50] }}
                style={{
                  overflow: "hidden",
                  height: isTitleTop ? 0 : subHeight,
                }}
                transition={{ height: { delay: 0.7 } }}
              >
                ksjdfkdjshfkjhdf
              </motion.div>
              <motion.div
                key="asd"
                style={{
                  overflow: "hidden",
                  height: isTitleTop ? 0 : subHeight,
                }}
              >
                ksjdf
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="main__border"
        animate={isTitleTop ? { clipPath: borderClipPath(5) } : false}
        style={{ clipPath: isTitleTop ? borderClipPath(5) : borderOffset }}
      ></motion.div>
      <div className="track__track" ref={trackRef}>
        {isTitleTop ? null : (
          <>
            <div id="section-1" className="track__rail"></div>
            <div id="section-2" className="track__test">
              <div className="track__test__content">Seciton 1</div>
            </div>
            <div id="section-3" className="track__test">
              <div className="track__test__content">Seciton 2</div>
            </div>
            <div id="section-4" className="track__rail">
              Seciton 3
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Track;
