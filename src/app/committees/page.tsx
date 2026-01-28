import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";

export default function Committees() {
  const branches = [
    {
      name: "IEEE Main Branch",
      description:
        "The central IEEE organization at Texas State, focused on professional development, industry connections, technical events, and leadership opportunities for engineering and technology students.",
      link: "/",
      image: "/images/branding/ieee-logo.png",
      officialUrl: "https://www.ieee.org/",
    },
    {
      name: "IEEE Robotics & Automation Society",
      description:
        "A robotics community focused on building real systems using ROS2, sensors, autonomous navigation, and rapid prototyping, with opportunities to compete and work on industry-relevant projects.",
      link: "/committees/societies/robotics",
      image: "/images/branding/ras-logo.jpg",
      officialUrl: "https://www.ieee-ras.org/",
    },
    {
      name: "IEEE Computer Society",
      description:
        "A technical society for students interested in software, data, and AI, offering workshops, projects, and learning opportunities to build practical skills for modern tech careers.",
      link: "/committees/societies/computersoc",
      image: "/images/branding/computersociety-logo.jpg",
      officialUrl: "https://www.computer.org/",
    },
    {
      name: "IEEE Eta Kappa Nu",
      description:
        "An honor society recognizing academic excellence, leadership, and service, while providing members with mentorship, networking, and professional growth opportunities.",
      link: "/committees/societies/hkn",
      image: "/images/branding/hkn-logo.png",
      officialUrl: "https://hkn.ieee.org/",
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
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative w-full h-[180px] overflow-hidden bg-gradient-to-br from-[#00629B] to-[#00A9E0]">
                    <Image
                      src={b.image}
                      alt={b.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {b.name}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-1">{b.description}</p>

                    <div className="mt-auto flex flex-col gap-3">
                      {b.officialUrl && (
                        <a
                          href={b.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-md font-semibold text-[#00629B] hover:text-[#00A9E0] transition-colors"
                        >
                          Official {b.name} website here
                        </a>
                      )}

                      <Button href={b.link} variant="primary" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
