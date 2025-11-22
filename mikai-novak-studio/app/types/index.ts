export * from "./portfolio";
export * from "./services";
export * from "./contact";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  social?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  image?: string;
  quote: string;
  rating: number;
  serviceType: "photography" | "video" | "both";
}
