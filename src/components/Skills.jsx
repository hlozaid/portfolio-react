import React from "react";
import { skillsData } from "../assets/asstes";

const Skills = () => {
  return (
    <div id="Skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical
            <span className="text-[#B92B27] ml-2">Skills</span>
          </h2>
          <p className="text-xl mb-6 mx-w-3xl mx-auto ">
            Mastering the tools that power mordern web experiences{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="p-6 border bg-[#B92B27]/5 border-[#B92B27] rounded-xl text-center cursor-pointer hover:border-b-4 hover:border-b-[#B92B27] hover:border-r-4 hover:border-r-[#B92B27] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center border border-gray-300 bg-gray-50 mb-4">
                <skill.icon className="w-8 h-8 text-[#B92B27]" />
              </div>
              <h3 className="text-xl mb-2 font-bold text-zinc-600">
                {skill.title}
              </h3>
              <p className="text-sm text-zinc-500">
                {skill.technologies.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
