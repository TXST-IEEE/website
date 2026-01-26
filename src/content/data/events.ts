/**
 * EVENTS DATA
 *
 * HOW TO ADD A NEW EVENT:
 * 1. Copy one of the event objects below
 * 2. Paste it at the top of the array (after the opening [)
 * 3. Update the information for your new event
 * 4. Add the event image to: /public/images/events/
 * 5. Save this file
 *
 * EVENT CATEGORIES: "workshop", "meeting", "social", "speaker", "tour"
 */

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // Format: "YYYY-MM-DD"
  time: string; // Format: "6:00 PM"
  location: string;
  category: "workshop" | "meeting" | "social" | "speaker" | "tour";
  image: string; // Path to image in /public/events/events/
  registrationLink?: string; // Optional: Link to RSVP/register
  isPast?: boolean; // Set to true for past events
}

// Replace these placeholder events with your actual events!
// See PRESIDENT_GUIDE.md for instructions on adding events.

// IMPORTANT: Add new events in ascending order at the very top of the "Events" array.
export const events: Event[] = [
  // TEMPLATE - Copy this to add a new event:
  // {
  //   id: "event-XXX",
  //   title: "Event Title Here",
  //   description: "Describe your event here",
  //   date: "2026-MM-DD",
  //   time: "6:00 PM",
  //   location: "Location Here",
  //   category: "workshop",
  //   image: "/images/events/your-image.jpg",      // Image path: /public/images/events/hero-image.jpg
  //   registrationLink: "https://forms.gle/your-link",
  //   isPast: false,     // Don't forget to update past events to "true" boolean value!                     
  // },
  {
    id: "event-024",
    title: "Dell Tour",
    description:
      "Register to visit the Dell HQ in Round Rock, Texas! Limited seats!",
    date: "2026-02-06",
    time: "7:30 AM",
    location: "Meet at Ingram, Drive to Dell HQ",
    category: "tour",
    image: "/images/events/Dell-Technologies-Logo.jpg",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdZ_CJmQr9IbvxOCYZE-_KM-xXRYFiyimsrPg0BBaI7Gj5FEQ/viewform?usp=publish-editor", 
    isPast: false,
  },
  {
    id: "event-023",
    title: "First OPS Workshop",
    description:
      "Learn the basics of microcontrollers and build circuits using a breadboard. Perfect for beginners!",
    date: "2026-02-05",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4104",
    category: "workshop",
    image: "/images/events/First-OPSMeet-Poster-Fall2025.png",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdZ_CJmQr9IbvxOCYZE-_KM-xXRYFiyimsrPg0BBaI7Gj5FEQ/viewform?usp=publish-editor",
    isPast: false,
  },
  {
    id: "event-022",
    title: "First RAS General Meeting",
    description:
      "Join us for our first RAS general meeting where we discuss upcoming robotics projects and opportunities. RSVP for free food and drinks!",
    date: "2026-02-02",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4103",
    category: "meeting",
    image: "/images/branding/RAS-Logo.jpg",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdZ_CJmQr9IbvxOCYZE-_KM-xXRYFiyimsrPg0BBaI7Gj5FEQ/viewform?usp=publish-editor",
    isPast: false,
  },
  {
    id: "event-021",
    title: "First General Meeting",
    description:
      "Join us for our first general meeting where we discuss upcoming events, projects, and opportunities. RSVP for free food and drinks!",
    date: "2026-01-29",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4104",
    category: "meeting",
    image: "/images/branding/IEEE-TXST-Logo-OG.jpg",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdZ_CJmQr9IbvxOCYZE-_KM-xXRYFiyimsrPg0BBaI7Gj5FEQ/viewform?usp=publish-editor",
    isPast: false,
  },
  {
    id: "event-020",
    title: "Finals Study Social",
    description:
      "Come study and grab snacks ahead of finals week!",
    date: "2025-12-04",
    time: "3:20 PM",
    location: "Ingram Engineering Building, Room 3104",
    category: "social",
    image: "/images/events/FinalsStudy-IEEESocial-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-019",
    title: "Mentorship Workshop",
    description:
      "Join our study tips and tricks workshop with mentorship officer Troy Hamilton!",
    date: "2025-12-02",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 2104",
    category: "workshop",
    image: "/images/events/TroyH-WorkshopMeet-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-018",
    title: "Diane Welker Speaker",
    description:
      "Come to learn valuable insight from our Industry Advising Board Chair, Diane Welker!",
    date: "2025-11-20",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4103",
    category: "speaker",
    image: "/images/events/DianeW-IEEESpeaker-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-017",
    title: "Friendsgiving Potluck Social",
    description:
      "Bring a dish and come hang out at our friendsgiving feast collab with SWE and SHPE!",
    date: "2025-11-18",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4101",
    category: "social",
    image: "/images/events/Friendsgiving-IEEESocial-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-016",
    title: "Last OPS Workshop",
    description:
      "Learn the basics of microcontrollers and build circuits using a breadboard. Perfect for beginners!",
    date: "2025-11-06",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4103",
    category: "workshop",
    image: "/images/events/Last-OPSMeet-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-015",
    title: "Tesla Gigafactory Tour",
    description:
      "Register to visit the Tesla Gigafactory in Austin, Texas! Limited seats!",
    date: "2025-10-27",
    time: "7:30 AM",
    location: "Meet at Ingram, Drive to Tesla Gigafactory",
    category: "tour",
    image: "/images/events/Tesla-IEEETour-Photo-Fall2025.jpg",
    isPast: true,
  },
  {
    id: "event-014",
    title: "Pumpkin Painting Social",
    description:
      "Come join a collab with SWE and SHPE for a pumpkin paininting social event!",
    date: "2025-10-29",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 3101",
    category: "social",
    image: "/images/events/PumpkinPaint-IEEESocial-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-013",
    title: "Fourth OPS Workshop",
    description:
      "Learn the basics of microcontrollers and build circuits using a breadboard. Perfect for beginners!",
    date: "2025-10-23",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4103",
    category: "workshop",
    image: "/images/events/Fourth-OPSMeet-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-012",
    title: "Mentorship Workshop",
    description:
      "Join our resume tips and tricks workshop with mentorship officer Trevor Strother!",
    date: "2025-10-22",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 3103",
    category: "workshop",
    image: "/images/events/TrevorS-WorkshopMeet-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-011",
    title: "Cesar Villanueva-Vazquez Speaker",
    description:
      "Come to learn valuable insight of the Apple workforce and connect with our guest speaker Cesar Villanueva-Vazquez!",
    date: "2025-10-16",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4103",
    category: "speaker",
    image: "/images/events/CesarVV-IEEESpeaker-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-010",
    title: "Third OPS Workshop",
    description:
      "Learn the basics of microcontrollers and build circuits using a breadboard. Perfect for beginners!",
    date: "2025-10-09",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4103",
    category: "workshop",
    image: "/images/events/Third-OPSMeet-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-009",
    title: "Nethaneel Edwards Speaker",
    description:
      "Learn about his personal experience and how he got into a career in software engineering from industry guest Nethaneel Edwards!",
    date: "2025-10-02",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4103",
    category: "speaker",
    image: "/images/events/NethaneelE-IEEESpeaker-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-008",
    title: "Second OPS Workshop",
    description:
      "Learn the basics of microcontrollers and build circuits using a breadboard. Perfect for beginners!",
    date: "2025-09-25",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4103",
    category: "workshop",
    image: "/images/events/Second-OPSMeet-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-007",
    title: "Dell Corporate Speaker",
    description:
      "Come meet Dell speakers and learn what Dell has to offer!",
    date: "2025-09-24",
    time: "6:30 PM",
    location: "LBJ Building, Room 322",
    category: "speaker",
    image: "/images/events/Dell-IEEESpeaker-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-006",
    title: "Mike Mournighan Speaker",
    description:
      "Join us for an inspiring evening with Mike as he shares his engineering journey!",
    date: "2025-09-18",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4103",
    category: "speaker",
    image: "/images/events/MikeM-IEEESpeaker-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-005",
    title: "First OPS Workshop",
    description:
      "Learn the basics of microcontrollers and build circuits using a breadboard. Perfect for beginners!",
    date: "2025-09-11",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4103",
    category: "workshop",
    image: "/images/events/First-OPSMeet-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-004",
    title: "First General Meeting",
    description:
      "Join us for our first general meeting where we discuss upcoming events, projects, and opportunities. RSVP for free food and drinks!",
    date: "2025-09-04",
    time: "6:30 PM",
    location: "Ingram Engineering Building, Room 4103",
    category: "meeting",
    image: "/images/events/First-IEEEMeet-Poster-Fall2025.png",
    isPast: true,
  },
  {
    id: "event-003",
    title: "Google Tour",
    description:
      "Register to visit the Google Office in Austin, Texas! Limited seats!",
    date: "2025-03-21",
    time: "7:30 AM",
    location: "Meet at Ingram, Drive to Google Office",
    category: "tour",
    image: "/images/events/Google-IEEETour-Photo-Spring2025.png",
    isPast: true,
  },
  {
    id: "event-002",
    title: "Dell Tour",
    description:
      "Register to visit the Dell Office in Austin, Texas! Limited seats!",
    date: "2025-03-07",
    time: "7:30 AM",
    location: "Meet at Ingram, Drive to Dell Office",
    category: "tour",
    image: "/images/events/Dell-IEEETour-Photo-Spring2025.jpg",
    isPast: true,
  },
  {
    id: "event-001",
    title: "Cloudflare Tour",
    description:
      "Register to visit the Cloudflare Office in Austin, Texas! Limited seats!",
    date: "2024-11-08",
    time: "7:30 AM",
    location: "Meet at Ingram, Drive to Cloudflare Office",
    category: "tour",
    image: "/images/events/Cloudflare-IEEETour-Photo-Fall2024.png",
    isPast: true,
  },
  {
    id: "event-000",
    title: "Samsung Tour",
    description:
      "Register to visit the Samsung Office in Austin, Texas! Limited seats!",
    date: "2024-10-22",
    time: "7:30 AM",
    location: "Meet at Ingram, Drive to Samsung Office",
    category: "tour",
    image: "/images/events/Samsung-IEEETour-Photo-Fall2024.png",
    isPast: true,
  },
];
