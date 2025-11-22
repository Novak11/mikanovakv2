"use client";

import { Play } from "lucide-react";
import { Badge } from "@/app/components/ui";
import { cn } from "@/app/lib/utils";
import type { PortfolioItem } from "@/app/types";

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick?: () => void;
  className?: string;
}

export function PortfolioCard({ item, onClick, className }: PortfolioCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-primary-100 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="relative aspect-video">
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
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Badge variant="accent" size="sm" className="mb-2 capitalize">
            {item.category.replace("-", " ")}
          </Badge>
          <h3 className="font-semibold text-white text-lg">{item.title}</h3>
          {item.client && (
            <p className="text-white/70 text-sm mt-1">{item.client}</p>
          )}
        </div>
      </div>
    </div>
  );
}
