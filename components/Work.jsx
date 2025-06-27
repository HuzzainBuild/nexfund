"use client";

import { AnalyticsData } from "@/utils/constant";
import React from "react";

import { motion as m, useScroll, useTransform } from "motion/react";
import { fadeIn, zoomIn, slideIn } from "@/utils/motion";

const Work = () => {
  return (
    <section className="w-full px-4 md:px-8 py-[60px] md:py[100px] flex flex-col items-center justify-center overflow-hidden">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[70rem] w-full">
        {AnalyticsData.map(({ Icon, label, value }, idx) => (
          <m.div
            variants={slideIn("right", "tween", 0.1 * idx, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={idx}
            className="w-full grad-bg animate_border  min-h-[250px] rounded-md border border-gray-800 cursor-pointer"
          >
            <div className="absolute top-5 left-5 z-4">
              <h1 className="py-2 px-4 rounded-xl z-5 bg-black shadow-md text-sm font-semibold">
                {idx + 1}
              </h1>
            </div>

            <div className="z-4 w-full h-full flex flex-col items-center justify-center gap-3">
              <div className="z-5">
                <Icon
                  className="w-[50] h-[50] z-6 gradient_text"
                  stroke="#3772df"
                />
              </div>
              <h1 className="text-4xl font-bold z-5">{value}</h1>
              <h2 className="z-5">{label}</h2>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
