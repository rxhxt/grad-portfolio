"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config";
import { SectionWrapper } from "./section-wrapper";

export function About() {
  return (
    <SectionWrapper id="about" className="p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <div
            className="w-[75px] h-[5px] mt-2 rounded-full"
            style={{ backgroundColor: siteConfig.accentColor }}
          />
        </div>

        <div className="lg:col-span-8 space-y-8">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            {siteConfig.aboutMe}
          </p>

          <div className="pt-4">
            <div className="flex flex-wrap gap-3">
              {siteConfig.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="skill-badge px-4 py-2 rounded-full text-sm font-medium cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
