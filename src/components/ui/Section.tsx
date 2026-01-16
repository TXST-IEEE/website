/**
 * SECTION COMPONENT
 *
 * A layout component for page sections with consistent spacing.
 * Handles full-width backgrounds and content containers.
 *
 * USAGE:
 *   <Section>Content here</Section>
 *   <Section dark>Dark background section</Section>
 *   <Section className="bg-gradient-to-r from-blue-500 to-blue-700">
 *     Gradient section
 *   </Section>
 *
 * PROPS:
 *   - children: Content inside the section
 *   - dark: Use dark background
 *   - fullWidth: Content takes full width (no container)
 *   - className: Additional CSS classes for background
 */

import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  dark?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export default function Section({
  children,
  dark = false,
  fullWidth = false,
  className = "",
}: SectionProps) {
  // Background color based on dark prop
  const bgColor = dark ? "bg-[#0A0F1E]" : "bg-white";

  // Container: constrain width and center content
  const containerStyles = fullWidth
    ? "w-full"
    : "max-w-7xl mx-auto px-6 md:px-8 lg:px-12";

  return (
    <section className={`py-12 md:py-18 ${bgColor} ${className}`}>
      <div className={containerStyles}>{children}</div>
    </section>
  );
}
