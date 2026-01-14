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
  // bio: string; OPTIONAL (removed to consolidate space)
  image: string; // Path to image in /public/images/team/
  email?: string;
  linkedin?: string;
  github?: string;
}

// EXECUTIVE BOARD
// INSTRUCTIONS: Replace these placeholder executives with your actual executives!
// See PRESIDENT_GUIDE.md for detailed instructions.
export const executiveBoard: TeamMember[] = [
  {
    id: "executive-001",
    name: "Franceli Gonzalez",
    position: "President",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2027",
    image: "/images/team/Franceli-Gonzalez.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "executive-002",
    name: "Ian Lingo",
    position: "Vice President of Administration",
    major: "Computer Science (Computer Engineering)",
    graduationYear: "2026",
    image: "/images/team/Ian-Lingo.jpg",
    linkedin: "https://www.linkedin.com/in/ianlingo/",
  },
  {
    id: "executive-003",
    name: "Ashok Paudel",
    position: "Vice President of Events",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2027",
    image: "/images/team/Ashok-Paudel.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "executive-004",
    name: "Shreejal Bhattarai",
    position: "Secretary",
    major: "Electrical Engineering",
    graduationYear: "2028",
    image: "/images/team/Shreejal-Bhattarai.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "executive-005",
    name: "Andrea Quan",
    position: "Treasurer",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2026",
    image: "/images/team/Andrea-Quan.png",
    linkedin: "https://linkedin.com/in/username",
  },
  // TEMPLATE - Copy this to add a new executive board member:
  // {
  //   id: "executive-004",              // Increment the number
  //   name: "Full Name",
  //   position: "Position Title",     // e.g., "Treasurer", "Vice President"
  //   major: "Major",
  //   graduationYear: "YYYY",
  //   bio: "Brief bio about the member",   OPTIONAL (removed to consolidate space)
  //   image: "/images/team/firstname-lastname.jpg",  // Upload photo first!
  //   email: "email@txst.edu",
  //   linkedin: "https://linkedin.com/in/username",  // Optional
  // },
];

// OFFICER MEMBERS
// Add officer members here
export const officerMembers: TeamMember[] = [
  {
    id: "officer-001",
    name: "David Baltazar",
    position: "Events & Social Media",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/David-Baltazar.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-002",
    name: "Rene Aguirre",
    position: "Community Outreach & Social Media",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/Rene-Aguirre.png",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-003",
    name: "Troy Hamilton",
    position: "Mentorship Coordinator",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2027",
    image: "/images/team/Troy-Hamilton.png",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-004",
    name: "Trevor Strother",
    position: "Mentorship Coordinator",
    major: "Computer Science (Computer Engineering)",
    graduationYear: "2026",
    image: "/images/team/Trevor-Strother.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-005",
    name: "Lance Deal",
    position: "Recreational Coordinator",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/Lance-Deal.png",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-006",
    name: "Oziel Martinez",
    position: "OPS Director",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/Oziel-Martinez.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-007",
    name: "Daniel Jumao-as",
    position: "OPS Director",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/Daniel-Jumao-as.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-008",
    name: "Diego Sanchez",
    position: "OPS Director & Fundraising",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/Diego-Sanchez.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-009",
    name: "Ustav Adhikari",
    position: "OPS Team Member",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/Utsav-Adhikari.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-010",
    name: "Connor Burgess",
    position: "Fundraising Assistant",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/Connor-Burgess.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-011",
    name: "Sam Arshad",
    position: "Officer of the Gap",
    major: "Computer Science (Computer Engineering)",
    graduationYear: "2025",
    image: "/images/team/Sam-Arshad.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-012",
    name: "Cassandra Vasquez",
    position: "Officer of the Gap",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/Cassandra-Vasquez.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-013",
    name: "Kade Matula",
    position: "Officer Intern",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/Kade-Matula.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-014",
    name: "Steven Setten",
    position: "Officer Intern",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/Steven-Setten.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-015",
    name: "Collin Cook",
    position: "Officer Intern",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/Collin-Cook.jpg",
    linkedin: "https://linkedin.com/in/username",
  },
  // TEMPLATE - Copy this to add a officer member:
  // {
  //   id: "member-001",
  //   name: "Full Name",
  //   position: "Events Coordinator",  // or other officer position
  //   major: "Major",
  //   graduationYear: "YYYY",
  //   bio: "Brief bio about their role",   OPTIONAL (removed to consolidate space)
  //   image: "/images/team/firstname-lastname.jpg",
  //   email: "email@txst.edu",  // Optional
  // },
];

// GENERAL MEMBERS (Optional - if you want to showcase active members)
export const generalMembers: TeamMember[] = [
  // Add general members if needed
];
