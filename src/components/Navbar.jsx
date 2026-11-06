import React, { useState } from "react";
import { navMenu } from "../assets/asstes.js";
import { FaArrowRight } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

 
  const scrollToResume = () => {
    const el = document.getElementById("resume-download");
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "center" });

    el.classList.add("ring-4", "ring-[#B92B27]/40");
    setTimeout(() => {
      el.classList.remove("ring-4", "ring-[#B92B27]/40");
    }, 1500);
  };

  return (
    <div className="fixed top-0 left-0 w-full py-4 z-50 bg-white/30 backdrop-blur-md border-b border-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="text-2xl font-bold text-zinc-800">
            <span>MOHD </span>
            <span className="text-[#B92B27] font-poppins">ZAID</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 border border-white/40 bg-white/20 backdrop-blur-sm rounded-full px-10 py-4">
            {navMenu.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="hover:text-[#B92B27] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToResume}
              className="group hidden sm:flex gap-2 items-center px-6 md:px-10 py-3 md:py-4 bg-black rounded-full text-slate-200 hover:bg-[#B92B27] hover:text-white transition duration-300 cursor-pointer"
            >
              Resume
              <FaArrowRight className="text-gray-500 text-sm group-hover:text-white transition-colors duration-300" />
            </button>

            {/* Hamburger (mobile/tab only) */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden text-3xl text-zinc-800 cursor-pointer"
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (smooth open/close) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 border border-white/40 bg-white/40 backdrop-blur-md rounded-2xl p-4">
            {navMenu.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="py-3 px-4 rounded-xl hover:bg-white/50 hover:text-[#B92B27] transition-colors duration-300"
              >
                {item}
              </a>
            ))}

            {/* Resume button inside menu for very small screens */}
            <button
              onClick={() => {
                setOpen(false);
                scrollToResume();
              }}
              className="sm:hidden mt-2 flex gap-2 items-center justify-center px-6 py-3 bg-black rounded-full text-slate-200 hover:bg-[#B92B27] hover:text-white transition duration-300"
            >
              Resume
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;