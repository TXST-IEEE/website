/**
 * MODERN NAVBAR COMPONENT
 *
 * A beautiful, animated navigation bar with:
 * - Glass morphism effect (frosted glass look)
 * - Smooth scroll animations
 * - Active page indicator
 * - Hover effects on links
 * - Mobile-responsive (mobile menu coming soon)
 *
 * FEATURES:
 * - Sticky positioning
 * - Changes opacity/blur on scroll
 * - Smooth link animations
 * - IEEE logo
 *
 * This component uses the navigation links from /src/content/config.ts
 */

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/config";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Change navbar background opacity based on scroll position
  const navbarBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 15, 30, 0.7)", "rgba(10, 15, 30, 0.95)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor: navbarBg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/branding/ieee_logo_less.png"
                alt="IEEE TXST Logo"
                width={100}
                height={40}
                priority
                className="h-auto w-auto"
              />
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
            {siteConfig.navigation.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-white text-lg font-medium transition-colors hover:text-[#00A9E0]"
                  >
                    {link.label}

                    {/* Active Indicator - Underline */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#00A9E0]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover Underline */}
                    {!isActive && (
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white/50"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href={siteConfig.cta.membershipFormUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="bg-[#00629B] hover:bg-[#00A9E0] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
