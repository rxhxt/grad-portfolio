"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config";
import BlurText from "./reactbits/BlurText";
import RotatingText from "./reactbits/RotatingText";
import dynamic from "next/dynamic";

const Threads = dynamic(() => import("./reactbits/Threads"), { ssr: false });

export function Hero() {
  return (
    <div
      id="hero"
      className="relative isolate overflow-hidden bg-white dark:bg-gray-950 py-24 md:min-h-screen flex flex-col"
      style={{ ["--accent-color" as string]: siteConfig.accentColor }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse 800px 1200px at 0% 0%, ${siteConfig.accentColor}40 0%, ${siteConfig.accentColor}25 20%, ${siteConfig.accentColor}10 40%, rgba(255, 255, 255, 0.3) 70%, rgba(255, 255, 255, 0.8) 90%, white 100%)`,
        }}
      />
      <div
        className="absolute inset-0 -z-10 hidden dark:block"
        style={{
          background: `radial-gradient(ellipse 800px 1200px at 0% 0%, ${siteConfig.accentColor}30 0%, ${siteConfig.accentColor}15 20%, ${siteConfig.accentColor}08 40%, rgba(3, 7, 18, 0.3) 70%, rgba(3, 7, 18, 0.8) 90%, rgb(3, 7, 18) 100%)`,
        }}
      />

      {/* Animated Threads background */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <Threads
          color={[0.114, 0.306, 0.847]}
          amplitude={1.2}
          distance={0.3}
          enableMouseInteraction={true}
        />
      </div>

      {/* Content */}
      <div className="flex-1 mx-auto p-8 sm:p-12 md:p-24 flex items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-pretty text-xl sm:text-2xl md:text-5xl font-bold tracking-tight text-gray-700 dark:text-gray-300"
          >
            Hello! 👋
          </motion.h2>
          <div className="mt-6 sm:mt-8 md:mt-10">
            <BlurText
              text={`I'm ${siteConfig.name}`}
              className="text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
              delay={100}
              animateBy="words"
              direction="bottom"
              stepDuration={0.4}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap items-center gap-x-2 text-pretty text-base sm:text-lg md:text-xl/8 font-medium text-gray-600 dark:text-gray-400"
          >
            <span>I&apos;m a</span>
            <RotatingText
              texts={[
                "Full-Stack Engineer",
                "GenAI Engineer",
                "ML Engineer",
                "Data Scientist",
              ]}
              mainClassName="overflow-hidden inline-flex"
              staggerFrom="last"
              staggerDuration={0.025}
              rotationInterval={2500}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              elementLevelClassName="font-semibold"
              style={{ color: siteConfig.accentColor }}
            />
          </motion.div>
        </div>
      </div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="p-8 sm:p-12 md:p-24 flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 dark:text-gray-400"
      >
        {siteConfig.social?.email && (
          <a
            href={`mailto:${siteConfig.social.email}`}
            aria-label="Email"
            className="transition-colors duration-300 hover:text-[var(--accent-color)] dark:hover:text-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
              <path strokeOpacity="0" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </a>
        )}
        {siteConfig.social?.linkedin && (
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-300 hover:text-[var(--accent-color)] dark:hover:text-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
              <path strokeOpacity="0" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 11v5" />
              <path d="M8 8v.01" />
              <path d="M12 16v-5" />
              <path d="M16 16v-3a2 2 0 1 0 -4 0" />
              <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            </svg>
          </a>
        )}
        {siteConfig.social?.github && (
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-300 hover:text-[var(--accent-color)] dark:hover:text-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8">
              <path strokeOpacity="0" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
        )}
      </motion.div>
    </div>
  );
}
