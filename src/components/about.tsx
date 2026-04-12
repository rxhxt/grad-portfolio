"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config";
import { SectionWrapper } from "./section-wrapper";
import BlurText from "./reactbits/BlurText";
import CountUp from "./reactbits/CountUp";
import dynamic from "next/dynamic";

const ScrollReveal = dynamic(() => import("./reactbits/ScrollReveal"), { ssr: false });
const ScrollVelocity = dynamic(
  () => import("./reactbits/ScrollVelocity").then(mod => ({ default: mod.ScrollVelocity })),
  { ssr: false }
);

export function About() {
  return (
    <SectionWrapper id="about" className="p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <BlurText
            text="About Me"
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

        <div className="lg:col-span-8 space-y-8">
          <ScrollReveal
            enableBlur={true}
            baseOpacity={0.15}
            baseRotation={2}
            blurStrength={3}
            textClassName="!text-lg sm:!text-xl md:!text-2xl !leading-relaxed !font-medium text-gray-600 dark:text-gray-400"
            containerClassName="!my-0"
          >
            {siteConfig.aboutMe}
          </ScrollReveal>

          {/* Stats row with CountUp */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 dark:backdrop-blur border border-gray-200 dark:border-white/10 dark:ring-1 dark:ring-inset dark:ring-white/5 transition-all duration-300 hover:-translate-y-0.5 dark:hover:shadow-[0_0_24px_-6px_var(--accent-color)]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: siteConfig.accentColor }}>
                <CountUp to={4} duration={2} className="" />
                <span>+</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1">Deployed Apps</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 dark:backdrop-blur border border-gray-200 dark:border-white/10 dark:ring-1 dark:ring-inset dark:ring-white/5 transition-all duration-300 hover:-translate-y-0.5 dark:hover:shadow-[0_0_24px_-6px_var(--accent-color)]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: siteConfig.accentColor }}>
                <CountUp to={20} duration={2} className="" />
                <span>%+</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1">UX Lift</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 dark:backdrop-blur border border-gray-200 dark:border-white/10 dark:ring-1 dark:ring-inset dark:ring-white/5 transition-all duration-300 hover:-translate-y-0.5 dark:hover:shadow-[0_0_24px_-6px_var(--accent-color)]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: siteConfig.accentColor }}>
                <CountUp to={3.92} from={0} duration={2.5} className="" />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1">GPA</p>
            </div>
          </div>

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

      {/* Scrolling skill marquee */}
      <div className="mt-16 -mx-8 sm:-mx-12 md:-mx-16 lg:-mx-24 opacity-20 dark:opacity-30">
        <ScrollVelocity
          texts={[
            siteConfig.skills.slice(0, 10).join(" • "),
            siteConfig.skills.slice(10).join(" • "),
          ]}
          velocity={30}
          className="text-gray-400 dark:text-gray-500"
        />
      </div>
    </SectionWrapper>
  );
}
