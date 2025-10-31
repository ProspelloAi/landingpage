"use client";

import Tag from "../components/Tag";
import {
  MessageCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Brain,
  Rocket,
  Palette,
  CheckCircle,
} from "lucide-react";

const industries = [
  {
    title: "Web Development",
    description:
      "Custom web solutions built to match your unique business needs — scalable, secure, and built for performance.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Mobile Development",
    description:
      "Intuitive, high-performance mobile apps designed to captivate users and drive engagement across platforms.",
    icon: <Smartphone className="w-6 h-6" />,
    note: "When to go native or cross-platform?",
  },
  {
    title: "AI / ML Development",
    description:
      "tech builds AI-driven features and data insights that enhance your products and streamline operations.",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "Startups, MVPs & POCs",
    description:
      "Quick prototyping to validate ideas and gain market feedback with lean, scalable MVPs and proof-of-concept prototypes.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: "UX / UI Design",
    description:
      "Thoughtful, user-centered designs that combine aesthetics with functionality and align well with development for seamless digital experiences.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "QA & Testing",
    description:
      "Comprehensive manual and automated testing to ensure your product is robust, reliable, and ready to launch.",
    icon: <CheckCircle className="w-6 h-6" />,
    note: "Self-testing is key to success",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-transparent">
      <div className="container">
        <div className="flex justify-center">
          <Tag>What We Offer</Tag>
        </div>
        <h2 className="text-5xl md:text-6xl font-medium text-center mt-6 max-w-4xl mx-auto text-gray-800">
          We offer a custom <br className="hidden md:block" />
          approach to your needs
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`
                group relative bg-gray-700 backdrop-blur-sm border border-white/10 
                rounded-2xl p-6 hover:bg-gray-800/80 transition-all duration-300
                ${index === 1 || index === 5 ? "lg:col-span-1" : ""}
              `}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="text-lime-400">{industry.icon}</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mt-4">
                {industry.title}
              </h3>
              <p className="text-white text-sm mt-2 leading-relaxed">
                {industry.description}
              </p>

              {industry.note && (
                <div className="mt-4 inline-flex items-center gap-2 bg-neutral-700/50 border border-white/10 rounded-full px-4 py-2 text-xs text-neutral-100 group-hover:border-lime-400/50 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{industry.note}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              )}
            </div>
          ))}
        </div>
        <hr className="mt-16 border-t border-gray-200" />
      </div>
    </section>
  );
};

export default Industries;
