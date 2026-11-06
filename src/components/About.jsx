import React from "react";
import { profileData, assets } from "../assets/asstes";
import { FaArrowDown } from "react-icons/fa6";

const About = () => {
  return (
    <div id="About" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-6 items-center">
          {/* 1. Heading + description */}
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center lg:text-left">
              <span>About</span>
              <span className="text-[#B92B27] ml-2">Me</span>
            </h2>
            <p className="text-base md:text-lg mb-4 leading-7 md:leading-8 text-center lg:text-left">
              Hi, I'm
              <span className="text-[#B92B27] font-semibold ml-1">
                Mohd Zaid
              </span>
              , a Full-Stack MERN Developer with an MCA background and formal
              software apprenticeship training. I design and engineer modern web
              applications, combining clean front-end UI in React with
              high-performance backends and REST APIs in Node.js and MongoDB.
            </p>
            <p className="text-base md:text-lg leading-7 md:leading-8 text-center lg:text-left">
              From architecting database schemas to deploying production-ready
              platforms on Render, I love turning complex logic into smooth,
              accessible user experiences.
            </p>
          </div>

          {/* 2. Photo */}
          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-3 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="rounded overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={assets.profileImg}
                  alt="Mohd Zaid"
                />
              </div>
            </div>
          </div>

          {/* 3. Language / Education / Projects cards */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {profileData.map((data, index) => (
              <div
                key={index}
                className="w-full p-5 sm:p-6 border border-zinc-400 rounded hover:border-zinc-600 cursor-pointer hover:border-b-4 hover:border-r-4 hover:border-b-[#B92B27] hover:border-r-[#B92B27] transition duration-300 hover:-translate-y-1"
              >
                <data.icon className="text-3xl mb-3 sm:mb-4 text-[#B92B27]" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
                  {data.title}
                </h3>
                <p className="text-sm sm:text-base">
                  {data.technologies.join(", ")}
                </p>
              </div>
            ))}
          </div>

          {/* 4. Download Resume */}
          <div className="order-4 lg:col-start-1 lg:row-start-3 flex justify-center lg:justify-start">
            <a
              href="/Resume.pdf"
              download="Mohd_Zaid_Resume.pdf"
              className="inline-block px-8 py-4 bg-zinc-700 text-white rounded-full cursor-pointer transition duration-300 hover:bg-zinc-900"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
