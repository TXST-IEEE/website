/**
 * HKN SOCIAL LINKS SECTION
 *
 * Prominent section showing how to connect with HKN TXST
 * on various social platforms. More community-focused.
 */

"use client";

import { motion } from "framer-motion";
import FadeIn from "../animations/FadeIn";
import { siteConfig } from "@/content/config";

export default function SocialLinks() {
  const socials = [
    {
      name: "LinkedIn",
      description: "Connect professionally",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: siteConfig.HKNContact.linkedin,
      color: "from-[#0077B5] to-[#00A0DC]",
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
