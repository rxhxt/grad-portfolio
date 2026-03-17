"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config";
import { SectionWrapper } from "./section-wrapper";

export function Experience() {
  if (siteConfig.experience.length === 0) return null;

  return (
    <SectionWrapper id="experience" className="p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100">
            Experience
          </h2>
          <div
            className="w-[75px] h-[5px] mt-2 rounded-full"
            style={{ backgroundColor: siteConfig.accentColor }}
          />
        </div>

        <div className="lg:col-span-8">
          <div className="relative">
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
                <div
                  className="absolute left-1/2 -top-2 w-4 h-4 border-2 rounded-full -translate-x-1/2 z-20"
                  style={{
                    borderColor: siteConfig.accentColor,
                    backgroundColor: siteConfig.accentColor,
                  }}
                />

                {/* Connecting line */}
                {index < siteConfig.experience.length - 1 && (
                  <div className="absolute left-1/2 bottom-0 w-0.5 h-12 bg-gray-300 dark:bg-gray-700 -translate-x-1/2 translate-y-full z-10" />
                )}

                {/* Card */}
                <div className="card-hover bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-4 sm:p-5 md:p-6 relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {exp.title}
                      </h3>
                      <p
                        className="text-base sm:text-lg font-medium"
                        style={{ color: siteConfig.accentColor }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-2 sm:mt-0 font-medium">
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
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
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
