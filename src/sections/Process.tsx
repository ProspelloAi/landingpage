"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Tag from "../components/Tag";
import { Search, Code2, Rocket } from "lucide-react";

interface Step {
  number: string;
  title: string;
  time: string;
  bg: string;
  text: string;
  stepText: string;
  border: string;
  shadow: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Research & Planning",
    time: "WEEK 01",
    bg: "bg-white",
    text: "text-gray-900",
    stepText: "text-gray-500",
    border: "border-gray-300",
    shadow: "shadow-md",
    icon: <Search className="w-5 h-5" />,
  },
  {
    number: "02",
    title: "Platform Integration",
    time: "WEEK 01 - WEEK 02",
    bg: "bg-gradient-to-r from-gray-900 to-gray-800",
    text: "text-white",
    stepText: "text-gray-300",
    border: "border-transparent",
    shadow: "shadow-xl",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    number: "03",
    title: "Launch Execution",
    time: "WEEK 02 - WEEK 03",
    bg: "bg-white",
    text: "text-gray-900",
    stepText: "text-gray-500",
    border: "border-gray-300",
    shadow: "shadow-md",
    icon: <Rocket className="w-5 h-5" />,
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <section id="process" ref={ref} className="py-24 ">
      <div className="container max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <Tag>Our Process</Tag>
          <Tag className="border-emerald-400 text-emerald-700">03 Steps</Tag>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center text-3xl md:text-4xl font-medium text-gray-900 max-w-3xl mx-auto leading-tight"
        >
          Bridging timeless brand principles with{" "}
          <br className="hidden md:block" />
          tomorrow’s digital possibilities.
        </motion.h2>

        <div className="mt-20 relative">
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            viewBox="0 0 1000 320"
            preserveAspectRatio="none"
            style={{ willChange: "transform" }}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 250,90 Q 500,160 750,90"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={lineVariants}
              style={{ willChange: "pathLength" }}
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: idx * 0.3,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className={`flex flex-col items-center ${
                  idx === 1 ? "md:mt-20" : ""
                }`}
                style={{ contain: "layout" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`
                    group relative z-10 mb-8 transition-shadow duration-300
                    ${step.bg} ${step.text} ${step.border} ${step.shadow}
                    rounded-full px-6 py-4 flex items-center gap-3 min-w-[240px]
                    ring-4 ring-transparent hover:ring-lime-400
                    will-change-transform
                  `}
                >
                  <div
                    className={`p-2 rounded-full ${
                      idx === 1 ? "bg-lime-400" : "bg-lime-400"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <span
                      className={`block text-xs font-medium ${step.stepText}`}
                    >
                      Step {step.number}
                    </span>
                    <span className="font-bold text-lg">{step.title}</span>
                  </div>
                </motion.div>

                <div className="flex items-center gap-3 text-sm">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      delay: idx * 0.3 + 0.8,
                      type: "spring",
                      stiffness: 500,
                    }}
                    className="w-2 h-2 rounded-full bg-lime-500"
                  />
                  <span className="text-gray-500">Time</span>
                  <span className="font-semibold text-gray-700">
                    {step.time}
                  </span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      delay: idx * 0.3 + 0.8,
                      type: "spring",
                      stiffness: 500,
                    }}
                    className="w-2 h-2 rounded-full bg-emerald-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
