"use client";

import Image from "next/image";
import CanvasVideo from "./CanvasVideo";

import { motion as m } from "motion/react";
import { fadeIn, textVariant } from "@/utils/motion";
import Button from "./Button";
import Orb from "./Orb";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-white z-10 hero-wrapper"
    >
      <CanvasVideo videoSrc="/videos/galaxy.mp4" className="-z-1" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col gap-4 bg-transparent">
        <m.h1
          variants={fadeIn("up", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="text-3xl md:text-5xl font-bold hero_title"
        >
          Accelerating the Future of{" "}
          <span className="gradient_text">
            Web3 — Capital, Connections, and Credibility.
          </span>
        </m.h1>
        <m.p
          variants={textVariant(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-4 text-lg md:text-xl text-gray-300 hero_subtitle font-semibold"
        >
          NexFund Labs helps Web3, Crypto startups raise capital, secure OTC
          deals, and achieve successful listings — backed by our exclusive
          network and strategic ecosystem partnerships.
        </m.p>
      </div>

      <div className="z-1 mt-10">
        <m.div
          variants={fadeIn("up", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <a href="#contact">
            <Button type={"btn"} title={"Get Started"} />
          </a>
        </m.div>
      </div>

      <div
        style={{ width: "600px", height: "600px" }}
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 bg-black"
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
    </section>
  );
};

export default Hero;
