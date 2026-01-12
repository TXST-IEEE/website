/**
 * SLIDE IN ANIMATION
 *
 * Makes elements slide in from the side when they scroll into view.
 *
 * USAGE:
 *   <SlideIn direction="left">
 *     <div>Slides in from the left</div>
 *   </SlideIn>
 *
 *   <SlideIn direction="right" delay={0.3}>
 *     <div>Slides in from the right with delay</div>
 *   </SlideIn>
 *
 * PROPS:
 *   - children: Content to animate
 *   - direction: "left" or "right"
 *   - delay: Delay before animation starts (in seconds)
 */

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
}

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
}: SlideInProps) {
  // Determine starting position based on direction
  const initialX = direction === "left" ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
