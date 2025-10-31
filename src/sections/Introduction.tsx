"use client";
import { useScroll, useTransform } from "framer-motion";
import Tag from "@/components/Tag";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `Founded in Dubai, our mission is to help businesses transform ideas into impactful digital
solutions. With a team of developers, designers, and strategists, we blend creativity,
technology, and business insight to deliver products that scale globally.`;
const words = text.split(" ");

const Introduction = () => {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currWord, setCurrWord] = useState(0);

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="py-12 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>About us</Tag>
          </div>

          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>
              We’re Not Just Developers — We’re Your Technology Partners.
            </span>{" "}
            <span className="">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={twMerge(
                    "transition duration-500 text-gray-500/15",
                    index < currWord && "text-gray-700"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            {/* <span className="text-lime-400 block">
              That&apos;s why we built TechCompany.
            </span> */}
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
};

export default Introduction;
