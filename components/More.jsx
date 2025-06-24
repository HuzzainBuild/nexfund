"use client";

import { motion as m, useScroll, useTransform } from "motion/react";
import { fadeIn, zoomIn } from "@/utils/motion";

import { Features } from "@/utils/constant";
import { useRef } from "react";

const More = () => {
  const scrollref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  const fixedPosition = useTransform(scrollYProgress, (latest) =>
    latest > 0 && latest < 1 ? "fixed" : "relative"
  );

  return (
    <>
      <section
        id="features"
        ref={scrollref}
        className="relative w-full py-[30px] md:py-[60px] gap-10 h-[400vh] md:h-[350vh] hidden md:block"
      >
        <div className="sticky top-[60px] md:top-[100px] flex flex-col  gap-8 items-center overflow-hidden ">
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

          <div className="max-w-[70rem] w-full flex ">
            <m.div style={{ x }} className="mt-8 w-full flex gap-8">
              {Features.map(({ Icon, title, text }, idx) => (
                <m.div
                  variants={fadeIn("right", "tween", 0.1 * idx, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  key={idx}
                  className="grad-bg flex flex-col p-6 rounded-lg shadow-lg border border-gray-800 gap-8  max-sm:w-[300px] w-[320px] h-[300px] shrink-0 justify-center"
                >
                  <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-black shadow-md">
                    <Icon className="w-12 h-12 text-white" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p className="font-medium">{text}</p>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="relative w-full py-[30px] md:py-[60px] gap-10 block md:hidden"
      >
        <div className="flex flex-col  gap-8 items-center overflow-hidden ">
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

          <div className="max-w-[70rem] w-full flex flex-col px-8">
            <m.div className="mt-8 w-full flex flex-col gap-8">
              {Features.map(({ Icon, title, text }, idx) => (
                <m.div
                  variants={fadeIn("right", "tween", 0.1 * idx, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  key={idx}
                  className="grad-bg flex flex-col p-6 py-8 rounded-lg shadow-lg border border-gray-800 gap-8 w-full shrink-0 justify-center "
                >
                  <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-black shadow-md">
                    <Icon className="w-12 h-12 text-white" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p className="font-medium">{text}</p>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default More;
