"use client";

import { motion as m, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { ProjectsList } from "@/utils/constant";
import { fadeIn, zoomIn } from "@/utils/motion";

const Project = () => {
  const scrollref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollref,
    offset: ["start start", "end end"], // optional tuning
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-80%"]);

  const fixedPosition = useTransform(scrollYProgress, (latest) =>
    latest > 0 && latest < 1 ? "fixed" : "relative"
  );

  return (
    <section
      ref={scrollref}
      id="project"
      className="relative w-full px-4 md:px-8 lex items-center justify-center py-[50px] md:py-[80px] min-h-screen md:h-[200vh]"
    >
      <div
        style={{ fixedPosition }}
        className=" top-80px left-0 w-full flex flex-col gap-4 items-center text-center"
      >
        <m.p
          variants={zoomIn(0.1, 1)}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          initial="hidden"
          className="start"
        >
          What we've done so far
        </m.p>
        <m.h1
          variants={fadeIn("up", "tween", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          Projects.
        </m.h1>
      </div>

      <aside className="sticky top-[30px] md:top-[60px] h-[150vh] flex item-center overflow-hidden bg-amber-400">
        <m.section style={{ x }} className="flex gap-6 md:gap-8 items-center">
          {ProjectsList.map((project, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-md overflow-hidden w-[350px] whitespace-normal"
            >
              <Image
                src={"/planet-01.jpg"}
                alt="projects"
                width={400}
                height={250}
                className="w-full  h-[250px] object-cover rounded-t-md"
              />

              <div className=" p-4 flex justify-between items-center gap-2">
                <h2 className="text-2xl text-white font-semibold">{project}</h2>

                <button className="bg-white text-black py-2 px-4 rounded-md cursor-pointer shadow font-semibold text-sm hover:bg-gray-300 transition-all duration-700 ease-in-out">
                  View
                </button>
              </div>
            </div>
          ))}
        </m.section>
      </aside>
    </section>
  );
};

export default Project;
