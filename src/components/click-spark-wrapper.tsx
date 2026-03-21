"use client";

import dynamic from "next/dynamic";
import { siteConfig } from "@/config";

const ClickSpark = dynamic(() => import("./reactbits/ClickSpark"), { ssr: false });

export function ClickSparkWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ClickSpark
      sparkColor={siteConfig.accentColor}
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
    >
      {children}
    </ClickSpark>
  );
}
