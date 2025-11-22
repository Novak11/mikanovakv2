import type { Service } from "@/app/types";

export const services: Service[] = [
  {
    id: "wedding-photography",
    title: "Wedding Photography",
    slug: "wedding-photography",
    shortDescription: "Timeless wedding photography that captures your love story",
    fullDescription:
      "Your wedding day is one of the most important days of your life. Our wedding photography service captures every precious moment - from the nervous anticipation to the joyful celebration. We blend candid photojournalism with elegant portraits to create a complete visual narrative of your special day.",
    icon: "Heart",
    image: "/images/services/wedding.jpg",
    tiers: [
      {
        name: "Essential",
        price: "800€",
        priceNote: "starting from",
        features: [
          "6 hours coverage",
          "1 photographer",
          "200+ edited photos",
          "Online gallery",
          "Print release",
        ],
        cta: "Book Now",
      },
      {
        name: "Premium",
        price: "1,500€",
        priceNote: "starting from",
        features: [
          "10 hours coverage",
          "2 photographers",
          "400+ edited photos",
          "Engagement session",
          "Online gallery",
          "Premium album",
          "Print release",
        ],
        highlighted: true,
        cta: "Most Popular",
      },
      {
        name: "Luxury",
        price: "2,500€",
        priceNote: "starting from",
        features: [
          "Full day coverage",
          "2 photographers",
          "600+ edited photos",
          "Engagement session",
          "Rehearsal coverage",
          "Online gallery",
          "Luxury album",
          "Canvas prints",
          "Print release",
        ],
        cta: "Book Now",
      },
    ],
    faqs: [
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking 6-12 months in advance for weekend weddings, especially during peak season (May-October).",
      },
      {
        question: "Do you travel for destination weddings?",
        answer:
          "Yes! We love destination weddings. Travel fees vary based on location. Contact us for a custom quote.",
      },
    ],
  },
  {
    id: "event-photography",
    title: "Event Photography",
    slug: "event-photography",
    shortDescription: "Professional coverage for corporate and private events",
    fullDescription:
      "From corporate conferences to private celebrations, we capture the energy and key moments of your event. Our unobtrusive approach ensures natural, candid shots while still documenting all important highlights.",
    icon: "Calendar",
    image: "/images/services/event.jpg",
    tiers: [
      {
        name: "Half Day",
        price: "400€",
        features: [
          "4 hours coverage",
          "1 photographer",
          "100+ edited photos",
          "Online gallery",
          "Quick turnaround",
        ],
        cta: "Book Now",
      },
      {
        name: "Full Day",
        price: "700€",
        features: [
          "8 hours coverage",
          "1 photographer",
          "200+ edited photos",
          "Online gallery",
          "Quick turnaround",
          "Print release",
        ],
        highlighted: true,
        cta: "Book Now",
      },
    ],
    faqs: [],
  },
  {
    id: "commercial-video",
    title: "Commercial Video",
    slug: "commercial-video",
    shortDescription: "Compelling video content that drives results",
    fullDescription:
      "Create impactful video content for your brand. From product showcases to brand stories, we produce high-quality commercial videos that engage your audience and drive conversions.",
    icon: "Video",
    image: "/images/services/commercial.jpg",
    tiers: [
      {
        name: "Starter",
        price: "1,500€",
        features: [
          "60-second video",
          "1 filming day",
          "Professional editing",
          "Color grading",
          "Licensed music",
          "2 revisions",
        ],
        cta: "Get Started",
      },
      {
        name: "Professional",
        price: "3,500€",
        features: [
          "2-3 minute video",
          "2 filming days",
          "Motion graphics",
          "Professional editing",
          "Color grading",
          "Licensed music",
          "Voice-over",
          "4 revisions",
        ],
        highlighted: true,
        cta: "Most Popular",
      },
    ],
    faqs: [],
  },
];

export const serviceCategories = {
  photography: [
    { name: "Weddings", slug: "weddings", icon: "Heart" },
    { name: "Events", slug: "events", icon: "Calendar" },
    { name: "Portraits", slug: "portraits", icon: "User" },
    { name: "Interiors", slug: "interiors", icon: "Home" },
  ],
  video: [
    { name: "Commercials", slug: "commercials", icon: "Tv" },
    { name: "Music Videos", slug: "music-videos", icon: "Music" },
    { name: "Documentaries", slug: "documentaries", icon: "Film" },
    { name: "Corporate", slug: "corporate", icon: "Building" },
  ],
};
