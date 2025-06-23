"use client";

import Image from "next/image";

import { motion as m } from "motion/react";
import { zoomIn, fadeIn, textVariant } from "@/utils/motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-[50px] md:py-[100px] px-5 md:px-8 flex flex-col items-center justify-center gap-4 md:gap-6 relative overflow-x-hidden"
    >
      <div className="gradient-03 z-0"></div>

      <div className="w-full flex flex-col gap-6 items-center justify-center text-center z-1">
        <m.p
          variants={zoomIn(0.1, 0.5)}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          initial="hidden"
          className="start w-auto"
        >
          About us
        </m.p>

        <m.h1
          variants={fadeIn("up", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-2xl md:text-3xl text-center font-bold text-white"
        >
          About NexFund Labs
        </m.h1>
      </div>

      <div className="grid md:grid-cols-4 gap-8 md:gap-10 md:max-w-[70rem] w-full mx-auto mt-8 z-1">
        {/* WHO WE ARE */}
        <m.div
          variants={fadeIn("right", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="card border border-gray-800 rounded-md relative bg-black grid grid-rows-2 gap-2 overflow-hidden col-span-2 row-span-2 md:h-[680px]"
        >
          <div className="flex flex-col gap-2 p-4 md:p-6">
            <h2 className="text-3xl font-bold">Who We Are?</h2>
            <p className="text-gray-400 font-medium">
              NexFund Labs is a next-gen fundraising agency helping early-stage
              Web3, AI, and crypto startups access capital, Secure OTC
              Investments, and accelerate listings. We're not just connectors —
              we’re dealmakers with skin in the game.
            </p>
          </div>

          <div className="w-full overflow-hidden ">
            <Image
              src={"/about-us.png"}
              alt="team"
              width={400}
              height={300}
              className="w-full object-fill"
            />
          </div>
        </m.div>

        {/* MISSION */}
        <m.div
          variants={fadeIn("left", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="card border border-gray-800 rounded-md  relative overflow-hidden bg-black grid z-1 col-span-2 md:h-[320px]"
        >
          <div className="flex flex-col gap-2 p-4 md:p-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-400 font-medium">
              To democratize access to smart capital by bridging innovative
              startups with strategic investors in the blockchain and tech
              frontier.
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <Image
              src={"/mission.png"}
              alt="mission"
              width={400}
              height={300}
              className="w-full object-fill"
            />
          </div>
        </m.div>

        {/* VISION */}
        <m.div
          variants={fadeIn("left", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="card border border-gray-800 rounded-md col-span-2 overflow-hidden bg-black grid md:h-[320px]"
        >
          <div className="flex flex-col gap-2  p-4 md:p-6">
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-gray-400">
              To evolve from an elite fundraising agency into a full-fledged
              venture capital powerhouse — NexFund — investing, incubating, and
              co-building the future of decentralized tech.
            </p>
          </div>

          <div className="w-full overflow-hidden md:h-[250px]">
            <Image
              src={"/vission.png"}
              alt="vision"
              width={400}
              height={300}
              className="w-full object-fill"
            />
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default About;
