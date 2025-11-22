export type ServiceInterest =
  | "photography-wedding"
  | "photography-event"
  | "photography-portrait"
  | "photography-interior"
  | "video-commercial"
  | "video-music"
  | "video-documentary"
  | "video-corporate"
  | "both"
  | "other";

export type BudgetRange =
  | "under-500"
  | "500-1000"
  | "1000-2500"
  | "2500-5000"
  | "5000-plus"
  | "flexible";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: ServiceInterest;
  eventDate?: string;
  eventLocation?: string;
  budgetRange?: BudgetRange;
  message: string;
  referralSource?: string;
  submittedAt: string;
}
