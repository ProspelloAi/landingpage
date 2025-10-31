"use client";
import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import teamImage from "../assets/images/about_team.avif";
// import designExample1Img from "../assets/images/design-example-1.png";
// import designExample2Img from "@/assets/images/design-example-2.png";
import Image from "next/image";
// import Pointer from "../components/Pointer";
import cursorImg from "../assets/images/cursor-you.svg";
import { ArrowRight } from "lucide-react";
import Tag from "../components/Tag";

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();

  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, [
    leftDesignAnimate,
    leftPointerAnimate,
    rightDesignAnimate,
    rightPointerAnimate,
    leftDesignScope,
    leftPointerScope,
    rightDesignScope,
    rightPointerScope,
  ]);

  return (
    <>
      <section
        className="py-24 overflow-x-clip relative"
        style={{ cursor: `url(${cursorImg.src}), auto` }}
      >
        <div className="container relative z-10">
          <motion.div
            ref={leftDesignScope}
            initial={{ opacity: 0, y: 100, x: -100 }}
            drag
            className="hidden lg:block absolute -left-40 top-16 z-0"
          >
            {/* <Image
              src={designExample1Img}
              alt="1 design example"
              draggable="false"
            /> */}
          </motion.div>
          <motion.div
            ref={rightDesignScope}
            initial={{ opacity: 0, x: 100, y: 100 }}
            drag
            className="hidden lg:block absolute -right-44 -top-32 z-0"
          >
            {/* <Image
              src={designExample2Img}
              width={320}
              height={220}
              alt="2 design example"
              draggable="false"
            /> */}
          </motion.div>
          <motion.div
            ref={leftPointerScope}
            initial={{ opacity: 0, y: 100, x: -200 }}
            className="hidden lg:block absolute left-56 top-96 z-20"
          >
            {/* <Pointer name="Andrea" /> */}
          </motion.div>
          <motion.div
            ref={rightPointerScope}
            initial={{ opacity: 0, x: 275, y: 100 }}
            className="hidden lg:block absolute right-80 -top-4 z-20"
          >
            {/* <Pointer name="Bryan" color="red" /> */}
          </motion.div>
          <div className="flex justify-center">
            <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
              ✨ Tech Company
            </div>
          </div>
          <div className="relative z-10">
            <h1 className="text-6xl md:text-7xl lg:text-[5.8rem] font-medium text-center mt-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent">
              Empowering Innovation. Delivering Scalable Technology.
            </h1>
            <p className="text-center text-xl text-gray-600 mt-8 max-w-2xl mx-auto">
              We&apos;re a Dubai-based technology company building
              next-generation digital products, cloud solutions, and AI-driven
              platforms that accelerate business growth and efficiency.
            </p>
            <form className="flex border border-gray-800/20 focus-within:border-lime-400 bg-white/5 backdrop-blur-sm rounded-full p-2 mt-8 max-w-lg mx-auto transition-colors">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 md:flex-1 w-full focus-within:outline-none text-gray-700 rounded-full placeholder:text-gray-500"
              />
              <button className="group bg-gray-700 text-white px-6 py-2 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                <span className="font-medium">Start Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="relative " id="about">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Tag>About Us</Tag>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Where brand integrity meets digital possibility.
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                We are a multidisciplinary tech studio rooted in the cultural
                heart of Dubai. Our passion is to craft visionary solutions for
                ambitious brands — blending local insights with global
                perspectives.
              </p>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src={teamImage}
                  alt="Our Team Collaborating"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
