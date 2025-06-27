"use client";

import { motion as m } from "motion/react";
import { StarIcon } from "@heroicons/react/24/outline";
import { RatingList } from "@/utils/constant";
import { fadeIn, textVariant } from "@/utils/motion";

const Rating = () => {
  return (
    <section className="w-full flex justify-center  py-[60px]  md:py-[100px] px-4 items-center flex-col gap-12">
      <div className="flex flex-col items-center justify-center text-center w-full mx-auto gap-2">
        <m.h1
          variants={fadeIn("up", "tween", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          Trusted By 50+ <span className="gradient_text">Happy Customers</span>
        </m.h1>
        <m.p
          variants={textVariant(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-gray-400 text-center max-w-2xl"
        >
          Just step away from those traditional old methods of hiring plus
          managing and see for yourself
        </m.p>
      </div>

      <m.div
        variants={fadeIn("up", "tween", 0.1, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex w-full h-full gap-6 py-2 items-center justify-center"
      >
        <div className="max-w-[60rem] w-full grad-bg h-[280px] relative flex overflow-hidden">
          <div className="absolute top-0 left-0  w-[200px] md:w-[250px] h-[280px] bg-[#0b1620] flex flex-col items-center justify-center gap-2 z-10 shadow-2xl">
            <h1 className="text-6xl font-bold">4.7+</h1>

            <div className="flex gap-1 items-center ">
              <StarIcon className="w-[20] h-[20]" fill="#ffffff" />
              <StarIcon className="w-[20] h-[20]" fill="#ffffff" />
              <StarIcon className="w-[20] h-[20]" fill="#ffffff" />
              <StarIcon className="w-[20] h-[20]" fill="#ffffff" />
              <StarIcon className="w-[20] h-[20] opacity-70" fill="#ffffff" />
            </div>
          </div>

          <div className="scroll_slide w-full flex gap-8 items-center justify-center shrink-0">
            {RatingList.map((list, idx) => (
              <article key={idx} className="min-w-[300px] relative px-4">
                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold">{list.title}</h2>
                  <p className="text-sm font-semibold">{list.quote}</p>
                </div>

                <div className="flex gap-1 flex-col mt-6">
                  <h2 className="font-semibold">{list.name}</h2>
                  <p className="text-sm font-semibold">{list.role}</p>
                </div>

                {idx !== RatingList.length - 1 && (
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[1px] bg-white h-[240px] opacity-50" />
                )}
              </article>
            ))}

            {RatingList.map((list, idx) => (
              <article
                aria-hidden="true"
                key={idx}
                className="min-w-[300px] relative px-4"
              >
                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold">{list.title}</h2>
                  <p className="text-sm font-semibold">{list.quote}</p>
                </div>

                <div className="flex gap-1 flex-col mt-6">
                  <h2 className="font-semibold">{list.name}</h2>
                  <p className="text-sm font-semibold">{list.role}</p>
                </div>

                {idx !== RatingList.length - 1 && (
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[1px] bg-white h-[240px] opacity-50" />
                )}
              </article>
            ))}
          </div>
        </div>
      </m.div>
    </section>
  );
};

export default Rating;
