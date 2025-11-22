"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Zap } from "lucide-react";
import { Container } from "@/app/components/layout";
import { Button } from "@/app/components/ui";
import { siteConfig } from "@/app/lib/constants";

export function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-primary-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(6,182,212,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(139,92,246,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, rgba(236,72,153,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, rgba(6,182,212,0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>
      <div className="absolute inset-0 bg-grid opacity-30" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 text-cyan-400 text-sm font-bold uppercase tracking-wider mb-8"
          >
            <Zap className="w-4 h-4" />
            Let&apos;s Create Magic
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to Start Your
            <br />
            <span className="gradient-text">Next Project?</span>
          </h2>

          <p className="text-lg text-primary-400 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss your vision and bring it to life. Whether it&apos;s a wedding,
            corporate event, or creative video project, we&apos;re here to create something amazing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/contact">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Get a Free Quote
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<Phone className="w-5 h-5" />}
              >
                {siteConfig.phone}
              </Button>
            </a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-sm text-primary-500"
          >
            Usually responds within 24 hours
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
