import { AnalyticsData } from "@/utils/constant";
import React from "react";

const Work = () => {
  return (
    <section className="w-full px-4 md:px-8 py-[60px] md:py[100px] flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[70rem] w-full">
        {AnalyticsData.map(({ Icon, label, value }, idx) => (
          <div
            key={idx}
            className="w-full grad-b animate_border  min-h-[250px] rounded-md border border-gray-800 cursor-pointer"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
