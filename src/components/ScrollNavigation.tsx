"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollNavigation() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setProgress(v));
  }, [scrollYProgress]);

  const dots = 5;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2">
      {Array.from({ length: dots }).map((_, i) => {
        const dotProgress = i / (dots - 1);
        const isActive = Math.abs(progress - dotProgress) < 0.15;
        return (
          <motion.div
            key={i}
            animate={{
              scale: isActive ? 1.3 : 1,
              backgroundColor: isActive ? "#0f766e" : "#d6d3d1",
            }}
            transition={{ duration: 0.2 }}
            className="w-2 h-2 rounded-full"
          />
        );
      })}
    </div>
  );
}
