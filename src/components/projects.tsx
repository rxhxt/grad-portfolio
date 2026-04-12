"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config";
import { SectionWrapper } from "./section-wrapper";
import BlurText from "./reactbits/BlurText";
import StarBorder from "./reactbits/StarBorder";

const INITIAL_COUNT = 4;

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  if (siteConfig.projects.length === 0) return null;

  const visibleProjects = showAll
    ? siteConfig.projects
    : siteConfig.projects.slice(0, INITIAL_COUNT);
  const hiddenCount = siteConfig.projects.length - INITIAL_COUNT;

  return (
    <SectionWrapper id="projects" className="p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <BlurText
            text="Projects"
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
            <AnimatePresence mode="sync">
              {visibleProjects.map((project, index) => {
                const hasLink = project.link && project.link.length > 0;
                const Wrapper = hasLink ? "a" : "div";
                const linkProps = hasLink
                  ? {
                      href: project.link,
                      target: "_blank" as const,
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index >= INITIAL_COUNT ? (index - INITIAL_COUNT) * 0.1 : 0 }}
                    className="group relative card-hover"
                  >
                    <Wrapper
                      {...linkProps}
                      className="block relative p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900/70 dark:backdrop-blur rounded-xl sm:rounded-2xl border border-gray-200 dark:border-white/10 dark:ring-1 dark:ring-inset dark:ring-white/5 shadow-sm transition-all duration-300 overflow-hidden hover-glow dark:hover:shadow-[0_0_40px_-5px_var(--accent-color)]"
                    >
                      {hasLink && (
                        <div
                          className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white ring-1 ring-white/20 transition-all duration-300"
                          style={{ backgroundColor: siteConfig.accentColor }}
                        >
                          <svg
                            className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 17L17 7M17 7H7M17 7V17"
                            />
                          </svg>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div>
                          <span
                            className="text-sm font-mono font-semibold dark:drop-shadow-[0_0_8px_var(--accent-color)]"
                            style={{ color: siteConfig.accentColor }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                            {project.name}
                          </h3>
                        </div>

                        <p
                          className={`text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300 ${
                            hasLink ? "pr-12 sm:pr-14 md:pr-16" : ""
                          }`}
                        >
                          {project.description}
                        </p>

                        {project.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                            {project.skills.map((skill) => (
                              <span
                                key={skill}
                                className="skill-badge px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {hiddenCount > 0 && (
            <div className="flex justify-center mt-8">
              <StarBorder
                as="button"
                color={siteConfig.accentColor}
                speed="5s"
                className="cursor-pointer"
                onClick={() => {
                  if (showAll) {
                    setShowAll(false);
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    setShowAll(true);
                  }
                }}
              >
                <span className="font-medium">
                  {showAll
                    ? "Show Less"
                    : `Show More Projects (${hiddenCount} more)`}
                </span>
              </StarBorder>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
