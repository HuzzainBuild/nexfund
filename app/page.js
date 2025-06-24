"use client";

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
import Work from "@/components/Work";
import { useEffect } from "react";
import Lenis from "lenis";

const Home = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
      {/* <Partnership /> */}
      <Partner />
      {/* <Launchpad /> */}
      <About />
      {/* <Project /> */}
      <Services />
      <Work />
      <More />
      <Testimonies />
      <Rating />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
