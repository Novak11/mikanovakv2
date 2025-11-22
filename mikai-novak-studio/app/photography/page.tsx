import { Metadata } from "next";
import Link from "next/link";
import { Camera, Heart, Calendar, User, Home, ArrowRight } from "lucide-react";
import { Container } from "@/app/components/layout";
import { Button, Card, CardContent } from "@/app/components/ui";
import { CTA } from "@/app/components/sections";

export const metadata: Metadata = {
  title: "Photography Services | Mikai Novak Studio",
  description:
    "Professional photography services in Belgrade. Wedding photography, event coverage, portraits, and interior photography.",
};

const photographyServices = [
  {
    id: "weddings",
    title: "Wedding Photography",
    description:
      "Your wedding day deserves to be captured perfectly. We blend candid moments with elegant portraits to tell your complete love story.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    features: [
      "Full day coverage available",
      "Second photographer option",
      "Engagement sessions",
      "Premium albums",
    ],
  },
  {
    id: "events",
    title: "Event Photography",
    description:
      "From corporate conferences to private celebrations, we capture the energy and key moments that make your event special.",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    features: [
      "Corporate events",
      "Private parties",
      "Conferences",
      "Quick turnaround",
    ],
  },
  {
    id: "portraits",
    title: "Portrait Photography",
    description:
      "Professional headshots and creative portraits that capture your personality. Perfect for business, social media, or personal keepsakes.",
    icon: User,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    features: [
      "Professional headshots",
      "Creative portraits",
      "Family sessions",
      "Personal branding",
    ],
  },
  {
    id: "interiors",
    title: "Interior & Architecture",
    description:
      "Showcase your spaces with stunning architectural and interior photography. Ideal for real estate, hospitality, and design portfolios.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",
    features: [
      "Real estate photography",
      "Architectural details",
      "Hotel & hospitality",
      "Design portfolios",
    ],
  },
];

export default function PhotographyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1920&q=80"
            alt="Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-900/60" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Camera className="w-4 h-4" />
              Photography Services
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Professional Photography Services
            </h1>
            <p className="text-xl text-white/80 mb-8">
              From weddings to corporate events, we capture the moments that
              matter most with artistry and precision.
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
            {photographyServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
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
