/**
 * OFFICER CARD COMPONENT (with 3D Tilt Effect)
 *
 * A special card for displaying team members/officers with:
 * - 3D tilt effect that follows mouse movement
 * - Smooth animations
 * - Image, name, position, and bio
 *
 * USAGE:
 *   <OfficerCard
 *     name="John Doe"
 *     position="President"
 *     major="Electrical Engineering"
 *     image="/images/team/john-doe.jpg"
 *     bio="Passionate about embedded systems..."
 *   />
 *
 * HOW IT WORKS:
 *   - Tracks mouse position over the card
 *   - Rotates card in 3D based on mouse location
 *   - Returns to flat when mouse leaves
 */

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { MouseEvent } from "react";

interface OfficerCardProps {
  name: string;
  position: string;
  major: string;
  image: string;
  bio: string;
  email?: string;
  linkedin?: string;
}

export default function OfficerCard({
  name,
  position,
  major,
  image,
  bio,
  email,
  linkedin,
}: OfficerCardProps) {
  // Track mouse position with smooth spring animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Convert mouse position to rotation values (subtle 5 degree max tilt)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 15,
  });

  /**
   * Update rotation based on mouse position
   */
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const centerX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const centerY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    x.set(centerX);
    y.set(centerY);
  };

  /**
   * Reset rotation when mouse leaves
   */
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Card content with subtle 3D depth */}
        <div
          style={{
            transform: "translateZ(20px)",
            transformStyle: "preserve-3d",
          }}
        >
        {/* Officer Image */}
        <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-[#00629B] to-[#00A9E0]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Officer Info */}
        <div className="p-6">
          {/* Name */}
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>

          {/* Position */}
          <p className="text-[#00629B] font-semibold text-lg mb-1">{position}</p>

          {/* Major */}
          <p className="text-gray-600 text-sm mb-3">{major}</p>

          {/* Bio */}
          <p className="text-gray-700 text-sm leading-relaxed">{bio}</p>

          {/* Contact Links */}
          {(email || linkedin) && (
            <div className="flex gap-3 mt-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-[#00629B] hover:text-[#00A9E0] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  className="text-[#00629B] hover:text-[#00A9E0] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Shine effect on hover (optional polish) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
        whileHover={{ opacity: 0.1 }}
        style={{ transform: "translateZ(30px)" }}
      />
    </motion.div>
    </div>
  );
}
