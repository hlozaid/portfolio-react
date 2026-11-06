import {
  FaCode,
  FaDesktop,
  FaMicrochip,
  FaMobile,
  FaReact,
  FaSchool,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";
import profileImg from "../assets/profile.avif";
import { FaProjectDiagram } from "react-icons/fa";

export const assets = {
  profileImg,
};

export const navMenu = ["Home", "Work", "Skills", "About", "Contact"];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/mohdzaid18",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/hlozaid",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/__zaidgaur",
  },
];

export const skillsData = [
  {
    icon: FaMicrochip,
    title: "Backend",
    technologies: ["JavaScript","Node.js", "Express", "Core Java","Python"],
  },
  {
    icon: FaReact,
    title: "Frontend",
    technologies: ["React", "HTML", "Css", "Tailwindcss", "Bootstrap"],
  },
  {
    icon: FaDesktop,
    title: "Databases",
    technologies: ["MongoDB", "MySQL",],
  },
  {
    icon: FaCode,
    title: "DevOps",
    technologies: ["Git", "Github", "Docker",],
  },
  {
    icon: FaMobile,
    title: "Mobile",
    technologies: ["React Native", "Android", "Flutter", "Java"],
  },
];

export const projectData = [
  {
    title: "Wanderlust",
    description:
      "Wanderlust is an Airbnb-style web app where users can browse travel stays, list their own properties with photos, and leave reviews. It is a full-stack project built with Node.js, Express, MongoDB and EJS, following the MVC pattern.",
    image:
      "https://images.unsplash.com/photo-1657256031855-68029292ff34?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tech: ["Node.js", "Express", "MongoDB", "Ejs", "Bootstrap"],
  },
  {
    title: "Weather Web App",
    description:
      "A modern furniture e-commerce platform offering customizable home and office furniture .",
    image:
      "https://images.unsplash.com/photo-1579806591795-82fa34772482?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tech: ["React", "Material UI", "OpenWeatherMap API"],
  },
  {
    title: "Portfolio",
    description:
      "Modern web developer passionate about crafting responsive, fast, and user-centric web applications. Built using React and Tailwind CSS with a focus on clean code and interactive design.",
    image:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tech: ["React", "Tailwindcss"],
  },
  {
    title: "Abmbivista",
    description: "A mood-based interior design suggestion tool that uses AI",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2plY3R8ZW58MHx8MHx8fDA%3D",
    tech: ["Django", "Tailwindcss", "Python", "Rest"],
  },
];

export const profileData = [
  {
    icon: FaCode,
    title: "Skills",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "MongoDB",
      "MySQL",
      "Node.js",
      "Express.js",
      "Core Java",
      "TailwindCSS",
    ],
  },
  {
    icon: FaSchool, // College/Degree ke liye FaGraduationCap bhi behtar lagega
    title: "Education",
    technologies: ["MCA(AKTU) - 2024", "BCA(CCSU) - 2022"],
  },
  {
    icon: FaProjectDiagram,
    title: "Projects",
    technologies: ["Built more than 25+"],
  },
];
