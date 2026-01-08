/**
 * SITE CONFIGURATION
 *
 * This file contains all the main settings for the IEEE TXST website.
 * Non-technical users can edit these values to update site-wide information.
 */

export const siteConfig = {
  // Organization Info
  organizationName: "IEEE Texas State University",
  organizationShortName: "IEEE TXST",
  tagline: "Advancing technology for humanity",

  // Contact Information
  contact: {
    email: "ieee@txst.edu",
    instagram: "https://instagram.com/ieee_txst",
    facebook: "https://facebook.com/ieee.txst",
    linkedin: "https://linkedin.com/company/ieee-txst",
    discord: "https://discord.gg/ieee-txst",
  },

  // Meeting Information
  meetings: {
    schedule: "Every Thursday at 6:00 PM",
    location: "Engineering Building, Room 101",
    virtualLink: "https://zoom.us/j/your-meeting-id",
  },

  // Brand Colors (IEEE Official Colors)
  colors: {
    primary: "#00629B",      // IEEE Blue
    secondary: "#FFFFFF",    // White
    accent: "#000000",       // Black
    highlight: "#00A9E0",    // Light Blue
  },

  // Navigation Links
  navigation: [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Officers", href: "/officers" },
    { label: "Become a Member", href: "/membership" },
    { label: "About", href: "/about" },
  ],

  // Call to Action Links
  cta: {
    membershipFormUrl: "https://forms.gle/your-membership-form",
    eventSignupUrl: "https://forms.gle/your-event-signup",
  },
};
