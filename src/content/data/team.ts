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
 * 
 * Note that Officers listed in order go from 
 * Main IEEE branch -> Robotics (RAS) -> Eta Kappa Nu (HKN) -> Computer Society
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
    image: "/images/team/mainbranch/franceli-gonzalez.jpg",
    linkedin: "https://www.linkedin.com/in/franceli-gonzalez/",
  },
  {
    id: "executive-002",
    name: "Ian Lingo",
    position: "Vice President of Administration",
    major: "Computer Science",
    graduationYear: "2026",
    image: "/images/team/mainbranch/ian-lingo.jpg",
    linkedin: "https://www.linkedin.com/in/ianlingo/",
  },
  {
    id: "executive-003",
    name: "Ashok Paudel",
    position: "Vice President of Events",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2027",
    image: "/images/team/mainbranch/ashok-paudel.jpg",
    linkedin: "https://www.linkedin.com/in/ashokpaudelapril/",
  },
  {
    id: "executive-004",
    name: "Shreejal Bhattarai",
    position: "Secretary",
    major: "Electrical Engineering",
    graduationYear: "2028",
    image: "/images/team/mainbranch/shreejal-bhattarai.jpg",
    linkedin: "https://www.linkedin.com/in/shreejalbhattarai/",
  },
  {
    id: "executive-005",
    name: "Andrea Quan",
    position: "Treasurer",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2026",
    image: "/images/team/mainbranch/andrea-quan.png",
    linkedin: "https://www.linkedin.com/in/andreatquan/",
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
    image: "/images/team/mainbranch/david-baltazar.jpg",
    linkedin: "https://www.linkedin.com/in/david-baltazar-37b89b328/",
  },
  {
    id: "officer-002",
    name: "Rene Aguirre",
    position: "Community Outreach & Social Media",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/rene-aguirre.jpg",
    linkedin: "https://www.linkedin.com/in/rene-aguirre-50b8b722b/",
  },
  {
    id: "officer-003",
    name: "Troy Hamilton",
    position: "Mentorship Coordinator",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2027",
    image: "/images/team/mainbranch/troy-hamilton.png",
    linkedin: "https://www.linkedin.com/in/troy-l-6b6466252/",
  },
  {
    id: "officer-004",
    name: "Trevor Strother",
    position: "Mentorship Coordinator",
    major: "Computer Science (Computer Engineering)",
    graduationYear: "2026",
    image: "/images/team/mainbranch/trevor-strother.jpg",
    linkedin: "https://www.linkedin.com/in/trevor-strother-537aa3224/",
  },
  {
    id: "officer-005",
    name: "Lance Deal",
    position: "Recreational Coordinator",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/lance-deal.png",
    //linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "officer-006",
    name: "Oziel Martinez",
    position: "Workshop Officer",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/oziel-martinez.jpg",
    linkedin: "https://www.linkedin.com/in/oziel-martinez-3893022a2/",
  },
  {
    id: "officer-007",
    name: "Daniel Jumao-as",
    position: "Workshop Officer",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/daniel-jumao-as.jpg",
    linkedin: "https://www.linkedin.com/in/danieljumaoas/",
  },
  {
    id: "officer-008",
    name: "Diego Sanchez",
    position: "OPS Co-Director",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/diego-sanchez.jpg",
    linkedin: "https://www.linkedin.com/in/diegosanchez69/",
  },
  {
    id: "officer-009",
    name: "Ustav Adhikari",
    position: "OPS Team Member",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/utsav-adhikari.jpg",
    linkedin: "https://www.linkedin.com/in/u-adhikari/",
  },
  {
    id: "officer-010",
    name: "Connor Burgess",
    position: "Fundraising Co-Director",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/connor-burgess.jpg",
    linkedin: "https://www.linkedin.com/in/connor-burgess-ba08792b6/",
  },
  {
    id: "officer-011",
    name: "Cassandra Vasquez",
    position: "Officer of the Gap",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/cassandra-vasquez.jpg",
    linkedin: "https://www.linkedin.com/in/cassandra-vasquez/",
  },
  {
    id: "officer-012",
    name: "Kade Matula",
    position: "Officer Intern",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/kade-matula.jpg",
    linkedin: "https://www.linkedin.com/in/kade-matula-397079310/",
  },
  {
    id: "officer-013",
    name: "Steven Setten",
    position: "Officer Intern",
    major: "Computer Science",
    graduationYear: "2028",
    image: "/images/team/mainbranch/steven-setten.jpg",
    linkedin: "https://www.linkedin.com/in/stevenvansetten/",
  },
  {
    id: "officer-014",
    name: "Collin Cook",
    position: "OPS Co-Director",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/collin-cook.jpg",
    linkedin: "https://www.linkedin.com/in/collin-cook-00a81b367/",
  },
  {
    id: "officer-015",
    name: "Raymundo Guajardo",
    position: "Officer Intern",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/raymundo-guajardo.jpg",
    linkedin: "https://www.linkedin.com/in/raymundo-guajardo-8248292b0/",
  },
  {
    id: "officer-016",
    name: "Clay Zetune",
    position: "OPS Tech Lead",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/clay-zetune.jpg",
    linkedin: "https://www.linkedin.com/in/clay-zetune/",
  },
  // TEMPLATE - Copy this to add a officer member:
  // {
  //   id: "member-001",
  //   name: "Full Name",
  //   position: "Events Coordinator",  // or other officer position
  //   major: "Major",
  //   graduationYear: "YYYY",
  //   bio: "Brief bio about their role",   OPTIONAL (removed to consolidate space)
  //   image: "/images/team/committee-name/firstname-lastname.jpg",
  //   email: "email@txst.edu",  // Optional
  // },
];

// RAS COMMITTEE OFFICERS
// Add RAS committee officers here
export const rasOfficers: TeamMember[] = [
  {
    id: "ras-001",
    name: "Nathan Charles",
    position: "President",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2026",
    image: "/images/team/ras/nathan-charles.jpg",
    linkedin: "https://www.linkedin.com/in/nathan--charles/",
  },
  {
    id: "ras-002",
    name: "Darryl Murray",
    position: "Vice President of Events",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2026",
    image: "/images/team/ras/darryl-murray.jpg",
    linkedin: "https://www.linkedin.com/in/darrylmurrayiii/",
  },
  {
    id: "ras-003",
    name: "Aiden Salinas",
    position: "Vice President of Administration & Intro Robotics Director",
    major: "Computer Science",
    graduationYear: "2026",
    image: "/images/team/ras/aiden-salinas.jpg",
    linkedin: "https://www.linkedin.com/in/aiden-salinas-8b3265326/",
  },
  {
    id: "ras-004",
    name: "Ian Lingo",
    position: "Treasurer & Industry Robotics Director",
    major: "Computer Science",
    graduationYear: "2026",
    image: "/images/team/mainbranch/ian-lingo.jpg",
    linkedin: "https://www.linkedin.com/in/ianlingo/",
  },
  {
    id: "ras-005",
    name: "Franceli Gonzalez",
    position: "Secretary",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2027",
    image: "/images/team/mainbranch/franceli-gonzalez.jpg",
    linkedin: "https://www.linkedin.com/in/franceli-gonzalez/",
  },
  {
    id: "ras-006",
    name: "Alex Mandujano",
    position: "Intro Project Lead",
    major: "Mechanical Engineering & Computer Science",
    graduationYear: "2027",
    image: "/images/team/ras/alex-mandujano.jpg",
    linkedin: "https://www.linkedin.com/in/alex-m-386666314/",
  },
  {
    id: "ras-007",
    name: "Cassandra Vasquez",
    position: "Industry Project Lead",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/cassandra-vasquez.jpg",
    linkedin: "https://www.linkedin.com/in/cassandra-vasquez/",
  },
  {
    id: "ras-008",
    name: "Dorgis Brooks",
    position: "Rapid Prototyping Robotics Director",
    major: "Mechanical Engineering",
    graduationYear: "2027",
    image: "/images/team/ras/dorgis-brooks.jpg",
    linkedin: "https://www.linkedin.com/in/dorgis-brooks-6b3017203/",
  },
  {
    id: "ras-009",
    name: "Lance Deal",
    position: "Rapid Prototyping Project Lead",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/lance-deal.png",
    //linkedin: "https://linkedin.com/in/username",
  },
  {
    id: "ras-010",
    name: "Samantha Conejo",
    position: "Social Media",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2026",
    image: "/images/team/ras/samantha-conejo.jpg",
    linkedin: "https://www.linkedin.com/in/samantha-conejo-410945212/",
  },
  {
    id: "ras-011",
    name: "Alvin Esparza",
    position: "Community Outreach",
    major: "Electrical Engineering",
    graduationYear: "2027",
    image: "/images/branding/txst-bobcat-logo.png",
    //linkedin: "https://www.linkedin.com/in/samantha-conejo-410945212/",
  },
  // TEMPLATE - Copy this to add a committee officer:
  // {
  //   id: "committee-001",
  //   name: "Full Name",
  //   position: "RAS Events Coordinator",  // or other officer position
  //   major: "Major",
  //   graduationYear: "YYYY",
  //   bio: "Brief bio about their role",   OPTIONAL (removed to consolidate space)
  //   image: "/images/team/committee-name/firstname-lastname.jpg",
  //   email: "email@txst.edu",  // Optional
  // },
];

// HKN COMMITTEE OFFICERS
// Add HKN committee officers here
export const hknOfficers: TeamMember[] = [
  {
    id: "hkn-001",
    name: "Cameron Tobias",
    position: "President",
    major: "Electrical Engineering (Micro and Nano)",
    graduationYear: "2027",
    image: "/images/team/hkn/cameron-tobias.jpg",
    linkedin: "https://www.linkedin.com/in/cameron-tobias-05b57133a/",
  },
  {
    id: "hkn-002",
    name: "Kyra Ely",
    position: "Vice President",
    major: "Electrical Engineering & Sound Recording Tech",
    graduationYear: "2027",
    image: "/images/team/hkn/kyra-ely.jpg",
    linkedin: "https://www.linkedin.com/in/kyraely/",
  },
  {
    id: "hkn-003",
    name: "Ian Lingo",
    position: "Treasurer",
    major: "Computer Science",
    graduationYear: "2026",
    image: "/images/team/mainbranch/ian-lingo.jpg",
    linkedin: "https://www.linkedin.com/in/ianlingo/",
  },
  {
    id: "hkn-004",
    name: "Ashok Paudel",
    position: "Recording Secretary",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2027",
    image: "/images/team/mainbranch/ashok-paudel.jpg",
    linkedin: "https://www.linkedin.com/in/ashokpaudelapril/",
  },
  {
    id: "hkn-005",
    name: "Jessica Saddington",
    position: "Corresponding Secretary",
    major: "Electrical Engineering",
    graduationYear: "2027",
    image: "/images/team/hkn/jessica-saddington.jpg",
    linkedin: "https://www.linkedin.com/in/jessica-saddington/",
  },
  // TEMPLATE - Copy this to add a committee officer:
  // {
  //   id: "committee-001",
  //   name: "Full Name",
  //   position: "RAS Events Coordinator",  // or other officer position
  //   major: "Major",
  //   graduationYear: "YYYY",
  //   bio: "Brief bio about their role",   OPTIONAL (removed to consolidate space)
  //   image: "/images/team/committee-name/firstname-lastname.jpg",
  //   email: "email@txst.edu",  // Optional
  // },
];

// Computer Society COMMITTEE OFFICERS
// Add Computer Society committee officers here
export const computerSocOfficers: TeamMember[] = [
  {
    id: "computerSoc-001",
    name: "Oziel Martinez",
    position: "President & PCB Co-Director",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/oziel-martinez.jpg",
    linkedin: "https://www.linkedin.com/in/oziel-martinez-3893022a2/",
  },
  {
    id: "computerSoc-002",
    name: "Trevor Strother",
    position: "Vice President of Administration & PC Teardown Director",
    major: "Computer Science (Computer Engineering)",
    graduationYear: "2026",
    image: "/images/team/mainbranch/trevor-strother.jpg",
    linkedin: "https://www.linkedin.com/in/trevor-strother-537aa3224/",
  },
  {
    id: "computerSoc-003",
    name: "Daniel Jumao-as",
    position: "Vice President of Events & PCB Co-Director",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/daniel-jumao-as.jpg",
    linkedin: "https://www.linkedin.com/in/danieljumaoas/",
  },
  {
    id: "computerSoc-004",
    name: "Franceli Gonzalez",
    position: "Secretary & Industrial Automation Director",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2027",
    image: "/images/team/mainbranch/franceli-gonzalez.jpg",
    linkedin: "https://www.linkedin.com/in/franceli-gonzalez/",
  },
  {
    id: "computerSoc-005",
    name: "Diego Sanchez",
    position: "Microprocessors Director",
    major: "Electrical Engineering (Computer Engineering)",
    graduationYear: "2028",
    image: "/images/team/mainbranch/diego-sanchez.jpg",
    linkedin: "https://www.linkedin.com/in/diegosanchez69/",
  },
  {
    id: "computerSoc-006",
    name: "Steven Setten",
    position: "Cybersecurity Director",
    major: "Computer Science",
    graduationYear: "2028",
    image: "/images/team/mainbranch/steven-setten.jpg",
    linkedin: "https://www.linkedin.com/in/stevenvansetten/",
  },
  // TEMPLATE - Copy this to add a committee officer:
  // {
  //   id: "committee-001",
  //   name: "Full Name",
  //   position: "RAS Events Coordinator",  // or other officer position
  //   major: "Major",
  //   graduationYear: "YYYY",
  //   bio: "Brief bio about their role",   OPTIONAL (removed to consolidate space)
  //   image: "/images/team/committee-name/firstname-lastname.jpg",
  //   email: "email@txst.edu",  // Optional
  // },
];
