"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import { navigation } from "@/app/lib/constants";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors duration-200 relative py-2",
              isActive
                ? "text-accent-600"
                : "text-primary-700 hover:text-primary-900"
            )}
          >
            {item.name}
            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
