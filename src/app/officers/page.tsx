/**
 * OFFICERS PAGE
 *
 * Displays IEEE TXST leadership team with 3D animated cards.
 * Officers are pulled from /src/content/data/team.ts
 *
 * TO ADD A NEW OFFICER:
 * 1. Go to /src/content/data/team.ts
 * 2. Follow the instructions in that file
 * 3. Add officer photo to /public/images/team/
 */

import OfficerCard from "@/components/ui/OfficerCard";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { executiveBoard, committeeMembers } from "@/content/data/team";

export default function Officers() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <Section dark className="bg-gradient-to-br from-[#0A0F1E] to-[#00629B]">
        <FadeIn>
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Meet the students leading IEEE TXST
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Executive Board Section */}
      <Section>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Executive Board
            </h2>
            <div className="w-24 h-1 bg-[#00629B] mx-auto rounded-full" />
          </div>
        </FadeIn>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executiveBoard.map((officer, index) => (
            <FadeIn key={officer.id} delay={index * 0.1}>
              <OfficerCard
                name={officer.name}
                position={officer.position}
                major={officer.major}
                image={officer.image}
                bio={officer.bio}
                email={officer.email}
                linkedin={officer.linkedin}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Committee Members Section (if any exist) */}
      {committeeMembers.length > 0 && (
        <Section className="bg-gray-50">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Committee Chairs
              </h2>
              <div className="w-24 h-1 bg-[#00629B] mx-auto rounded-full" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member, index) => (
              <FadeIn key={member.id} delay={index * 0.1}>
                <OfficerCard
                  name={member.name}
                  position={member.position}
                  major={member.major}
                  image={member.image}
                  bio={member.bio}
                  email={member.email}
                  linkedin={member.linkedin}
                />
              </FadeIn>
            ))}
          </div>
        </Section>
      )}

      {/* Become an Officer Section */}
      <Section dark className="bg-gradient-to-br from-[#00629B] to-[#00A9E0]">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interested in Leadership?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Officer positions are open to active IEEE TXST members. Elections
              are typically held at the end of each semester. Get involved, show
              your dedication, and you could be part of next year&apos;s leadership team!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" href="/membership">
                Learn About Membership
              </Button>
              <Button variant="ghost" href="/events">
                Get Involved
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </main>
  );
}
