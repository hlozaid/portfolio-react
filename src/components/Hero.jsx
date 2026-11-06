import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { assets } from "../assets/asstes";

function Hero() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10">
              <span className="text-zinc-700">Mern Stack</span>
              <br />
              <span className="text-[#B92B27]">Developer</span>
            </h1>

            <p className="text-xl text-zinc-900 mb-6">
              I build scalable, responsive web applications at the intersection
              of intuitive front-end design and robust back-end architecture,
              delivering clean, API-driven solutions built for real-world
              performance.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => handleScroll("Work")}
                className="group flex gap-2 items-center px-10 py-4 bg-black rounded-full text-slate-200 hover:bg-[#B92B27] hover:text-white transition duration-300 cursor-pointer"
              >
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll("Contact")}
                className="group flex items-center gap-2 border border-slate-400 rounded-full px-10 py-4 hover:border-[#B92B27] hover:text-[#B92B27] transition duration-300 cursor-pointer"
              >
                Contact Me
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 floating">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow">
                <img
                  className="w-full h-full object-cover"
                  src={assets.profileImg}
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
