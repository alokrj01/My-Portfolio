import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiArrowUpLine } from "react-icons/ri";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  // Detect scroll for button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.offsetTop - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 800; // animation duration (ms)
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = easeInOutCubic(progress);
      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Certifications", id: "certifications" },
    { name: "Insights", id: "admin" },
  ];

  const socials = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/Alokrj01" },
    { icon: <FaTwitter />, link: "https://x.com/alokrj_" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/alok-ranjan972",
    },
    { icon: <FaInstagram />, link: "https://www.instagram.com/alokrj_" },
    { icon: <SiLeetcode />, link: "https://leetcode.com/" },
  ];

  return (
    <>
      <footer
        className="relative text-white py-10 px-5 sm:px-[7vw] lg:px-[20vw]
        border-t border-white/10 bg-gradient-to-b from-transparent to-black/40"
      >
        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section */}
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-purple-500">&lt;</span>
              Alok
              <span className="text-purple-500">/</span>
              Ranjan
              <span className="text-purple-500">&gt;</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-sm">
              FullStack Developer focused on scalable web applications, clean
              architecture and modern user experiencs.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-6 text-xl">
              {socials.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:items-end gap-4">
            {navItems.map((item) =>
              item.id === "admin" ? (
                <button
                  key={item.id}
                  onClick={() => (window.location.href = "/admin")}
                  className=" text-gray-400 hover:text-purple-400 transition "
                >
                  {item.name}
                </button>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className=" text-gray-400 hover:text-purple-400 transition "
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mt-8"></div>

        {/* Copyright */}
        <p className="text-sm text-center text-gray-500 mt-4">
          Copyright© {new Date().getFullYear()} Alok Ranjan. All rights
          reserved.
        </p>
      </footer>

      {/* Scroll To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            group
            fixed bottom-6 right-6 z-50
            w-12 h-12 md:w-14 md:h-14
            rounded-full
            bg-gradient-to-r from-purple-600 to-pink-500
            text-white flex items-center justify-center
            shadow-lg shadow-purple-500/40
            hover:scale-110 hover:shadow-pink-500/50
            transition-all duration-300
          "
        >
          <RiArrowUpLine className="text-2xl md:text-3xl transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      )}
    </>
  );
};

export default Footer;
