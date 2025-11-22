"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { navigation, siteConfig } from "@/app/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-primary-100">
                <span className="font-heading text-lg font-semibold text-primary-900">
                  Menu
                </span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-primary-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-primary-700" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-4">
                <ul className="space-y-1">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                            isActive
                              ? "bg-accent-50 text-accent-700"
                              : "text-primary-700 hover:bg-primary-50"
                          )}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-primary-100">
                <Link
                  href="/contact"
                  className="block w-full py-3 px-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-center font-semibold rounded-lg shadow-lg shadow-accent-500/25 hover:shadow-xl transition-shadow"
                >
                  Get a Quote
                </Link>
                <p className="mt-4 text-sm text-primary-500 text-center">
                  {siteConfig.phone}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
