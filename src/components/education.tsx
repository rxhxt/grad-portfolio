"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config";
import { SectionWrapper } from "./section-wrapper";
import BlurText from "./reactbits/BlurText";

export function Education() {
  if (siteConfig.education.length === 0) return null;

  return (
    <SectionWrapper id="education" className="p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <BlurText
            text="Education"
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
          <div className="space-y-8">
            {siteConfig.education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="card-hover tilt-card bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-4 sm:p-5 md:p-6 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {edu.degree}
                    </h3>
                    <p
                      className="text-base sm:text-lg font-medium"
                      style={{ color: siteConfig.accentColor }}
                    >
                      {edu.school}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-2 sm:mt-0 font-medium">
                    {edu.dateRange}
                  </span>
                </div>

                <ul className="space-y-3">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0"
                        style={{ backgroundColor: siteConfig.accentColor }}
                      />
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
