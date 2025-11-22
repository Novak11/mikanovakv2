"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/app/components/layout";
import { Button } from "@/app/components/ui";
import { siteConfig } from "@/app/lib/constants";

export function CTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50" />
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary-200"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Ready to Create Something
            <span className="text-accent-600"> Amazing?</span>
          </h2>
          <p className="text-lg text-primary-600 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your project and bring your vision to life. Whether
            it&apos;s a wedding, corporate event, or creative video project, we&apos;re
            here to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Get a Free Quote
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Phone className="w-5 h-5" />}
              >
                {siteConfig.phone}
              </Button>
            </a>
          </div>

          <p className="mt-8 text-sm text-primary-500">
            Usually responds within 24 hours
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
