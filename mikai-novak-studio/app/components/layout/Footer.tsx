import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
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
    <footer className="bg-primary-900 text-white">
      <Container>
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold text-white">
                Mikai Novak
              </span>
              <span className="block font-accent text-sm font-medium uppercase tracking-widest text-accent-400">
                Studio
              </span>
            </Link>
            <p className="mt-4 text-primary-300 text-sm leading-relaxed">
              Professional photography and video production services. Capturing
              moments that last a lifetime.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center text-primary-300 hover:bg-accent-500 hover:text-white transition-colors"
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
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-300 hover:text-accent-400 transition-colors text-sm"
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
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-primary-300 hover:text-accent-400 transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-primary-300 hover:text-accent-400 transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-300 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.postalCode}
                    <br />
                    {siteConfig.address.country}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-400 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-primary-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-primary-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
