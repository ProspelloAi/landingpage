"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Tag from "../components/Tag";
import IntegrationColumn from "../components/IntegrationColumn";

// Match IntegrationColumn expected type
type Testimonial = {
  name: string;
  role: string;
  quote: string;
  icon: string;
  width: number;
  height: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    quote:
      "Tech transformed our legacy systems into a modern, scalable platform. Their team delivered ahead of schedule with zero downtime.",
    icon: "/avatars/sarah.jpg",
    width: 40,
    height: 40,
  },
  {
    name: "Marcus Johnson",
    role: "Founder of Nexlify",
    quote:
      "The AI‑powered analytics they built gave us insights we never thought possible. Revenue up 42% in Q1.",
    icon: "/avatars/marcus.jpg",
    width: 40,
    height: 40,
  },
  {
    name: "Priya Patel",
    role: "Head of Design, Creativa",
    quote:
      "Their UX team understood our brand from day one. The redesign increased user engagement by 78%.",
    icon: "/avatars/priya.jpg",
    width: 40,
    height: 40,
  },
  {
    name: "Alex Rivera",
    role: "CEO, StartUpX",
    quote:
      "From MVP to launch in 6 weeks. Their startup expertise is unmatched. We’re now at 100K MAU.",
    icon: "/avatars/alex.jpg",
    width: 40,
    height: 40,
  },
  {
    name: "Emma Wilson",
    role: "VP Engineering, DataCore",
    quote:
      "Automated testing suite caught 200+ bugs before launch. Their QA process is bulletproof.",
    icon: "/avatars/emma.jpg",
    width: 40,
    height: 40,
  },
  {
    name: "James Liu",
    role: "Product Lead, FinTech Pro",
    quote:
      "Seamless mobile app with native performance. Cross‑platform magic that feels truly native.",
    icon: "/avatars/james.jpg",
    width: 40,
    height: 40,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="py-24 overflow-hidden ">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          {/* LEFT – Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <Tag>Testimonials</Tag>
            <h2 className="text-6xl font-medium mt-6">
              Loved by <span className="text-lime-400">teams</span>
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Don’t just take our word for it — hear from the leaders who’ve
              scaled faster, launched smarter, and built better with Tech.
            </p>
          </motion.div>

          {/* RIGHT – Infinite scroll */}
          <div className="mt-8 lg:mt-0">
            <div
              className={`
                h-[400px] lg:h-[800px] overflow-hidden
                grid grid-cols-1 md:grid-cols-2 gap-4
                [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
              `}
            >
              <IntegrationColumn integrations={testimonials} className="pb-4" />
              <IntegrationColumn
                integrations={testimonials.slice().reverse()}
                isReversed
                className="hidden md:flex pb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
