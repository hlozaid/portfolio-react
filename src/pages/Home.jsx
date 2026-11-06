import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div id="Home">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <About />
      <Contact />
      <Footer/>
    </div>
  );
}

export default Home;
