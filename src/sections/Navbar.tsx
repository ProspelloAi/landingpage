// "use client";
// import Image from "next/image";
// import Logo from "@/assets/images/logo.svg";
// import { Button } from "@/components/Button";
// import { useState } from "react";
// import { twMerge } from "tailwind-merge";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, ChevronDown } from "lucide-react";
// import Link from "next/link";

// const navLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   {
//     label: "Services",
//     href: "#services",
//     dropdown: [
//       {
//         label: "Custom Software Development",
//         desc: "End-to-end web, mobile, and SaaS solutions.",
//         image: "/services/custom-software.jpg",
//         href: "#custom-software",
//       },
//       {
//         label: "AI & Automation",
//         desc: "Leverage intelligent systems to automate workflows.",
//         image: "/services/ai.jpg",
//         href: "#ai-automation",
//       },
//       {
//         label: "Cloud & DevOps",
//         desc: "Deploy scalable, secure cloud infrastructure.",
//         image: "/services/cloud.jpg",
//         href: "#cloud-devops",
//       },
//       {
//         label: "UI/UX Design",
//         desc: "Craft beautiful and user-focused digital experiences.",
//         image: "/services/uiux.jpg",
//         href: "#uiux",
//       },
//       {
//         label: "Mobile App Development",
//         desc: "Native and cross-platform app development.",
//         image: "/services/mobile.jpg",
//         href: "#mobile-dev",
//       },
//       {
//         label: "MVP & POC",
//         desc: "We help startups and businesses validate ideas fast and cost-effectively.",
//         image: "/services/mvp.jpg",
//         href: "#mvp",
//       },
//       {
//         label: "Blockchain Solutions",
//         desc: "We develop decentralized applications and smart contracts.",
//         image: "/services/blockchain.jpg",
//         href: "#blockchain",
//       },
//       {
//         label: "Product Discovery",
//         desc: "We help businesses identify and prioritize their product features.",
//         image: "/services/product-discovery.jpg",
//         href: "#product-discovery",
//       },
//       {
//         label: "Data Science",
//         desc: "We help businesses leverage data for informed decision-making.",
//         image: "/services/data-science.jpg",
//         href: "#data-science",
//       },
//     ],
//   },
//   { label: "Industries", href: "#industries" },
//   { label: "Process", href: "#process" },
//   { label: "Testimonials", href: "#testimonials" },
//   { label: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hovered, setHovered] = useState<string | null>(null);

//   const clickHandler = () => setIsOpen((prev) => !prev);

//   return (
//     <>
//       <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
//         <div className="container max-w-5xl">
//           <div className="border border-gray-800/15 rounded-[27px] md:rounded-full bg-white/70 backdrop-blur relative">
//             <div className="grid grid-cols-2 lg:grid-cols-3 py-2 px-4 md:pr-2 items-center">
//               {/* Logo */}
//               <div>
//                 <Image
//                   src={Logo}
//                   alt="Layers logo"
//                   className="h-9 md:h-auto w-auto"
//                 />
//               </div>

//               {/* Desktop Nav */}
//               <div className="justify-center items-center hidden lg:flex relative">
//                 <nav className="flex gap-6 font-medium relative">
//                   {navLinks.map((link) => (
//                     <div
//                       key={link.label}
//                       className="relative flex flex-col items-center"
//                       onMouseEnter={() =>
//                         link.dropdown
//                           ? setHovered(link.label)
//                           : setHovered(null)
//                       }
//                       onMouseLeave={() => setHovered(null)}
//                     >
//                       <Link
//                         href={link.href}
//                         className="flex items-center gap-1 hover:text-gray-900 transition"
//                       >
//                         {link.label}
//                         {link.dropdown && (
//                           <ChevronDown
//                             size={14}
//                             className={`transition-transform duration-300  ${
//                               hovered === link.label ? "rotate-180" : ""
//                             }`}
//                           />
//                         )}
//                       </Link>

//                       {/* Dropdown */}
//                       <AnimatePresence>
//                         {hovered === link.label && link.dropdown && (
//                           <motion.div
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: 10 }}
//                             transition={{ duration: 0.25 }}
//                             className="absolute top-full mt-6 -translate-x-1/2 w-[900px] max-w-[60vw]
//              bg-white/80 backdrop-blur-2xl border border-gray-200 rounded-3xl
//              shadow-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-5 z-50"
//                           >
//                             {link.dropdown.map((item) => (
//                               <Link
//                                 key={item.label}
//                                 href={item.href}
//                                 className="group relative rounded-2xl overflow-hidden bg-white/60 hover:bg-white transition-all border border-gray-100 shadow-sm hover:shadow-lg"
//                               >
//                                 <div className="relative w-full h-32 overflow-hidden">
//                                   <Image
//                                     src={item.image}
//                                     alt={item.label}
//                                     fill
//                                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                                   />
//                                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                                 </div>
//                                 <div className="p-4">
//                                   <h3 className="font-semibold text-gray-900 mb-1">
//                                     {item.label}
//                                   </h3>
//                                   <p className="text-sm text-gray-600">
//                                     {item.desc}
//                                   </p>
//                                 </div>
//                               </Link>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ))}
//                 </nav>
//               </div>

//               {/* CTA + Mobile Menu */}
//               <div className="flex justify-end gap-4">
//                 <svg
//                   onClick={clickHandler}
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="feather feather-menu md:hidden cursor-pointer"
//                 >
//                   <line
//                     x1="3"
//                     y1="6"
//                     x2="21"
//                     y2="6"
//                     className={twMerge(
//                       "origin-left transition",
//                       isOpen && "rotate-45 -translate-y-1"
//                     )}
//                   ></line>
//                   <line
//                     x1="3"
//                     y1="12"
//                     x2="21"
//                     y2="12"
//                     className={twMerge(isOpen && "opacity-0")}
//                   ></line>
//                   <line
//                     x1="3"
//                     y1="18"
//                     x2="21"
//                     y2="18"
//                     className={twMerge(
//                       "origin-left transition",
//                       isOpen && "-rotate-45 translate-y-1"
//                     )}
//                   ></line>
//                 </svg>

//                 <button className="group relative bg-gray-700 text-white px-2 py-2 rounded-full flex items-center justify-between gap-3 transition-all duration-700 shadow-lg hover:shadow-xl overflow-hidden hover:bg-gray-700 border-2 border-transparent hover:border-gray-700">
//                   <span className="absolute right-1 w-8 h-8 bg-white rounded-full transition-all duration-500 ease-out group-hover:scale-[20] z-0"></span>
//                   <ArrowRight className="relative z-10 w-5 h-5 text-gray-700 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-150 ml-2" />
//                   <span className="relative z-10 font-medium group-hover:text-gray-700 group-hover:translate-x-3 transition-all duration-700 delay-100 mr-2 ">
//                     Get in Touch
//                   </span>
//                   <ArrowRight className="relative z-10 w-5 h-5 text-gray-900 group-hover:opacity-0 group-hover:translate-x-4 transition-all duration-300 " />
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Menu */}
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.div
//                   initial={{ height: 0 }}
//                   animate={{ height: "auto" }}
//                   exit={{ height: 0 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="flex flex-col items-center gap-4 py-2">
//                     {navLinks.map(({ label, href }) => (
//                       <a key={label} href={href}>
//                         {label}
//                       </a>
//                     ))}
//                     <Button variant="secondary">Log In</Button>
//                     <button className="group bg-gray-900 text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
//                       <span className="font-medium">Start Now</span>
//                       <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>
//       <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
//     </>
//   );
// };

// export default Navbar;

"use client";

import Image from "next/image";
import Logo from "../assets/images/logo.svg";
import { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      {
        label: "Custom Software Development",
        desc: "End-to-end web, mobile, and SaaS solutions.",
        image: "/services/custom-software.jpg",
        href: "#custom-software",
      },
      {
        label: "AI & Automation",
        desc: "Leverage intelligent systems to automate workflows.",
        image: "/services/ai.jpg",
        href: "#ai-automation",
      },
      {
        label: "Cloud & DevOps",
        desc: "Deploy scalable, secure cloud infrastructure.",
        image: "/services/cloud.jpg",
        href: "#cloud-devops",
      },
      {
        label: "UI/UX Design",
        desc: "Craft beautiful and user-focused digital experiences.",
        image: "/services/uiux.jpg",
        href: "#uiux",
      },
      {
        label: "Mobile App Development",
        desc: "Native and cross-platform app development.",
        image: "/services/mobile.jpg",
        href: "#mobile-dev",
      },
      {
        label: "MVP & POC",
        desc: "We help startups and businesses validate ideas fast and cost-effectively.",
        image: "/services/mvp.jpg",
        href: "#mvp",
      },
      {
        label: "Blockchain Solutions",
        desc: "We develop decentralized applications and smart contracts.",
        image: "/services/blockchain.jpg",
        href: "#blockchain",
      },
      {
        label: "Product Discovery",
        desc: "We help businesses identify and prioritize their product features.",
        image: "/services/product-discovery.jpg",
        href: "#product-discovery",
      },
    ],
  },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  // Ref to measure navbar container
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [navRect, setNavRect] = useState<DOMRect | null>(null);

  // Update navbar position & size on mount + resize
  useEffect(() => {
    const updateRect = () => {
      if (navContainerRef.current) {
        setNavRect(navContainerRef.current.getBoundingClientRect());
      }
    };

    updateRect();
    window.addEventListener("resize", updateRect);
    return () => window.removeEventListener("resize", updateRect);
  }, []);

  const clickHandler = () => setIsOpen((prev) => !prev);

  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        {/* Navbar Container with Ref */}
        <div ref={navContainerRef} className="container max-w-5xl">
          <div className="border border-gray-800/15 rounded-[27px] md:rounded-full bg-white/70 backdrop-blur relative">
            <div className="grid grid-cols-2 lg:grid-cols-3 py-2 px-4 md:pr-2 items-center">
              {/* Logo */}
              <div>
                <Image
                  src={Logo}
                  alt="tech logo"
                  className="h-9 md:h-auto w-auto"
                />
              </div>

              {/* Desktop Nav */}
              <div className="justify-center items-center hidden lg:flex relative">
                <nav className="flex gap-6 font-medium relative">
                  {navLinks.map((link) => (
                    <div
                      key={link.label}
                      className="relative flex flex-col items-center"
                      onMouseEnter={() =>
                        link.dropdown
                          ? setHovered(link.label)
                          : setHovered(null)
                      }
                      onMouseLeave={() => setHovered(null)}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center gap-1 hover:text-gray-900 transition"
                      >
                        {link.label}
                        {link.dropdown && (
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${
                              hovered === link.label ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>

              {/* CTA + Mobile Menu Button */}
              <div className="flex justify-end gap-4">
                {/* Mobile Menu Icon */}
                <svg
                  onClick={clickHandler}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden cursor-pointer"
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  />
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge(isOpen && "opacity-0")}
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  />
                </svg>

                <button className="group relative bg-gray-700 text-white px-2 py-2 rounded-full flex items-center justify-between gap-3 transition-all duration-700 shadow-lg hover:shadow-xl overflow-hidden hover:bg-gray-700 border-2 border-transparent hover:border-gray-700">
                  <span className="absolute right-1 w-8 h-8 bg-white rounded-full transition-all duration-500 ease-out group-hover:scale-[20] z-0" />
                  <ArrowRight className="relative z-10 w-5 h-5 text-gray-700 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-150 ml-2" />
                  <span className="relative z-10 font-medium group-hover:text-gray-700 group-hover:translate-x-3 transition-all duration-700 delay-100 mr-2">
                    Get in Touch
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-gray-900 group-hover:opacity-0 group-hover:translate-x-4 transition-all duration-300" />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-2">
                    {navLinks.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="text-gray-700 hover:text-gray-900"
                      >
                        {label}
                      </a>
                    ))}

                    <button className="group bg-gray-900 text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                      <span className="font-medium">Start Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {hovered === "Services" && navRect && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: navRect.top + navRect.height,
              left: navRect.left,
              width: navRect.width,
            }}
            className="
              bg-white/80 backdrop-blur-2xl border border-gray-200
              rounded-b-3xl shadow-2xl p-6
              grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
              overflow-hidden z-[9999] rounded-2xl  mt-4
            "
            onMouseEnter={() => setHovered("Services")}
            onMouseLeave={() => setHovered(null)}
          >
            {navLinks
              .find((link) => link.label === "Services")
              ?.dropdown?.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative rounded-2xl overflow-hidden bg-white/60 hover:bg-white transition-all border border-gray-100 shadow-sm hover:shadow-lg"
                >
                  <div className="relative w-full h-32 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.label}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content overlap */}
      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
    </>
  );
};

export default Navbar;
