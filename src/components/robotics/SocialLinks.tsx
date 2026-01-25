/**
 * ROBOTICS SOCIAL LINKS SECTION
 *
 * Prominent section showing how to connect with RAS TXST
 * on various social platforms. More community-focused.
 */

"use client";

import { motion } from "framer-motion";
import FadeIn from "../animations/FadeIn";
import { siteConfig } from "@/content/config";

export default function SocialLinks() {
  const socials = [
    {
      name: "Discord",
      description: "Join our community chat",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
      url: siteConfig.RASContact.discord,
      color: "from-[#5865F2] to-[#7289DA]",
    },
    {
      name: "Instagram",
      description: "Follow for updates & photos",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
          <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: siteConfig.RASContact.instagram,
      color: "from-[#E1306C] to-[#F77737]",
    },
    {
      name: "GroupMe",
      description: "Join our other community chat",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.1597 6.57419h1.6801v1.59479h-1.6801V6.57419ZM18.1997 0H5.80011C3.14898 0 1 2.03979 1 4.55577V16.3243C1 18.8402 3.14898 20.88 5.80011 20.88h4.12704L11.9786 24l2.052 -3.12h4.1691C20.8506 20.88 23 18.8402 23 16.3243V4.55574C23 2.03976 20.8506 0 18.1997 0ZM7.56833 8.16895h1.77922V6.57416H7.56833V4.85447h1.77922v-1.6886h1.81215v1.6886h1.6801v-1.6886h1.8121v1.6886h1.7789v1.71969h-1.7789v1.59479h1.7789v1.71957h-1.7789v1.68868h-1.8121V9.88852h-1.6801v1.68868H9.34755V9.88852H7.56833V8.16895ZM20.3122 13.4321s-2.392 4.2759 -8.0716 4.2759c-0.0787 0 -0.1563 -0.001 -0.2336 -0.0023 -0.0771 0.0013 -0.1548 0.0023 -0.2333 0.0023 -5.67954 0 -8.07159 -4.2759 -8.07159 -4.2759s-0.15482 -0.2785 -0.15482 -0.5787c-0.00975 -0.2166 0.10186 -0.5271 0.39481 -0.7101 0.1629 -0.1016 0.3169 -0.1519 0.45969 -0.1676 0.68387 -0.0688 1.08023 0.3538 1.40615 0.8364 0.35994 0.5326 2.43651 2.8659 6.19906 2.9551 3.7628 -0.0892 5.8394 -2.4225 6.1993 -2.9551 0.3259 -0.4826 0.7366 -0.9059 1.4062 -0.8364 0.1428 0.0157 0.2969 0.066 0.4597 0.1676 0.293 0.183 0.407 0.4406 0.3968 0.7099 -0.023 0.3962 -0.1568 0.5789 -0.1568 0.5789Z" />
        </svg>
      ),
      url: siteConfig.RASContact.groupme,
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
