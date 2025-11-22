export type MediaType = "photo" | "video";
export type PhotoCategory =
  | "weddings"
  | "events"
  | "portraits"
  | "interiors"
  | "fashion";
export type VideoCategory =
  | "commercials"
  | "music-videos"
  | "documentaries"
  | "corporate"
  | "events";

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  mediaType: MediaType;
  category: PhotoCategory | VideoCategory;

  // Images
  thumbnail: string;
  images: string[];
  beforeAfter?: {
    before: string;
    after: string;
  };

  // Video specific
  videoUrl?: string;
  videoPoster?: string;
  duration?: string;

  // Metadata
  client?: string;
  location?: string;
  date: string;
  featured: boolean;
  tags: string[];

  // SEO
  seoTitle?: string;
  seoDescription?: string;
}
