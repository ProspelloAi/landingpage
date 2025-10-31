"use client";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type IntegrationColumnProps = {
  integrations: {
    name: string;
    role: string;
    quote: string;
    icon: string;
    width: number;
    height: number;
  }[];
  className?: string;
  isReversed?: boolean;
};

const IntegrationColumn = ({
  integrations,
  className,
  isReversed = false,
}: IntegrationColumnProps) => {
  return (
    <motion.div
      initial={{ y: isReversed ? "-50%" : 0 }}
      animate={{ y: isReversed ? 0 : "-50%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className={twMerge("flex flex-col gap-6 pb-4", className)}
      whileHover={{ animationPlayState: "paused" }}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <React.Fragment key={i}>
          {integrations.map(({ name, role, quote, icon, width, height }) => (
            <div
              key={name}
              className="bg-white border border-lime-400 rounded-2xl p-6 shadow-sm"
            >
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                “{quote}”
              </p>

              <div className="flex items-center gap-3">
                <Image
                  src={icon}
                  alt={name}
                  width={width}
                  height={height}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-sm">{name}</p>
                  <p className="text-xs text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default IntegrationColumn;
