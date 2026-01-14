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
  // bio: string;
  email?: string;
  linkedin?: string;
}

export default function OfficerCard({
  name,
  position,
  major,
  image,
  // bio,
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
        <div className="relative aspect-[8.5/7] w-full overflow-hidden bg-gradient-to-br from-[#00629B] to-[#00A9E0]">
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
          {/* <p className="text-gray-700 text-sm leading-relaxed">{bio}</p> */}

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
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
