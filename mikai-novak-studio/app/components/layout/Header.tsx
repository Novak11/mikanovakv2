"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Container } from "./Container";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span
                className={cn(
                  "font-heading text-2xl font-bold transition-colors",
                  isScrolled ? "text-primary-900" : "text-white"
                )}
              >
                Mikai Novak
              </span>
              <span
                className={cn(
                  "hidden sm:inline font-accent text-sm font-medium uppercase tracking-widest transition-colors",
                  isScrolled ? "text-accent-600" : "text-accent-400"
                )}
              >
                Studio
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div
              className={cn(
                "transition-colors",
                isScrolled ? "[&_a]:text-primary-700" : "[&_a]:text-white/90"
              )}
            >
              <Navigation />
            </div>

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className={cn(
                "hidden lg:inline-flex px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200",
                isScrolled
                  ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25 hover:shadow-xl"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
              )}
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-primary-900 hover:bg-primary-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
