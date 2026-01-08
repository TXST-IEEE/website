/**
 * CARD COMPONENT
 *
 * A versatile card component with glass morphism effect.
 * Can be used for events, team members, features, etc.
 *
 * USAGE:
 *   <Card>Content here</Card>
 *   <Card hover3D>Content with 3D effect on hover</Card>
 *   <Card glass>Content with glass morphism</Card>
 *
 * PROPS:
 *   - children: Content inside the card
 *   - hover3D: Enable 3D tilt effect on hover
 *   - glass: Enable glass morphism (frosted glass effect)
 *   - className: Additional CSS classes
 */

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  hover3D?: boolean;
  glass?: boolean;
  className?: string;
}

export default function Card({
  children,
  hover3D = false,
  glass = false,
  className = "",
}: CardProps) {
  // Base card styles
  const baseStyles = `
    rounded-xl p-6
    transition-all duration-300
    ${className}
  `;

  // Glass morphism effect (frosted glass look)
  const glassStyles = glass
    ? "bg-white/10 backdrop-blur-md border border-white/20"
    : "bg-white shadow-lg";

  return (
    <motion.div
      className={`${baseStyles} ${glassStyles}`}
      whileHover={
        hover3D
          ? {
              rotateX: 5,
              rotateY: 5,
              scale: 1.05,
            }
          : { y: -5 }
      }
      transition={
        hover3D
          ? {
              type: "spring" as const,
              stiffness: 300,
              damping: 20,
            }
          : undefined
      }
      style={
        hover3D
          ? {
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
}
