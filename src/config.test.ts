import { describe, it, expect } from "vitest";
import { siteConfig } from "./config";

describe("siteConfig", () => {
  it("should have required fields", () => {
    expect(siteConfig.name).toBeDefined();
    expect(siteConfig.title).toBeDefined();
    expect(siteConfig.social.email).toBeDefined();
    expect(siteConfig.social.github).toBeDefined();
    expect(siteConfig.social.linkedin).toBeDefined();
  });

  it("should have non-empty arrays", () => {
    expect(siteConfig.skills.length).toBeGreaterThan(0);
    expect(siteConfig.projects.length).toBeGreaterThan(0);
    expect(siteConfig.experience.length).toBeGreaterThan(0);
    expect(siteConfig.education.length).toBeGreaterThan(0);
  });
});
