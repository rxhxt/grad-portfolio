import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

const mockSectionFn = vi.fn();

vi.mock("framer-motion", () => ({
  motion: {
    section: ({
      children,
      initial,
      whileInView,
      viewport,
      transition,
      ...props
    }: any) => {
      mockSectionFn({ initial, whileInView, viewport, transition, ...props });
      return <section {...props}>{children}</section>;
    },
  },
}));

import { SectionWrapper } from "./section-wrapper";

describe("SectionWrapper", () => {
  it("renders children correctly", () => {
    render(
      <SectionWrapper>
        <p>Hello World</p>
      </SectionWrapper>,
    );
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("passes id prop to the section element", () => {
    const { container } = render(
      <SectionWrapper id="about">
        <p>Content</p>
      </SectionWrapper>,
    );
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("id", "about");
  });

  it("applies custom className", () => {
    const { container } = render(
      <SectionWrapper className="custom-class">
        <p>Content</p>
      </SectionWrapper>,
    );
    const section = container.querySelector("section");
    expect(section).toHaveClass("custom-class");
  });

  it("uses default className (empty string) when not provided", () => {
    const { container } = render(
      <SectionWrapper>
        <p>Content</p>
      </SectionWrapper>,
    );
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("class", "");
  });

  it("does not set id when not provided", () => {
    const { container } = render(
      <SectionWrapper>
        <p>Content</p>
      </SectionWrapper>,
    );
    const section = container.querySelector("section");
    expect(section).not.toHaveAttribute("id");
  });

  it("passes delay prop correctly", () => {
    mockSectionFn.mockClear();
    render(
      <SectionWrapper delay={0.5}>
        <p>Content</p>
      </SectionWrapper>,
    );
    expect(mockSectionFn).toHaveBeenCalledWith(
      expect.objectContaining({
        transition: expect.objectContaining({ delay: 0.5 }),
      }),
    );
  });

  it("renders a section element", () => {
    const { container } = render(
      <SectionWrapper>
        <p>Content</p>
      </SectionWrapper>,
    );
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("renders multiple children", () => {
    render(
      <SectionWrapper>
        <p>First</p>
        <p>Second</p>
        <p>Third</p>
      </SectionWrapper>,
    );
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
    expect(screen.getByText("Third")).toBeInTheDocument();
  });

  it("combines id and className props correctly", () => {
    const { container } = render(
      <SectionWrapper id="projects" className="mt-8 px-4">
        <p>Projects</p>
      </SectionWrapper>,
    );
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("id", "projects");
    expect(section).toHaveClass("mt-8", "px-4");
  });
});
