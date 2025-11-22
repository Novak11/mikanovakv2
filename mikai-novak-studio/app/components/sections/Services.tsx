"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, Video, Heart, Calendar, User, Home, Music, Building } from "lucide-react";
import { Container } from "@/app/components/layout";
import { Card, CardContent } from "@/app/components/ui";

const services = [
  {
    title: "Wedding Photography",
    description: "Timeless photos that capture the magic of your special day.",
    icon: Heart,
    href: "/photography#weddings",
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "Event Coverage",
    description: "Professional coverage for corporate and private events.",
    icon: Calendar,
    href: "/photography#events",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Portrait Sessions",
    description: "Professional headshots and creative portrait photography.",
    icon: User,
    href: "/photography#portraits",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Interior & Architecture",
    description: "Stunning real estate and architectural photography.",
    icon: Home,
    href: "/photography#interiors",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Commercial Video",
    description: "Compelling brand videos that drive results.",
    icon: Video,
    href: "/video-production#commercials",
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Music Videos",
    description: "Cinematic music videos with creative storytelling.",
    icon: Music,
    href: "/video-production#music-videos",
    color: "bg-red-50 text-red-600",
  },
];

export function Services() {
  return (
    <section className="py-20 lg:py-32 bg-primary-50">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mt-3 mb-4">
            What We Offer
          </h2>
          <p className="text-primary-600 text-lg max-w-2xl mx-auto">
            From intimate portraits to grand celebrations, we provide comprehensive
            photography and video services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <Card
                  variant="default"
                  className="h-full hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-600">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700 transition-colors"
          >
            View All Pricing
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
