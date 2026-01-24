import OfficerCard from "@/components/ui/OfficerCard";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import { hknOfficers } from "@/content/data/team";

export default function HKN() {

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <Section dark className="bg-gradient-to-br from-[#0A0F1E] to-[#00629B]">
        <FadeIn>
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IEEE Eta Kappa Nu
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Check out what HKN TXST has to offer
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Intro Section */}
      <Section>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              HKN TXST
            </h2>
            <div className="w-24 h-1 bg-[#00629B] mx-auto rounded-full" />
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
            HKN TXST is an honor&apos;s society dedicated to selected students within IEEE organization.
            HKN is made up of the top 10% students in repective class who sign up for IEEE-HKN. Students selected 
            are those that have shown strong leadership in academia and community work. 
          </p>
        </FadeIn>
      </Section>

      {/* Officer Members Section */}
      {hknOfficers.length > 0 && (
        <Section className="bg-gray-50">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                HKN Officers
              </h2>
              <div className="w-24 h-1 bg-[#00629B] mx-auto rounded-full" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {hknOfficers.map((officer, index) => (
              <div
                key={officer.id}
                className="w-full max-w-[240px] mx-auto sm:max-w-none"
              >
                <FadeIn key={officer.id} delay={index * 0.1}>
                  <OfficerCard
                    name={officer.name}
                    position={officer.position}
                    major={officer.major}
                    image={officer.image}
                    // bio={officer.bio}
                    email={officer.email}
                    linkedin={officer.linkedin}
                  />
                </FadeIn>
              </div>
            ))}
          </div>
        </Section>
      )}

    </main>
  );
}
