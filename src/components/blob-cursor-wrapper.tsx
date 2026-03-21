"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config";

const BlobCursor = dynamic(() => import("./reactbits/BlobCursor"), { ssr: false });

export function BlobCursorWrapper() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      <BlobCursor
        blobType="circle"
        fillColor={siteConfig.accentColor}
        trailCount={3}
        sizes={[30, 60, 40]}
        innerSizes={[8, 16, 10]}
        innerColor="rgba(255,255,255,0.6)"
        opacities={[0.3, 0.2, 0.15]}
        shadowColor="rgba(0,0,0,0)"
        shadowBlur={0}
        shadowOffsetX={0}
        shadowOffsetY={0}
        useFilter={true}
        filterStdDeviation={20}
        fastDuration={0.08}
        slowDuration={0.4}
        zIndex={9998}
      />
    </div>
  );
}
