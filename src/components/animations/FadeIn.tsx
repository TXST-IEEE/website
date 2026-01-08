/**
 * FADE IN ANIMATION
 *
 * Makes elements fade in when they scroll into view.
 * Perfect for text, images, and cards.
 *
 * USAGE:
 *   <FadeIn>
 *     <h1>This will fade in</h1>
 *   </FadeIn>
 *
 *   <FadeIn delay={0.2}>
 *     <p>This fades in slightly later</p>
 *   </FadeIn>
 *
 * PROPS:
 *   - children: Content to animate
 *   - delay: Delay before animation starts (in seconds)
 *   - duration: Animation duration (in seconds)
 */

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
