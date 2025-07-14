"use client";

import { motion as m } from "motion/react";
import { fadeIn, textVariant, zoomIn } from "@/utils/motion";
import { useState } from "react";
import Image from "next/image";

// Map partners by type
const partnerCategories = {
  Exchanges: [
    "/svgs/exchange/binance.svg",
    "/svgs/exchange/bitget.svg",
    "/svgs/exchange/ascendex.svg",
    "/svgs/exchange/biconomy.svg",
    "/svgs/exchange/bitmart.svg",
    "/svgs/exchange/lbank.svg",
    "/svgs/exchange/mexc.svg",
    "/svgs/exchange/deepcoin.svg",
    "/svgs/exchange/okx.svg",
  ],

  "VC's": [
    "/svgs/vc/acquire.fi.svg",
    "/svgs/vc/asva.svg",
    "/svgs/vc/cequire.svg",
    "/svgs/vc/dwflabs.svg",
    "/svgs/vc/enflux.svg",
    "/svgs/vc/hashed.svg",
    "/svgs/vc/ibc.svg",
    "/svgs/vc/pinnacle.svg",
    "/svgs/vc/sigma.svg",
    "/svgs/vc/victus.svg",
  ],
  Launchpads: [
    "/svgs/launchpad/bscpad.svg",
    "/svgs/launchpad/daomaker.svg",
    "/svgs/launchpad/kommunitas.svg",
    "/svgs/launchpad/polkastarter.svg",
    "/svgs/launchpad/trustswap.svg",
  ],
};

const Partner = () => {
  const [selectedCategory, setSelectedCategory] = useState("Exchanges");

  return (
    <section className="w-full flex justify-center py-[60px] md:py-[100px] px-4 md:px-8 items-center flex-col gap-12">
      <div className="flex flex-col items-center justify-center text-center w-full mx-auto gap-2">
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
          viewport={{ once: true, amount: 0.25 }}
          className="text-gray-400 text-center max-w-2xl"
        >
          Trusted by leading innovators, our partners drive the future of Web3
          with us
        </m.p>
      </div>

      <div className="flex flex-col gap-10 item-center justify-center overflow-hidden max-w-[70rem] w-full">
        {/* Tab buttons */}
        <div className="w-full flex items-center justify-center">
          <div className="grad-bg py-4 px-3 md:px-4 border border-gray-800 rounded-md md:rounded-full w-full flex items-center gap-4 md:gap-8 font-semibold flex-wrap justify-center md:w-auto ">
            {Object.keys(partnerCategories).map((label, idx) => (
              <label key={idx} className="cursor-pointer relative">
                <input
                  type="radio"
                  name="partnerType"
                  value={label}
                  className="sr-only peer"
                  checked={selectedCategory === label}
                  onChange={() => setSelectedCategory(label)}
                />
                <span className="py-3 px-4 rounded-full peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-500 peer-checked:text-white transition-colors duration-300 max-sm:text-sm">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Partner logos based on selected tab */}
        <div className="flex gap-8 items-center justify-center w-full scroll_slide">
          {partnerCategories[selectedCategory].map((src, i) => (
            <Image
              key={i}
              src={src}
              width={100}
              height={40}
              alt={`partner-${i}`}
              className="h-6 md:h-7 w-auto object-contain transition shrink-0"
            />
          ))}
          {partnerCategories[selectedCategory].map((src, i) => (
            <Image
              key={i}
              src={src}
              width={100}
              height={40}
              alt={`partner-${i}`}
              className="h-6 md:h-7 w-auto object-contain transition shrink-0"
            />
          ))}
          {partnerCategories[selectedCategory].map((src, i) => (
            <Image
              key={i}
              src={src}
              width={100}
              height={40}
              alt={`partner-${i}`}
              className="h-6 md:h-7 w-auto object-contain transition shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
