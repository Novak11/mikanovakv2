"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Container } from "@/app/components/layout";
import { Badge, Button } from "@/app/components/ui";
import { featuredPortfolio } from "@/app/data/portfolio";

export function FeaturedWork() {
  return (
    <section className="py-20 lg:py-32">
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
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mt-3 mb-4">
            Featured Work
          </h2>
          <p className="text-primary-600 text-lg max-w-2xl mx-auto">
            A selection of our finest photography and video projects showcasing
            our creative vision and technical expertise.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPortfolio.slice(0, 6).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
            >
              <Link href={`/portfolio/${item.slug}`} className="block group">
                <div className="relative overflow-hidden rounded-2xl bg-primary-100">
                  <div
                    className={`relative ${
                      index === 0 ? "aspect-[4/3]" : "aspect-video"
                    }`}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Video Play Icon */}
                    {item.mediaType === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge
                        variant="accent"
                        size="sm"
                        className="mb-3 capitalize"
                      >
                        {item.category.replace("-", " ")}
                      </Badge>
                      <h3
                        className={`font-semibold text-white ${
                          index === 0 ? "text-2xl" : "text-lg"
                        }`}
                      >
                        {item.title}
                      </h3>
                      {index === 0 && (
                        <p className="text-white/80 mt-2 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <Button variant="secondary" rightIcon={<ArrowRight className="w-5 h-5" />}>
              View All Work
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
