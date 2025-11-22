"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Calendar, User, Home, Video, Music, ArrowRight } from "lucide-react";
import { Container } from "@/app/components/layout";

const services = [
  {
    title: "Wedding Photography",
    description: "Timeless photos that capture the magic of your special day.",
    icon: Heart,
    href: "/photography#weddings",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Event Coverage",
    description: "Professional coverage for corporate and private events.",
    icon: Calendar,
    href: "/photography#events",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Portrait Sessions",
    description: "Professional headshots and creative portrait photography.",
    icon: User,
    href: "/photography#portraits",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    title: "Interior & Architecture",
    description: "Stunning real estate and architectural photography.",
    icon: Home,
    href: "/photography#interiors",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Commercial Video",
    description: "Compelling brand videos that drive results.",
    icon: Video,
    href: "/video-production#commercials",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Music Videos",
    description: "Cinematic music videos with creative storytelling.",
    icon: Music,
    href: "/video-production#music-videos",
    gradient: "from-red-500 to-pink-500",
  },
];

export function Services() {
  return (
    <section className="py-24 lg:py-32 bg-primary-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            What We <span className="gradient-text">Create</span>
          </h2>
          <p className="text-primary-400 text-lg max-w-2xl mx-auto">
            From intimate portraits to grand celebrations, we provide comprehensive
            photography and video services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="block group">
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 h-full">
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary-400 mb-4">{service.description}</p>

                    <div className="flex items-center text-sm font-semibold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
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
          className="text-center mt-16"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider hover:text-cyan-300 transition-colors group"
          >
            View All Pricing
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
