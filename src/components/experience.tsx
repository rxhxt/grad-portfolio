"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config";
import { SectionWrapper } from "./section-wrapper";
import BlurText from "./reactbits/BlurText";

export function Experience() {
  if (siteConfig.experience.length === 0) return null;

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper id="experience" className="p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <BlurText
            text="Experience"
            className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100"
            delay={100}
            animateBy="words"
            direction="bottom"
          />
          <div
            className="w-[75px] h-[5px] mt-2 rounded-full"
            style={{ backgroundColor: siteConfig.accentColor }}
          />
        </div>

        <div className="lg:col-span-8">
          <div className="relative" ref={timelineRef}>
            {/* Animated timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gray-200 dark:bg-gray-800/60 z-0">
              <motion.div
                className="w-full rounded-full"
                style={{
                  height: lineHeight,
                  backgroundColor: siteConfig.accentColor,
                }}
              />
            </div>

            {siteConfig.experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-1/2 -top-2 w-4 h-4 border-2 rounded-full -translate-x-1/2 z-20"
                  style={{
                    borderColor: siteConfig.accentColor,
                    backgroundColor: siteConfig.accentColor,
                    boxShadow: `0 0 12px ${siteConfig.accentColor}`,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2, type: "spring" }}
                />

                {/* Card with tilt hover */}
                <div className="card-hover tilt-card bg-white dark:bg-gray-900/60 dark:backdrop-blur rounded-lg shadow-sm border border-gray-200 dark:border-white/10 dark:ring-1 dark:ring-inset dark:ring-white/5 p-4 sm:p-5 md:p-6 relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p
                        className="text-base sm:text-lg font-medium"
                        style={{ color: siteConfig.accentColor }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0 font-medium">
                      {exp.dateRange}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0"
                          style={{ backgroundColor: siteConfig.accentColor }}
                        />
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
