/**
 * EVENTS PAGE
 *
 * Displays all IEEE TXST events with 3D animated cards.
 * Events are pulled from /src/content/data/events.ts
 *
 * Features:
 * - 3D tilt effect on event cards
 * - Filter by category (All, Workshops, Meetings, etc.)
 * - Upcoming and past events sections
 *
 * TO ADD A NEW EVENT:
 * Go to /src/content/data/events.ts and follow the instructions
 */

import { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Events",
  description: "Explore upcoming and past IEEE TXST events, workshops, socials, and networking opportunities."
};

export default function EventsPage() {
  return <EventsClient />;
}
