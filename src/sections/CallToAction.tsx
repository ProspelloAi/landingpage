"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CallToAction = () => {
  const animationRef = useRef<AnimationPlaybackControls>();
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate();

  const hoverHandler = () => {
    setIsHovered(true);
  };
  const leaveHandler = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    animationRef.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, []);

  useEffect(() => {
    if (animationRef.current) {
      if (isHovered) {
        animationRef.current.speed = 0.5;
      } else {
        animationRef.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="py-4">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          onMouseEnter={hoverHandler}
          onMouseLeave={leaveHandler}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span className="group-hover:text-lime-400">
                We’re a global team
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
