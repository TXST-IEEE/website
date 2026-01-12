/**
 * BUTTON COMPONENT
 *
 * A reusable button with multiple variants and smooth animations.
 *
 * USAGE:
 *   <Button variant="primary">Click Me</Button>
 *   <Button variant="secondary" href="/events">View Events</Button>
 *   <Button variant="ghost" onClick={handleClick}>Learn More</Button>
 *
 * VARIANTS:
 *   - primary: IEEE blue background, white text
 *   - secondary: White background, IEEE blue text
 *   - ghost: Transparent with border
 */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  // Define styles for each variant
  const variants = {
    primary: "bg-[#00629B] text-white hover:bg-[#00A9E0]",
    secondary: "bg-white text-[#00629B] hover:bg-gray-100",
    ghost: "bg-transparent border-2 border-white text-white hover:bg-white/10",
  };

  // Base styles applied to all buttons
  const baseStyles = `
    px-8 py-3 rounded-lg font-semibold text-lg
    transition-all duration-200 cursor-pointer
    inline-flex items-center justify-center gap-2
    ${variants[variant]}
    ${className}
  `;

  // Animation: Scale down on click, add ripple effect
  const buttonAnimation = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href}>
        <motion.div className={baseStyles} {...buttonAnimation}>
          {children}
        </motion.div>
      </Link>
    );
  }

  // Otherwise, render as button
  return (
    <motion.button className={baseStyles} onClick={onClick} {...buttonAnimation}>
      {children}
    </motion.button>
  );
}
