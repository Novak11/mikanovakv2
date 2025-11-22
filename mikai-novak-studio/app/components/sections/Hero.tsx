"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Camera, Video } from "lucide-react";
import { Button } from "@/app/components/ui";
import { Container } from "@/app/components/layout";

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80"
          alt="Creative photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/80" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            Now booking for 2025
          </motion.div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Capturing Moments,
            <br />
            <span className="text-accent-400">Creating Memories</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Professional photography and video production in Belgrade. We tell
            your story through stunning visuals that last a lifetime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/photography">
              <Button
                size="lg"
                leftIcon={<Camera className="w-5 h-5" />}
                className="min-w-[200px]"
              >
                Photography
              </Button>
            </Link>
            <Link href="/video-production">
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<Video className="w-5 h-5" />}
                className="min-w-[200px] border-white/30 text-white hover:bg-white hover:text-primary-900"
              >
                Video Production
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
          aria-label="Scroll to content"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </Container>
    </section>
  );
}
