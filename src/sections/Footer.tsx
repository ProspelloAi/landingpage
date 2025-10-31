// import logo from "@/assets/images/logo.svg";
// import Image from "next/image";

// const footerLinks = [
//   { href: "#", label: "Contact" },
//   { href: "#", label: "Privacy Policy" },
//   { href: "#", label: "Terms & Conditions" },
// ];

// const Footer = () => {
//   return (
//     <footer className="py-16">
//       <div className="container">
//         <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
//           <div>
//             <Image src={logo} alt="logo" />
//           </div>
//           <div>
//             <nav className="flex gap-6">
//               {footerLinks.map(({ href, label }) => (
//                 <a key={label} href={href} className="text-gray-800 text-sm">
//                   {label}
//                 </a>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Send, MapPin, Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", company: "", email: "", message: "" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className=" py-16 border-t border-gray-200">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Contact Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8">
              Let’s Build the <span className="text-lime-400">Future</span>{" "}
              Together.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 outline-none transition"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 outline-none transition"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 outline-none transition"
              />

              <textarea
                name="message"
                placeholder="Project Type / Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 outline-none transition resize-none"
              />

              <button
                type="submit"
                className="group flex items-center gap-2 bg-lime-400 text-gray-900 font-medium px-6 py-3 rounded-xl hover:bg-lime-500 transition-all duration-200"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* RIGHT: Contact Info + Links */}
          <div className="space-y-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Contact Us
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-lime-400" />
                  <span>
                    3rd Floor, Moh'd Ibrahim Siddiqi Building <br />- opposite
                    Spinneys - Dubai
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-lime-400" />
                  <a
                    href="mailto:hello@tech.com"
                    className="hover:text-lime-400 transition"
                  >
                    hello@tech.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-lime-400" />
                  <a
                    href="tel:+971501234567"
                    className="hover:text-lime-400 transition"
                  >
                    +971 05 6301 9725
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-lime-400" />
                  <a href="#" className="hover:text-lime-400 transition">
                    www.tech.com
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 pt-8 border-t border-gray-200">
              <div>
                <Image src={logo} alt="tech" width={140} height={40} />
              </div>

              <nav className="flex gap-6 text-sm text-gray-600">
                <a href="#" className="hover:text-lime-400 transition">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-lime-400 transition">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-lime-400 transition">
                  Careers
                </a>
              </nav>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} tech. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
