/**
 * HERO SECTION
 *
 * The main landing section of the homepage with:
 * - Large gradient background
 * - Animated text that fades in
 * - Call-to-action buttons
 * - Hero image with parallax effect
 *
 * Uses content from /src/content/pages/home.ts
 */

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Button from "../ui/Button";
import { homeContent } from "@/content/pages/home";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect: image moves slower than content
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0F1E] via-[#1A2332] to-[#00629B]"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.5fr] gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div style={{ y: contentY }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Image
                src="/images/branding/logo_v5.png"
                alt="IEEE Logo"
                width={250}
                height={100}
                priority
                className="drop-shadow-2xl"
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {homeContent.hero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              {homeContent.hero.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-400 mb-8 max-w-xl"
            >
              {homeContent.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="secondary" href="/membership">
                {homeContent.hero.primaryButtonText}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Button>

              <Button variant="ghost" href="/events">
                {homeContent.hero.secondaryButtonText}
                <svg
                  className="w-5 h-5"
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
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl">
              <Image
                src={homeContent.hero.heroImage}
                alt="IEEE TXST Community"
                width={1200}
                height={800}
                priority
                className="w-full h-auto object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00629B]/30 to-transparent" />
            </div>

            {/* Floating accent elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-[#00A9E0]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#00629B]/20 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-8 h-8 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
