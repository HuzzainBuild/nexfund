"use client";

import { motion as m } from "motion/react";
import { fadeIn, zoomIn } from "@/utils/motion";

import { Features } from "@/utils/constant";

const More = () => {
  return (
    <section
      id="features"
      className="relative w-full flex flex-col items-center justify-center py-[30px] md:py-[60px] overflow-x-hidden"
    >
      <div className="flex flex-col gap-4 items-center text-center">
        <m.p
          variants={zoomIn(0.1, 0.5)}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          initial="hidden"
          className="start"
        >
          Seamless AI Solution
        </m.p>
        <m.h1
          variants={fadeIn("up", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          Why Choose NexFund Labs?
        </m.h1>
      </div>

      <div className="max-w-[60rem] mx-auto w-full px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-8 ">
          {Features.map(({ Icon, title, text }, idx) => (
            <m.div
              variants={fadeIn("right", "tween", 0.1 * idx, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              key={idx}
              className="gradient flex flex-col p-6 rounded-lg shadow-lg border border-gray-500 gap-2"
            >
              <Icon className="w-12 h-12 text-white" />
              <h2 className="font-semibold text-xl">{title}</h2>
              <p className="font-medium">{text}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default More;
