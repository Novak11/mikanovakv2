"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";
import { navigation } from "@/app/lib/constants";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-all duration-300",
              isActive ? "text-cyan-400" : "text-primary-300 hover:text-white"
            )}
          >
            <span className="relative z-10">{item.name}</span>
            {isActive && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute inset-0 rounded-lg bg-white/5 border border-cyan-500/30"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
