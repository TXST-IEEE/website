/**
 * EVENT CARD WITH 3D TILT EFFECT
 *
 * Similar to OfficerCard, this displays events with a 3D tilt effect
 * that follows mouse movement for a dynamic, engaging experience.
 *
 * USAGE:
 *   <EventCard3D event={eventData} />
 */

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { MouseEvent } from "react";
import type { Event } from "@/content/data/events";

interface EventCard3DProps {
  event: Event;
}

export default function EventCard3D({ event }: EventCard3DProps) {
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

  // Category colors
  const categoryColors = {
    workshop: "bg-purple-500",
    meeting: "bg-blue-500",
    social: "bg-green-500",
    competition: "bg-red-500",
    speaker: "bg-orange-500",
  };

  // Format date to readable format
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  /**
   * Update rotation based on mouse position
   */
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
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
    <div style={{ perspective: "1000px", height: "100%" }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Card content with subtle 3D depth */}
        <div
          style={{
            transform: "translateZ(20px)",
            transformStyle: "preserve-3d",
          }}
          className="h-full flex flex-col"
        >
        {/* Event Image */}
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#00629B] to-[#00A9E0]">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Category Badge */}
          <div
            className={`absolute top-4 right-4 ${categoryColors[event.category]} text-white px-3 py-1 rounded-full text-sm font-semibold uppercase shadow-lg`}
          >
            {event.category}
          </div>
        </div>

        {/* Event Info */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-4 flex-1">{event.description}</p>

          {/* Event Details */}
          <div className="space-y-2">
            {/* Date & Time */}
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#00629B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">
                {formattedDate} at {event.time}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-[#00629B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{event.location}</span>
            </div>
          </div>

          {/* Register Button (if link provided) */}
          {event.registrationLink && (
            <div className="mt-4">
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#00629B] hover:bg-[#00A9E0] text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Register Now
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
        whileHover={{ opacity: 0.1 }}
        style={{ transform: "translateZ(30px)" }}
      />
    </motion.div>
    </div>
  );
}
