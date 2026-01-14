/**
 * EVENT CARD COMPONENT
 *
 * Displays event information in a beautiful card with hover effects.
 * Includes image, title, date, location, and register button.
 *
 * USAGE:
 *   <EventCard
 *     title="Arduino Workshop"
 *     description="Learn Arduino basics..."
 *     date="2026-02-15"
 *     time="6:00 PM"
 *     location="Engineering Building, Room 101"
 *     category="workshop"
 *     image="/images/events/arduino.jpg"
 *     registrationLink="https://forms.gle/..."
 *   />
 *
 * FEATURES:
 *   - Image zoom on hover
 *   - Category tag with color coding
 *   - Register button reveals on hover
 *   - Shadow grows on hover
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: "workshop" | "meeting" | "social" | "speaker" | "tour";
  image: string;
  registrationLink?: string;
}

export default function EventCard({
  title,
  description,
  date,
  time,
  location,
  category,
  image,
  registrationLink,
}: EventCardProps) {
  // Category colors
  const categoryColors = {
    workshop: "bg-purple-500",
    meeting: "bg-blue-500",
    social: "bg-green-500",
    speaker: "bg-orange-500",
    tour: "bg-red-500",
  };

  // Format date to readable format
  const [year, month, day] = date.split("-").map(Number);
  const localDate = new Date(year, month - 1, day); // local midnight
  const formattedDate = localDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative aspect-[11.3/12] overflow-hidden bg-gray-200">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Category Badge */}
        <div
          className={`absolute top-4 right-4 ${categoryColors[category]} text-white px-3 py-1 rounded-full text-sm font-semibold uppercase`}
        >
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          {/* Date & Time */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <svg
              className="w-4 h-4 text-[#00629B]"
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
            <span>
              {formattedDate} at {time}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <svg
              className="w-4 h-4 text-[#00629B]"
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
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        {/* Register Button (appears on hover) */}
        {registrationLink && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="primary" className="w-full">
                Register Now
              </Button>
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
