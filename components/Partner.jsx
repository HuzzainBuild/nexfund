"use client";

import { motion as m } from "motion/react";
import { fadeIn, textVariant } from "@/utils/motion";

const Partner = () => {
  return (
    <section className="w-full flex justify-center py-[60px]  md:py-[100px] px-4 items-center flex-col gap-12">
      <div className="flex flex-col items-center justify-center text-center w-full mx-auto gap-2">
        <m.h1
          variants={fadeIn("up", "tween", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          Our Partner
        </m.h1>
        <m.p
          variants={textVariant(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="text-gray-400 text-center max-w-2xl"
        >
          Trusted by leading innovators, our partners drive the future of Web3
          with us
        </m.p>
      </div>

      <div className="flex flex-col gap-6 item-center justify-center">
        <div className="grad-bg py-4 px-4 border border-gray-600 rounded-full w-full flex items-center gap-4 font-semibold">
          {[
            "Exchange Partner",
            "Security & Partner",
            "Market Maker",
            "VC's & Launchpads",
          ].map((label, idx) => (
            <label key={idx} className="cursor-pointer relative">
              <input
                type="radio"
                name="partnerType"
                value={label}
                className="sr-only peer"
              />
              <span className="py-3 px-4 rounded-full peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-500 peer-checked:text-white transition-colors duration-300">
                {label}
              </span>
            </label>
          ))}

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
