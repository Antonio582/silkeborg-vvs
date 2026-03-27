"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export default function Counter({ target, suffix = "", prefix = "", label }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 1.5,
        ease: [0.4, 0, 0.2, 1],
        onUpdate(value) {
          setDisplayValue(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <p className="text-4xl md:text-5xl font-heading font-bold text-teal">
        {prefix}{displayValue}{suffix}
      </p>
      <p className="mt-2 text-gray-600 text-sm">{label}</p>
    </motion.div>
  );
}
