import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Container } from "./Container";
import { siteConfig, navigation } from "@/app/lib/constants";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Wedding Photography", href: "/photography#weddings" },
      { name: "Event Photography", href: "/photography#events" },
      { name: "Portrait Photography", href: "/photography#portraits" },
      { name: "Commercial Video", href: "/video-production#commercials" },
      { name: "Music Videos", href: "/video-production#music-videos" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { name: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { name: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
  { name: "YouTube", href: siteConfig.social.youtube, icon: Youtube },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <Container className="relative">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight">
                  MIKAI NOVAK
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
                  Creative Studio
                </span>
              </div>
            </Link>
            <p className="mt-6 text-primary-400 text-sm leading-relaxed">
              Premium photography and video production. We transform your vision into
              stunning visual stories.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-primary-400 hover:text-cyan-400 transition-colors text-sm group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="pt-2">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-primary-400 hover:text-cyan-400 transition-colors text-sm group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="pt-2">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-400 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="pt-1">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.postalCode}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-500 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-primary-500 hover:text-cyan-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-primary-500 hover:text-cyan-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
