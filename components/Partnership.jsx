"use client";

import Image from "next/image";

import { motion as m } from "motion/react";
import { zoomIn, fadeIn, slideIn } from "@/utils/motion";

const partners = [
  "/svg/binance.svg",
  "/svg/binance.svg",
  "/svg/bitget.svg",
  "/svg/ascendex.svg",
  "/svg/biconomy.svg",
  "/svg/bitmart.svg",
  "/svg/lbank.svg",
  "/svg/mexc.svg",
  "/svg/deepcoin.svg",
];

const Partnership = () => {
  return (
    <section className="bg-black py-10 md:py-16 text-white overflow-hidden relative">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col gap-4 items-center text-center">
          <m.p
            variants={zoomIn(0.1, 0.5)}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            initial="hidden"
            className="start"
          >
            Over 100 Companies trust us
          </m.p>
          <m.h1
            variants={fadeIn("up", "tween", 0.1, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            Our Partners.
          </m.h1>
        </div>

        <m.div
          variants={slideIn("up", "tween", 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative w-full overflow-hidden mt-5 md:mt-8"
        >
          <div className="flex gap-8 animate-slide whitespace-nowrap">
            {[...partners, ...partners].map((src, i) => (
              <Image
                key={i}
                src={src}
                width={100}
                height={40}
                alt={`partner-${i}`}
                className="h-6 md:h-7 w-auto object-contain transition"
              />
            ))}
          </div>
        </m.div>
      </div>

      <div className="w-[200px] h-[100px] bg-black absolute -left-4 top-[50%] blur-sm hidden md:block"></div>
      <div className="w-[200px] h-[100px] bg-black absolute -right-4 top-[50%]  blur-sm hidden md:block"></div>
    </section>
  );
};

export default Partnership;
