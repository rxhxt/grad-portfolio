"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config";

const socialIconHover = {
  scale: 1.15,
  rotate: 5,
  transition: { type: "spring", stiffness: 400, damping: 15 },
};

export function Footer() {
  const hasExperience = siteConfig.experience.length > 0;
  const hasProjects = siteConfig.projects.length > 0;
  const hasEducation = siteConfig.education.length > 0;

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              {siteConfig.name}
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-md">
              {siteConfig.title}
            </p>
            <div className="flex gap-x-6">
              {siteConfig.social?.email && (
                <motion.a
                  href={`mailto:${siteConfig.social.email}`}
                  aria-label="Email"
                  className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-[var(--accent-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 rounded"
                  style={{ ["--accent-color" as string]: siteConfig.accentColor }}
                  whileHover={socialIconHover}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </motion.a>
              )}
              {siteConfig.social?.linkedin && (
                <motion.a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-[var(--accent-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 rounded"
                  style={{ ["--accent-color" as string]: siteConfig.accentColor }}
                  whileHover={socialIconHover}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                  </svg>
                </motion.a>
              )}
              {siteConfig.social?.github && (
                <motion.a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-[var(--accent-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 rounded"
                  style={{ ["--accent-color" as string]: siteConfig.accentColor }}
                  whileHover={socialIconHover}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </motion.a>
              )}
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end gap-4">
            <nav className="flex gap-x-8">
              <a href="#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                About
              </a>
              {hasExperience && (
                <a href="#experience" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Experience
                </a>
              )}
              {hasProjects && (
                <a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Projects
                </a>
              )}
              {hasEducation && (
                <a href="#education" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                  Education
                </a>
              )}
            </nav>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg aria-hidden="true" className="absolute bottom-0 left-0 w-full h-24 text-gray-100 dark:text-gray-700">
          <pattern id="footer-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 Q 25 40, 50 50 T 100 50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>
    </footer>
  );
}
