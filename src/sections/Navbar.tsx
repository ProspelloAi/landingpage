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
        desc: "Validate ideas fast and cost-effectively.",
        image: "/services/mvp.jpg",
        href: "#mvp",
      },
      {
        label: "Blockchain Solutions",
        desc: "Develop decentralized apps and smart contracts.",
        image: "/services/blockchain.jpg",
        href: "#blockchain",
      },
      {
        label: "Product Discovery",
        desc: "Identify and prioritize product features.",
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
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [openServiceMenu, setOpenServiceMenu] = useState(false);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const [navRect, setNavRect] = useState<DOMRect | null>(null);

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

  const toggleMobileMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div ref={navContainerRef} className="container max-w-5xl">
          <div className="border border-gray-800/15 rounded-[27px] md:rounded-full bg-white/70 backdrop-blur relative">
            <div className="grid grid-cols-2 lg:grid-cols-3 py-2 px-4 md:pr-2 items-center">
              <div>
                <Image
                  src={Logo}
                  alt="tech logo"
                  className="h-9 md:h-auto w-auto"
                />
              </div>

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

              <div className="flex justify-end gap-4">
                <svg
                  onClick={toggleMobileMenu}
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

                <button className="group relative bg-gray-700 text-white px-2 py-2 rounded-full items-center justify-between gap-3 transition-all duration-700 shadow-lg hover:shadow-xl overflow-hidden hover:bg-gray-700 border-2 border-transparent hover:border-gray-700 hidden md:flex">
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
                  initial={{ height: 0, opacity: 0, y: -10 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden bg-white/90 backdrop-blur-md border-t border-gray-200 rounded-b-3xl shadow-lg"
                >
                  <div className="flex flex-col items-center gap-3 py-5 px-6 max-h-[85vh] overflow-y-auto">
                    {navLinks.map(({ label, href, dropdown }) => (
                      <div key={label} className="w-full text-center">
                        {dropdown ? (
                          <>
                            <button
                              onClick={() =>
                                setOpenServiceMenu((prev) => !prev)
                              }
                              className="flex justify-center items-center w-full text-gray-900 font-semibold py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all gap-2"
                            >
                              {label}
                              <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${
                                  openServiceMenu ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {openServiceMenu && (
                                <motion.div
                                  initial={{ opacity: 0, y: -8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -8 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-3 max-h-[260px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent rounded-xl"
                                >
                                  {dropdown.map((item) => (
                                    <Link
                                      key={item.label}
                                      href={item.href}
                                      className="block text-sm text-gray-700 font-medium py-2 px-4 bg-white border border-gray-100 rounded-xl hover:bg-gray-50 hover:text-gray-900 shadow-sm transition-all mb-1"
                                      onClick={() => {
                                        setIsOpen(false);
                                        setOpenServiceMenu(false);
                                      }}
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={href}
                            className="block text-gray-900 font-semibold py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all"
                            onClick={() => setIsOpen(false)}
                          >
                            {label}
                          </Link>
                        )}
                      </div>
                    ))}

                    <button className="group bg-gray-900 text-white px-8 py-3 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl mt-4">
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
            className="bg-white/80 backdrop-blur-2xl border border-gray-200 rounded-b-3xl shadow-2xl p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-hidden z-[9999] rounded-2xl mt-4"
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

      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
    </>
  );
};

export default Navbar;
