"use client";

import { motion as m } from "framer-motion";
import { zoomIn, fadeIn, textVariant } from "@/utils/motion";
import Button from "./Button";

const Testimonies = () => {
  return (
    <section
      id="try"
      className="realtive bg-black w-full h-full py-[100px] px-4 md:px-8"
    >
      <m.div
        variants={fadeIn("right", "spring", 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-[50rem]  mx-auto flex flex-col items-center justify-center text-center px-10 py-[60px] md:p-[80px] rounded-lg shadow-lg grad-bg animate_border border border-gray-800"
      >
        <h1 className="text-3xl md:text-4xl font-bold hero_title z-4">
          Powering Your Web3 Future with{" "}
          <span className="gradient_text">
            Capital, Connections, and Credibility.
          </span>
        </h1>

        <p className="mt-4 font-semibold text-gray-300 hero_subtitle max-w-xl z-4">
          We connect Web3 startups with capital, OTC deals, and top-tier
          listings through a trusted network
        </p>
        <div className="mt-6 z-4">
          <a href="#contact">
          <Button type={"btn"} title={"Get Started"} />
          </a>
        </div>
      </m.div>
    </section>
  );
};

export default Testimonies;
