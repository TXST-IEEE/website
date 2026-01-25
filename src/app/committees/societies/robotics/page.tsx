import OfficerCard from "@/components/ui/OfficerCard";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import ImageCarousel from "@/components/ui/ImageCarousel";
import SocialLinks from "@/components/robotics/SocialLinks";
import { rasOfficers } from "@/content/data/team";
import { committeeSliderImages } from "@/content/data/sliders";

export default function Robotics() {

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <Section dark className="bg-gradient-to-br from-[#0A0F1E] to-[#00629B]">
        <FadeIn>
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Robotics and Automation Society
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Check out what RAS TXST has to offer
            </p>
          </div>
        </FadeIn>
      </Section>

      <FadeIn>
        <div className="flex flex-col gap-6 shadow-2xl">
          <ImageCarousel images={committeeSliderImages.robotics} />
        </div>
      </FadeIn>

      {/* Intro Section */}
      <Section>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              RAS TXST
            </h2>
            <div className="w-24 h-1 bg-[#00629B] mx-auto rounded-full" />
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
            IEEE Robotics and Automation Society (RAS) at Texas State University brings together students from all 
            disciplines of robotics to design, build, and program real robots. From CAD and 3D-printed chassis to 
            embedded systems and autonomous code, members collaborate across hardware and software. RAS is organized 
            into Intro, Rapid Prototyping, and Industry committees, giving students a clear path to learn 
            fundamentals, build advanced projects, and connect robotics to real-world applications.
          </p>
        </FadeIn>
      </Section>

      {/* RAS Branch Social Links Section */}
      <SocialLinks />

      {/* Officer Members Section */}
      {rasOfficers.length > 0 && (
        <Section className="bg-gray-50">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                RAS Officers
              </h2>
              <div className="w-24 h-1 bg-[#00629B] mx-auto rounded-full" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {rasOfficers.map((officer, index) => (
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
