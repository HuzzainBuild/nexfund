"use client";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Partnership from "@/components/Partnership";
import About from "@/components/About";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer";
import More from "@/components/More";
import Launchpad from "@/components/Launchpad";
import Contact from "@/components/Contact";
import Rating from "@/components/Rating";
import Partner from "@/components/Partner";

const Home = () => {
  return (
    <>
      <Hero />
      <Partnership />
      <Launchpad />
      <About />
      <Project />
      <Services />
      <More />
      <Testimonies />
      <Rating />
      {/* <Partner /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
