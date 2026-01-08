/**
 * STATS COUNTER COMPONENT
 *
 * Animated counter that counts up when scrolled into view.
 * Perfect for showcasing impressive numbers (members, events, years, etc.)
 *
 * USAGE:
 *   <StatsCounter end={250} label="Members" suffix="+" />
 *   <StatsCounter end={50} label="Events" />
 *   <StatsCounter end={10} label="Years Active" />
 *
 * PROPS:
 *   - end: The final number to count to
 *   - label: Description below the number
 *   - suffix: Optional suffix (like "+", "%", etc.)
 *   - duration: How long the animation takes (seconds)
 */

"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export default function StatsCounter({
  end,
  label,
  suffix = "",
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Motion value for the counter
  const count = useMotionValue(0);
  const rounded = useSpring(count, { damping: 50, stiffness: 100 });

  useEffect(() => {
    if (isInView) {
      // Start counting when element comes into view
      count.set(end);
    }
  }, [isInView, count, end]);

  // Round the number for display
  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString() + suffix;
      }
    });

    return unsubscribe;
  }, [rounded, suffix]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Number */}
      <div
        ref={ref}
        className="text-5xl md:text-6xl font-bold text-[#00629B] mb-2"
      >
        0{suffix}
      </div>

      {/* Label */}
      <div className="text-lg md:text-xl text-gray-600 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
