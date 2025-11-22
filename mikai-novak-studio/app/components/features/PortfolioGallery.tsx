"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioCard } from "./PortfolioCard";
import { Lightbox } from "./Lightbox";
import { cn } from "@/app/lib/utils";
import type { PortfolioItem, MediaType } from "@/app/types";

interface PortfolioGalleryProps {
  items: PortfolioItem[];
  showMediaFilter?: boolean;
  showCategoryFilter?: boolean;
  className?: string;
}

const mediaTypeLabels = {
  all: "All Work",
  photo: "Photography",
  video: "Video Production",
};

const categoryLabels: Record<string, string> = {
  all: "All Categories",
  weddings: "Weddings",
  events: "Events",
  portraits: "Portraits",
  interiors: "Interiors",
  fashion: "Fashion",
  commercials: "Commercials",
  "music-videos": "Music Videos",
  documentaries: "Documentaries",
  corporate: "Corporate",
};

export function PortfolioGallery({
  items,
  showMediaFilter = true,
  showCategoryFilter = true,
  className,
}: PortfolioGalleryProps) {
  const [activeMediaType, setActiveMediaType] = useState<MediaType | "all">("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    items.forEach((item) => {
      if (activeMediaType === "all" || item.mediaType === activeMediaType) {
        categories.add(item.category);
      }
    });
    return ["all", ...Array.from(categories)];
  }, [items, activeMediaType]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const mediaMatch = activeMediaType === "all" || item.mediaType === activeMediaType;
      const categoryMatch = activeCategory === "all" || item.category === activeCategory;
      return mediaMatch && categoryMatch;
    });
  }, [items, activeMediaType, activeCategory]);

  const openLightbox = (item: PortfolioItem) => {
    if (item.mediaType === "photo" && item.images.length > 0) {
      setLightboxImages(item.images);
      setLightboxIndex(0);
      setLightboxOpen(true);
    }
  };

  return (
    <div className={cn("space-y-8", className)}>
      {/* Filters */}
      <div className="space-y-4">
        {showMediaFilter && (
          <div className="flex flex-wrap justify-center gap-3">
            {(["all", "photo", "video"] as const).map((type) => (
              <button
                key={type}
                onClick={() => {
                  setActiveMediaType(type);
                  setActiveCategory("all");
                }}
                className={cn(
                  "px-6 py-3 rounded-full font-semibold transition-all duration-200",
                  activeMediaType === type
                    ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg"
                    : "bg-primary-100 text-primary-700 hover:bg-primary-200"
                )}
              >
                {mediaTypeLabels[type]}
              </button>
            ))}
          </div>
        )}

        {showCategoryFilter && (
          <div className="flex flex-wrap justify-center gap-2">
            {availableCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-all duration-200",
                  activeCategory === category
                    ? "bg-primary-900 text-white"
                    : "bg-white border border-primary-300 text-primary-700 hover:border-primary-500"
                )}
              >
                {categoryLabels[category] || category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Count */}
      <p className="text-center text-primary-500">
        Showing {filteredItems.length} {filteredItems.length === 1 ? "project" : "projects"}
      </p>

      {/* Gallery Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioCard item={item} onClick={() => openLightbox(item)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-primary-500">No projects found matching your filters.</p>
          <button
            onClick={() => {
              setActiveMediaType("all");
              setActiveCategory("all");
            }}
            className="mt-4 text-accent-600 font-semibold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        initialIndex={lightboxIndex}
      />
    </div>
  );
}
