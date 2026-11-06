import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="Contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 ">
            Get In <span className="text-[#B92B27]">Touch</span>
          </h1>
          <p className="mb-2">
            Have a Project in mind or want to dicuss potential opportunities.
          </p>
        </div>
        <div className=" max-w-3xl mx-auto ">
          <form className="space-y-6">
            <div className="grid grid-cold-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                className="px-4 py-3 w-full h-40 border border-zinc-500 rounded outline-none"
                placeholder="Message"
              />
            </div>
            <div className="flex items-center justify-center">
                <button className="flex items-center gap-2 px-8 py-4 bg-zinc-800 text-white text-center cursor-pointer hover:bg-zinc-900 transition rounded-full">Send Message
                    <FaArrowRight/>
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
