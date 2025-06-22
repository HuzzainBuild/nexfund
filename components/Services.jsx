"use client";

import Image from "next/image";
import { motion as m } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { fadeIn, zoomIn } from "@/utils/motion";
import { servicesData } from "@/utils/constant";

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full py-[50px] md:py-[80px] px-4 md:px-8 bg-black overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 text-center">
        <m.p
          variants={zoomIn(0.1, 0.5)}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          initial="hidden"
          className="start"
        >
          Our Services
        </m.p>

        <m.div
          variants={fadeIn("up", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Accelerating Web3, Crypto, and
            <br className="hidden md:block" />
            AI Startups with Tailored Solutions
          </h2>
          <p className="text-gray-400 text-center max-w-2xl">
            We empower Web3, crypto, and AI startups with end-to-end support —
            from fundraising and private deals to exchange listings, liquidity,
            marketing, and legal compliance — connecting them with the right
            capital, partners, and strategies to scale fast and securely.
          </p>
        </m.div>
      </div>

      <aside className="relative w-full flex items-center justify-center max-w-[60rem] mx-auto gap-10 mt-6">
        <m.div className="w-full flex flex-col items-center gap-6 md:gap-8 mt-10">
          {servicesData.map((service, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={0.9}
              transitionSpeed={450}
            >
              <m.div
                variants={fadeIn("up", "tween", 0.1 * index, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="grad-bg rounded-md h-[550px] md:h-[400px] relative overflow-hidden w-full grid md:grid-cols-2 shadow-xl "
              >
                <div className="p-10 flex flex-col gap-8 w-full justify-center ">
                  <h1 className="text-3xl md:text-4xl font-bold max-w-lg">
                    {service.title}
                  </h1>

                  <p className="text-gray-200 text-base md:text-lg font-semibold  max-w-lg w-full">
                    {service.text}
                  </p>
                </div>

                <div className="w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={500}
                    className="w-[full] h-[400px] object-fill transition ease-in-out hidden md:block"
                  />
                  <Image
                    src={service.sm}
                    alt={service.title}
                    width={500}
                    height={500}
                    className="w-[full] h-[400px] object-fill transition-all ease-in-out block md:hidden"
                  />
                </div>
              </m.div>
            </Tilt>
          ))}
        </m.div>
      </aside>

      <div className="gradient-04 z-0"></div>
      <div className="gradient-05 z-0"></div>
    </section>
  );
};

export default Services;
