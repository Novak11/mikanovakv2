import { Metadata } from "next";
import Link from "next/link";
import { Video, Tv, Music, Film, Building, ArrowRight } from "lucide-react";
import { Container } from "@/app/components/layout";
import { Button } from "@/app/components/ui";
import { CTA } from "@/app/components/sections";

export const metadata: Metadata = {
  title: "Video Production Services | Mikai Novak Studio",
  description:
    "Professional video production services in Belgrade. Commercials, music videos, documentaries, and corporate videos.",
};

const videoServices = [
  {
    id: "commercials",
    title: "Commercial Videos",
    description:
      "Create impactful video content for your brand. From product showcases to brand stories, we produce high-quality commercial videos that engage your audience and drive conversions.",
    icon: Tv,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    features: [
      "Brand storytelling",
      "Product showcases",
      "Social media content",
      "TV commercials",
    ],
  },
  {
    id: "music-videos",
    title: "Music Videos",
    description:
      "Bring your music to life with cinematic visuals. We work closely with artists to create music videos that capture the essence of their sound and vision.",
    icon: Music,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    features: [
      "Concept development",
      "Cinematic quality",
      "Performance videos",
      "Narrative storytelling",
    ],
  },
  {
    id: "documentaries",
    title: "Documentaries",
    description:
      "Tell compelling real-world stories with professional documentary production. We handle everything from pre-production research to final editing.",
    icon: Film,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800",
    features: [
      "Story research",
      "Interview filming",
      "B-roll footage",
      "Professional editing",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Videos",
    description:
      "Professional videos for internal communications, training, and corporate events. We help businesses communicate their message effectively.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    features: [
      "Training videos",
      "Company profiles",
      "Event coverage",
      "Internal communications",
    ],
  },
];

export default function VideoProductionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80"
            alt="Video Production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-900/60" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Video Production
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Professional Video Production
            </h1>
            <p className="text-xl text-white/80 mb-8">
              From commercials to documentaries, we create compelling video
              content that tells your story and engages your audience.
            </p>
            <Link href="/contact">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Get a Quote
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="grid gap-16">
            {videoServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-8 items-center`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-100 text-accent-600 mb-4">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-primary-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-primary-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-primary-700"
                      >
                        <svg
                          className="w-5 h-5 text-accent-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant="secondary">Book This Service</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
