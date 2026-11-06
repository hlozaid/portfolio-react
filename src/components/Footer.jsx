import React from "react";
import { socialLinks } from "../assets/asstes";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="uppercase text-2xl font-bold">Mohd Zaid</span>

          <div className="flex gap-6">
            {socialLinks.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-2xl text-zinc-900 hover:text-[#B92B27] transition-colors duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-200 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Mohd Zaid. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;