import { Metadata } from "next";
import { Award, Users, Camera, Heart } from "lucide-react";
import { Container } from "@/app/components/layout";
import { Card, CardContent } from "@/app/components/ui";
import { CTA } from "@/app/components/sections";
import { teamMembers } from "@/app/data/team";

export const metadata: Metadata = {
  title: "About Us | Mikai Novak Studio",
  description:
    "Learn about Mikai Novak Studio, our team, and our passion for professional photography and video production in Belgrade.",
};

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We pour our hearts into every project, treating each one as an opportunity to create something extraordinary.",
  },
  {
    icon: Camera,
    title: "Quality",
    description:
      "We never compromise on quality. Every shot, every frame is crafted to perfection.",
  },
  {
    icon: Users,
    title: "Connection",
    description:
      "We build genuine relationships with our clients, understanding their vision to deliver beyond expectations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Our commitment to excellence drives us to continuously improve and innovate in our craft.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mt-3 mb-6">
              Our Story
            </h1>
            <p className="text-lg text-primary-600">
              Founded in Belgrade with a passion for visual storytelling, we've
              grown into a full-service creative studio dedicated to capturing
              life's most meaningful moments.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800"
                alt="Our Studio"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary-900 mb-6">
                Capturing Moments Since 2016
              </h2>
              <div className="space-y-4 text-primary-600">
                <p>
                  What started as a one-person passion project has grown into
                  Belgrade's trusted creative studio. Mikai Novak Studio was
                  founded with a simple belief: every moment deserves to be
                  captured beautifully.
                </p>
                <p>
                  Over the years, we've had the privilege of documenting
                  hundreds of weddings, creating compelling commercial content,
                  and helping brands tell their stories through video.
                </p>
                <p>
                  Today, our team of talented photographers and videographers
                  continues to push creative boundaries while maintaining the
                  personal touch that our clients love.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary-900 text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape the experience
              we deliver to our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent-500 mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-primary-300">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mt-3 mb-4">
              Meet the Creatives
            </h2>
            <p className="text-primary-600 max-w-2xl mx-auto">
              A talented team of photographers, videographers, and editors
              passionate about their craft.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} variant="elevated">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent>
                  <h3 className="text-xl font-semibold text-primary-900">
                    {member.name}
                  </h3>
                  <p className="text-accent-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-primary-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
