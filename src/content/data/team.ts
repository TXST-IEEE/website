/**
 * TEAM MEMBERS / OFFICERS DATA
 *
 * HOW TO ADD A NEW TEAM MEMBER:
 * 1. Take a professional headshot photo (square format works best)
 * 2. Save the photo to: /public/images/team/firstname-lastname.jpg
 * 3. Copy one of the member objects below
 * 4. Paste it in the appropriate section
 * 5. Update the information
 * 6. Save this file
 */

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  major: string;
  graduationYear: string;
  bio: string;
  image: string; // Path to image in /public/images/team/
  email?: string;
  linkedin?: string;
  github?: string;
}

// EXECUTIVE BOARD
// INSTRUCTIONS: Replace these placeholder officers with your actual officers!
// See PRESIDENT_GUIDE.md for detailed instructions.
export const executiveBoard: TeamMember[] = [
  {
    id: "officer-001",
    name: "President Name",
    position: "President",
    major: "Your Major Here",
    graduationYear: "2026",
    bio: "Add a brief bio here about the president - their interests, what they're excited about for IEEE TXST, etc.",
    image: "https://via.placeholder.com/400x400/00629B/FFFFFF?text=President",
    email: "president@txst.edu",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-002",
    name: "Vice President Name",
    position: "Vice President",
    major: "Your Major Here",
    graduationYear: "2026",
    bio: "Add a brief bio here about the vice president - what they bring to the team, their goals, etc.",
    image: "https://via.placeholder.com/400x400/00629B/FFFFFF?text=Vice+President",
    email: "vp@txst.edu",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-003",
    name: "Secretary Name",
    position: "Secretary",
    major: "Your Major Here",
    graduationYear: "2027",
    bio: "Add a brief bio here about the secretary - their role, interests, and contributions to IEEE TXST.",
    image: "https://via.placeholder.com/400x400/00629B/FFFFFF?text=Secretary",
    email: "secretary@txst.edu",
  },
  // TEMPLATE - Copy this to add a new executive board member:
  // {
  //   id: "officer-004",              // Increment the number
  //   name: "Full Name",
  //   position: "Position Title",     // e.g., "Treasurer", "Events Coordinator"
  //   major: "Major",
  //   graduationYear: "YYYY",
  //   bio: "Brief bio about the member",
  //   image: "/images/team/firstname-lastname.jpg",  // Upload photo first!
  //   email: "email@txst.edu",
  //   linkedin: "https://linkedin.com/in/username",  // Optional
  // },
];

// COMMITTEE CHAIRS & COORDINATORS
// Add committee members here if you have them (Events Coordinator, etc.)
export const committeeMembers: TeamMember[] = [
  // TEMPLATE - Copy this to add a committee member:
  // {
  //   id: "member-001",
  //   name: "Full Name",
  //   position: "Events Coordinator",  // or other committee position
  //   major: "Major",
  //   graduationYear: "YYYY",
  //   bio: "Brief bio about their role",
  //   image: "/images/team/firstname-lastname.jpg",
  //   email: "email@txst.edu",  // Optional
  // },
];

// GENERAL MEMBERS (Optional - if you want to showcase active members)
export const generalMembers: TeamMember[] = [
  // Add general members if needed
];
