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
 * EVENT CATEGORIES: "workshop", "meeting", "social", "competition", "speaker"
 */

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // Format: "YYYY-MM-DD"
  time: string; // Format: "6:00 PM"
  location: string;
  category: "workshop" | "meeting" | "social" | "competition" | "speaker";
  image: string; // Path to image in /public/images/events/
  registrationLink?: string; // Optional: Link to RSVP/register
  isPast?: boolean; // Set to true for past events
}

// Replace these placeholder events with your actual events!
// See PRESIDENT_GUIDE.md for instructions on adding events.
export const events: Event[] = [
  {
    id: "event-001",
    title: "Introduction to Arduino Workshop",
    description:
      "Learn the basics of Arduino programming and build your first circuit. Perfect for beginners!",
    date: "2026-02-15",
    time: "6:00 PM",
    location: "Engineering Building, Room 101",
    category: "workshop",
    image: "https://via.placeholder.com/800x600/8B5CF6/FFFFFF?text=Arduino+Workshop",
    registrationLink: "https://forms.gle/your-form-link",
    isPast: false,
  },
  {
    id: "event-002",
    title: "Weekly General Meeting",
    description:
      "Join us for our weekly meeting where we discuss upcoming events, projects, and opportunities.",
    date: "2026-02-08",
    time: "6:00 PM",
    location: "Engineering Building, Room 101",
    category: "meeting",
    image: "https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=General+Meeting",
    isPast: false,
  },
  {
    id: "event-003",
    title: "Industry Speaker Series",
    description:
      "Hear from a senior engineer at a leading tech company about their career journey and industry insights.",
    date: "2026-02-22",
    time: "7:00 PM",
    location: "Engineering Building, Auditorium",
    category: "speaker",
    image: "https://via.placeholder.com/800x600/F97316/FFFFFF?text=Speaker+Series",
    registrationLink: "https://forms.gle/your-form-link",
    isPast: false,
  },
  // TEMPLATE - Copy this to add a new event:
  // {
  //   id: "event-XXX",
  //   title: "Event Title Here",
  //   description: "Describe your event here",
  //   date: "2026-MM-DD",
  //   time: "6:00 PM",
  //   location: "Location Here",
  //   category: "workshop",
  //   image: "/images/events/your-image.jpg",
  //   registrationLink: "https://forms.gle/your-link",
  //   isPast: false,
  // },
];
