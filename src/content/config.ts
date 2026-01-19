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
    email: "texasstateieee@gmail.com",
    instagram: "https://instagram.com/txst.ieee/",
    linkedin: "https://linkedin.com/company/ieee-txst",
    discord: "https://discord.gg/UZhDvyDHTc", // Discord invite link that never expires
    groupme: "https://groupme.com/join_group/57175086/Z4pE3PCA",
  },

  // Meeting Information
  meetings: {
    schedule: "Every Thursday at 6:30 PM",
    location: "Ingram School of Engineering Building, Room 4103",
    virtualLink: "https://zoom.us/j/your-meeting-id", // No zoom link currently
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
    { label: "Membership", href: "/membership" },
    { label: "About", href: "/about" },
  ],

  // Call to Action Links
  cta: {
    squareSiteUrl: "https://ieeetxst.square.site/s/shop",
    membershipFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfv3l4v_DC_quTEogvxuj_hWZzL_f4XYDqZQ1DHX1sJnPlelQ/viewform?usp=header",
    eventSignupUrl: "https://forms.gle/your-event-signup",
  },
};
