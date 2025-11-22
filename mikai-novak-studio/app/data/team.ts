import type { TeamMember } from "@/app/types";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Mikai Novak",
    role: "Founder & Lead Photographer",
    bio: "With over 8 years of experience in professional photography, Mikai founded the studio with a vision to capture life's most precious moments. Specializing in wedding and portrait photography, he brings a unique artistic perspective to every project.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    specialties: ["Wedding Photography", "Portraits", "Event Coverage"],
    social: {
      instagram: "https://instagram.com/mikainovak",
      linkedin: "https://linkedin.com/in/mikainovak",
    },
  },
  {
    id: "2",
    name: "Ana Petrovic",
    role: "Video Director",
    bio: "Ana leads our video production team with her background in film school and 6 years of commercial video experience. She excels at storytelling through motion pictures and has directed numerous award-winning campaigns.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    specialties: ["Commercial Video", "Music Videos", "Brand Stories"],
    social: {
      instagram: "https://instagram.com/anapetrovic",
    },
  },
  {
    id: "3",
    name: "Stefan Jovic",
    role: "Senior Editor",
    bio: "Stefan brings technical excellence to our post-production workflow. With expertise in color grading and visual effects, he ensures every project meets our high-quality standards.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    specialties: ["Color Grading", "Video Editing", "Motion Graphics"],
    social: {
      linkedin: "https://linkedin.com/in/stefanjovic",
    },
  },
];
