export interface ServiceTier {
  name: string;
  price: string;
  priceNote?: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  tiers: ServiceTier[];
  faqs: FAQ[];
}
