import OfficerCard from "@/components/ui/OfficerCard";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import { committeeOfficers } from "@/content/data/team";

export default function Committees() {
  const branches = [
    {
      name: "IEEE Student Branch",
      description:
        "The core IEEE organization at Texas State, connecting students to industry, events, and leadership.",
      link: "/",
    },
    {
      name: "IEEE Robotics & Automation Society",
      description:
        "Hands-on robotics with ROS2, autonomous systems, sensors, and real-world competitions.",
      link: "/societies/robotics",
    },
    {
      name: "IEEE Computer Society",
      description:
        "A technical society dedicated to advancing skills in software, data, and artificial intelligence through hands-on learning.",
      link: "/societies/computer",
    },
    {
      name: "IEEE-HKN (Honor Society)",
      description:
        "An honor society recognizing academic excellence, leadership, and service in engineering.",
      link: "/hkn",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <Section dark className="bg-gradient-to-br from-[#0A0F1E] to-[#00629B]">
        <FadeIn>
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Committees
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Check out the many committees IEEE TXST has to offer
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Intro Section */}
      <Section>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IEEE Committees at Texas State
            </h2>
            <div className="w-24 h-1 bg-[#00629B] mx-auto rounded-full" />
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
            IEEE at Texas State University is made up of multiple committees and
            societies, each focused on different areas of engineering,
            technology, and leadership. Students are encouraged to join one or
            more committees based on their interests.
          </p>
        </FadeIn>

        {/* Committee Cards */}
        <div className="grid grid-cols-1 min-[520px]:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {branches.map((b, index) => (
            <div
              key={b.name}
              className="w-full max-w-[240px] mx-auto sm:max-w-none"
            >
              <FadeIn delay={index * 0.1}>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {b.name}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-1">{b.description}</p>

                    <Button href={b.link} variant="primary" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Committee Officers Section */}
        <Section>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Committee Officers
              </h2>
              <div className="w-24 h-1 bg-[#00629B] mx-auto rounded-full" />
            </div>
          </FadeIn>

          {/* Committee Grid */}
          <div className="grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {committeeOfficers.map((committee, index) => (
              <div
                key={committee.id}
                className="w-full max-w-[240px] mx-auto sm:max-w-none"
              >
                <FadeIn delay={index * 0.1}>
                  <OfficerCard
                    name={committee.name}
                    position={committee.position}
                    major={committee.major}
                    image={committee.image}
                    // bio={committee.bio}
                    email={committee.email}
                    linkedin={committee.linkedin}
                  />
                </FadeIn>
              </div>
            ))}
          </div>
        </Section>
      </Section>
    </main>
  );
}
