/**
 * Computer Society SOCIAL LINKS SECTION
 *
 * Prominent section showing how to connect with Computer Society TXST
 * on various social platforms. More community-focused.
 */

"use client";

import { motion } from "framer-motion";
import FadeIn from "../animations/FadeIn";
import { siteConfig } from "@/content/config";

export default function SocialLinks() {
  const socials = [
    {
      name: "Instagram",
      description: "Follow for updates & photos",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
          <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: siteConfig.computerSocContact.instagram,
      color: "from-[#E1306C] to-[#F77737]",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated and join the conversation on our social platforms
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8">
          {socials.map((social, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ y: -5 }}
              >
                <div
                  className={`bg-gradient-to-br ${social.color} p-8 rounded-2xl text-white text-center shadow-lg hover:shadow-2xl transition-shadow`}
                >
                  <div className="flex justify-center mb-4">{social.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
                  <p className="text-white/90">{social.description}</p>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
