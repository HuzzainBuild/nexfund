"use client";

import { motion as m } from "motion/react";
import { zoomIn, fadeIn, slideIn } from "@/utils/motion";
import { Launchpads } from "@/utils/constant";

const Launchpad = () => {
  return (
    <section
      id="launchpad"
      className="w-full relative bg-black pb-[100px]  px-4 md:px-8"
    >
      <div className="flex flex-col gap-4 items-center text-center">
        <m.p
          variants={zoomIn(0.1, 1)}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          initial="hidden"
          className="start"
        >
          launchpads we work with
        </m.p>
        <m.h1
          variants={fadeIn("up", "tween", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          Launchpads.
        </m.h1>
      </div>

      <div className="flex gap-4 w-full overflow-hidden">
        <m.div
          variants={slideIn("up", "tween", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-row items-center justify-center gap-4 md:gap-6 max-w-[60rem] mx-auto mt-8  whitespace-nowrap scroll_slide"
        >
          {Launchpads.map((name, index) => (
            <h2
              key={index}
              className="launchpads cursor-pointer w-full transition"
            >
              {name}
            </h2>
          ))}

          {Launchpads.map((name, index) => (
            <h2
              aria-hidden="true"
              key={index}
              className="launchpads cursor-pointer w-full transition"
            >
              {name}
            </h2>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default Launchpad;
