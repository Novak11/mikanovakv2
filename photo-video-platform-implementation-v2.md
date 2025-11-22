# Mikai Novak Creative Studio - Implementation Guide v2.0

**Version:** 2.0
**Created:** 2025-11-22
**Purpose:** Build a production-ready photography and video production platform with AWS deployment
**Target:** Portfolio-worthy project demonstrating DevOps/SRE skills

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technical Architecture](#2-technical-architecture)
3. [Design System](#3-design-system)
4. [Data Model & API Design](#4-data-model--api-design)
5. [Component Specifications](#5-component-specifications)
6. [Session Breakdown](#6-session-breakdown)
7. [Detailed Implementation Tasks](#7-detailed-implementation-tasks)
8. [Testing Strategy](#8-testing-strategy)
9. [AWS Deployment Guide](#9-aws-deployment-guide)
10. [SEO & Marketing](#10-seo--marketing)
11. [Troubleshooting Guide](#11-troubleshooting-guide)
12. [Quality Assurance Checklist](#12-quality-assurance-checklist)
13. [Session Prompt Line Counts](#13-session-prompt-line-counts)

---

## 1. Project Overview

### Purpose
A premium creative studio platform combining professional photography and video production services. The platform showcases portfolio work, enables client inquiries, and demonstrates modern web development with AWS infrastructure.

### Target Users
- **Primary:** Individuals seeking wedding/event photography (25-45, Belgrade area)
- **Secondary:** Businesses needing commercial video production
- **Tertiary:** Agencies looking for creative partners

### Core Features (MVP)
1. **Homepage** - Hero section, services overview, featured work, testimonials
2. **Photography Services** - Wedding, events, portraits, interiors with galleries
3. **Video Production** - Commercials, music videos, documentaries with showreel
4. **Portfolio Gallery** - Filterable by category, before/after slider, lightbox
5. **Contact System** - Multi-step booking form, calendar integration
6. **About/Team** - Professional profiles, awards, experience

### Tech Stack
```
Frontend:
├── Framework: Next.js 15 (App Router)
├── Language: TypeScript (strict mode)
├── Styling: Tailwind CSS 3.4+
├── Animations: Framer Motion 11+
├── Forms: React Hook Form + Zod
├── State: Zustand (minimal global state)
└── Icons: Lucide React

Backend:
├── API: Next.js Route Handlers
├── Database: PostgreSQL (AWS RDS - optional, can start static)
├── Email: AWS SES
├── Storage: AWS S3 (images/videos)
└── CDN: AWS CloudFront

Infrastructure:
├── Hosting: AWS S3 + CloudFront (static export)
├── CI/CD: GitHub Actions
├── DNS: AWS Route 53
├── SSL: AWS ACM (free)
├── Monitoring: AWS CloudWatch
└── Cost: $0-5/month (Free Tier)
```

### Success Metrics
- [ ] Lighthouse Performance: 95+
- [ ] Lighthouse Accessibility: 95+
- [ ] Lighthouse SEO: 100
- [ ] Core Web Vitals: All green
- [ ] Mobile responsive: 320px to 2560px
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge
- [ ] Live on AWS with custom domain
- [ ] CI/CD pipeline functional

### Timeline
**Total:** 8 sessions / 35-40 hours
**Deadline:** Flexible (portfolio project)

### Prerequisites
- Node.js 20+ installed
- AWS account (Free Tier)
- GitHub account
- Domain name (optional, can use CloudFront URL)
- VS Code or preferred IDE

---

## 2. Technical Architecture

### System Diagram
```
┌─────────────────────────────────────────────────────────────────────┐
│                           USER REQUEST                               │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         AWS CLOUDFRONT                               │
│                    (CDN + SSL Termination)                          │
│                     - Caching static assets                          │
│                     - HTTPS enforcement                              │
│                     - Geographic distribution                        │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
┌──────────────────────────────┐    ┌──────────────────────────────┐
│        AWS S3 BUCKET         │    │        AWS S3 BUCKET         │
│      (Static Website)        │    │      (Media Assets)          │
│  - HTML, CSS, JS             │    │  - Images (WebP/AVIF)        │
│  - Next.js static export     │    │  - Videos (MP4, WebM)        │
│  - Font files                │    │  - Portfolio items           │
└──────────────────────────────┘    └──────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                        EXTERNAL SERVICES                             │
├─────────────────────────────────────────────────────────────────────┤
│  AWS SES          │  Contact form emails, booking confirmations     │
│  Google Analytics │  User tracking, conversion events               │
│  Google Maps      │  Location embed on contact page                 │
│  Vimeo/YouTube    │  Video hosting (reduces S3 bandwidth costs)     │
└─────────────────────────────────────────────────────────────────────┘
```

### Folder Structure
```
mikai-novak-studio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD pipeline
├── public/
│   ├── images/
│   │   ├── hero/                   # Hero section images
│   │   ├── portfolio/
│   │   │   ├── photography/
│   │   │   │   ├── weddings/
│   │   │   │   ├── events/
│   │   │   │   ├── portraits/
│   │   │   │   └── interiors/
│   │   │   └── video/
│   │   │       ├── commercials/
│   │   │       ├── music-videos/
│   │   │       └── documentaries/
│   │   ├── before-after/           # Before/after comparison images
│   │   ├── team/                   # Team member photos
│   │   └── clients/                # Client logos
│   ├── videos/
│   │   └── showreel-poster.jpg     # Video poster (actual videos on Vimeo)
│   ├── fonts/                      # Self-hosted fonts
│   ├── favicon.ico
│   ├── og-image.jpg                # Open Graph image
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Homepage
│   │   ├── not-found.tsx           # 404 page
│   │   ├── error.tsx               # Error boundary
│   │   ├── loading.tsx             # Loading state
│   │   ├── globals.css             # Global styles
│   │   ├── photography/
│   │   │   └── page.tsx            # Photography services
│   │   ├── video-production/
│   │   │   └── page.tsx            # Video production services
│   │   ├── portfolio/
│   │   │   ├── page.tsx            # Portfolio gallery
│   │   │   └── [category]/
│   │   │       └── page.tsx        # Category-specific portfolio
│   │   ├── about/
│   │   │   └── page.tsx            # About/team page
│   │   ├── pricing/
│   │   │   └── page.tsx            # Pricing page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts        # Contact form API (for SES)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Site header with navigation
│   │   │   ├── Footer.tsx          # Site footer
│   │   │   ├── Navigation.tsx      # Desktop navigation
│   │   │   ├── MobileMenu.tsx      # Mobile hamburger menu
│   │   │   └── Container.tsx       # Max-width container
│   │   ├── ui/
│   │   │   ├── Button.tsx          # Button component
│   │   │   ├── Card.tsx            # Card component
│   │   │   ├── Badge.tsx           # Badge/tag component
│   │   │   ├── Input.tsx           # Form input
│   │   │   ├── Textarea.tsx        # Form textarea
│   │   │   ├── Select.tsx          # Form select
│   │   │   ├── Modal.tsx           # Modal/dialog
│   │   │   ├── Toast.tsx           # Toast notifications
│   │   │   └── Skeleton.tsx        # Loading skeleton
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Homepage hero
│   │   │   ├── Services.tsx        # Services overview
│   │   │   ├── FeaturedWork.tsx    # Featured portfolio
│   │   │   ├── Testimonials.tsx    # Client testimonials
│   │   │   ├── ClientLogos.tsx     # Client logo bar
│   │   │   ├── Process.tsx         # Work process steps
│   │   │   ├── CTA.tsx             # Call-to-action sections
│   │   │   └── Stats.tsx           # Statistics/numbers
│   │   └── features/
│   │       ├── BeforeAfterSlider.tsx   # Image comparison slider
│   │       ├── PortfolioGallery.tsx    # Filterable gallery
│   │       ├── PortfolioCard.tsx       # Individual portfolio item
│   │       ├── Lightbox.tsx            # Image lightbox
│   │       ├── VideoPlayer.tsx         # Video embed player
│   │       ├── ContactForm.tsx         # Multi-step contact form
│   │       ├── BookingCalendar.tsx     # Date picker for bookings
│   │       └── PricingCard.tsx         # Pricing tier card
│   ├── lib/
│   │   ├── utils.ts                # Utility functions (cn, etc.)
│   │   ├── constants.ts            # Site-wide constants
│   │   ├── analytics.ts            # Analytics helpers
│   │   ├── validations.ts          # Zod schemas
│   │   └── api.ts                  # API helpers
│   ├── hooks/
│   │   ├── useMediaQuery.ts        # Responsive breakpoint hook
│   │   ├── useScrollLock.ts        # Body scroll lock
│   │   ├── useIntersection.ts      # Intersection observer
│   │   └── useLocalStorage.ts      # localStorage hook
│   ├── types/
│   │   ├── index.ts                # Shared types
│   │   ├── portfolio.ts            # Portfolio item types
│   │   └── contact.ts              # Contact form types
│   ├── data/
│   │   ├── portfolio.ts            # Portfolio items data
│   │   ├── services.ts             # Services data
│   │   ├── testimonials.ts         # Testimonials data
│   │   ├── team.ts                 # Team members data
│   │   └── pricing.ts              # Pricing tiers data
│   └── styles/
│       └── fonts.ts                # Font configuration
├── .env.local                      # Local environment variables
├── .env.example                    # Example env file
├── .eslintrc.json                  # ESLint configuration
├── .prettierrc                     # Prettier configuration
├── .gitignore
├── next.config.js                  # Next.js configuration
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json
└── README.md                       # Project documentation
```

---

## 3. Design System

### Color Palette

```typescript
// tailwind.config.ts - colors section
const colors = {
  // Primary - Elegant Dark
  primary: {
    50: '#f6f6f6',
    100: '#e7e7e7',
    200: '#d1d1d1',
    300: '#b0b0b0',
    400: '#888888',
    500: '#6d6d6d',
    600: '#5d5d5d',
    700: '#4f4f4f',
    800: '#454545',
    900: '#1a1a1a',    // Main brand color
    950: '#0d0d0d',
  },

  // Accent - Premium Gold
  accent: {
    50: '#fefcf3',
    100: '#fef7e0',
    200: '#fcedb8',
    300: '#f9de85',
    400: '#f5c84a',
    500: '#c9a961',    // Main accent
    600: '#b8922d',
    700: '#9a7425',
    800: '#7d5d24',
    900: '#674d21',
    950: '#3b2910',
  },

  // Semantic Colors
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
}
```

### Typography

```typescript
// tailwind.config.ts - fontFamily section
const fontFamily = {
  heading: ['Playfair Display', 'Georgia', 'serif'],
  body: ['Inter', 'system-ui', 'sans-serif'],
  accent: ['Montserrat', 'Arial', 'sans-serif'],
}

// Font Sizes (using Tailwind defaults with custom additions)
const fontSize = {
  // Display sizes for hero sections
  'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],  // 72px
  'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],  // 60px
  'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],     // 48px
  'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],  // 36px
  'display-sm': ['1.875rem', { lineHeight: '1.3' }],                            // 30px
}
```

### Spacing System

```typescript
// Using Tailwind's default 4px base unit
// Custom additions in tailwind.config.ts
const spacing = {
  '18': '4.5rem',   // 72px
  '22': '5.5rem',   // 88px
  '30': '7.5rem',   // 120px
  '34': '8.5rem',   // 136px
}

// Section spacing standards
// - Section padding: py-16 (mobile) / py-24 (tablet) / py-32 (desktop)
// - Component gaps: gap-6 (tight) / gap-8 (normal) / gap-12 (loose)
// - Card padding: p-6 (mobile) / p-8 (desktop)
```

### Animation Guidelines

```typescript
// Framer Motion animation presets
// src/lib/animations.ts

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.2 }
}

// CSS transition defaults (for Tailwind)
// transition-all duration-300 ease-out
// hover transitions: duration-200
// page transitions: duration-500
```

### Component Patterns

```css
/* Button Variants */
.btn-primary {
  @apply bg-gradient-to-r from-accent-500 to-accent-600 text-white
         px-6 py-3 rounded-lg font-semibold
         shadow-lg shadow-accent-500/25
         hover:shadow-xl hover:shadow-accent-500/30
         hover:-translate-y-0.5
         active:translate-y-0
         transition-all duration-200;
}

.btn-secondary {
  @apply bg-transparent border-2 border-primary-900 text-primary-900
         px-6 py-3 rounded-lg font-semibold
         hover:bg-primary-900 hover:text-white
         transition-all duration-200;
}

.btn-ghost {
  @apply bg-transparent text-primary-700
         px-4 py-2 rounded-lg font-medium
         hover:bg-primary-100
         transition-colors duration-200;
}

/* Card Styles */
.card {
  @apply bg-white rounded-2xl overflow-hidden
         shadow-sm hover:shadow-xl
         transition-shadow duration-300;
}

.card-elevated {
  @apply bg-white rounded-2xl overflow-hidden
         shadow-lg hover:shadow-2xl
         hover:-translate-y-1
         transition-all duration-300;
}

/* Input Styles */
.input {
  @apply w-full px-4 py-3 rounded-lg
         border border-primary-200
         focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20
         outline-none transition-all duration-200
         placeholder:text-primary-400;
}

.input-error {
  @apply border-error focus:border-error focus:ring-error/20;
}
```

---

## 4. Data Model & API Design

### Portfolio Item Type

```typescript
// src/types/portfolio.ts

export type MediaType = 'photo' | 'video';
export type PhotoCategory = 'weddings' | 'events' | 'portraits' | 'interiors' | 'fashion';
export type VideoCategory = 'commercials' | 'music-videos' | 'documentaries' | 'corporate' | 'events';

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  mediaType: MediaType;
  category: PhotoCategory | VideoCategory;

  // Images
  thumbnail: string;           // 600x400 WebP
  images: string[];            // Full resolution
  beforeAfter?: {              // Optional comparison
    before: string;
    after: string;
  };

  // Video specific
  videoUrl?: string;           // Vimeo/YouTube embed URL
  videoPoster?: string;        // Video thumbnail
  duration?: string;           // "3:45" format

  // Metadata
  client?: string;
  location?: string;
  date: string;                // ISO date string
  featured: boolean;
  tags: string[];

  // SEO
  seoTitle?: string;
  seoDescription?: string;
}
```

### Service Type

```typescript
// src/types/services.ts

export interface ServiceTier {
  name: string;
  price: string;              // "80€+" format
  priceNote?: string;         // "starting from"
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;               // Lucide icon name
  image: string;
  tiers: ServiceTier[];
  faqs: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}
```

### Contact Form Type

```typescript
// src/types/contact.ts

export type ServiceInterest =
  | 'photography-wedding'
  | 'photography-event'
  | 'photography-portrait'
  | 'photography-interior'
  | 'video-commercial'
  | 'video-music'
  | 'video-documentary'
  | 'video-corporate'
  | 'both'
  | 'other';

export type BudgetRange =
  | 'under-500'
  | '500-1000'
  | '1000-2500'
  | '2500-5000'
  | '5000-plus'
  | 'flexible';

export interface ContactFormData {
  // Step 1: Basic Info
  name: string;
  email: string;
  phone: string;

  // Step 2: Project Details
  serviceInterest: ServiceInterest;
  eventDate?: string;
  eventLocation?: string;

  // Step 3: Budget & Message
  budgetRange?: BudgetRange;
  message: string;
  referralSource?: string;

  // Meta
  submittedAt: string;
}
```

### API Endpoints

```typescript
// POST /api/contact
// Purpose: Handle contact form submissions, send to AWS SES
// Request Body: ContactFormData
// Response: { success: boolean; message: string; }

// Implementation in: src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactFormSchema.parse(body);

    // Send email via SES
    const ses = new SESClient({ region: 'eu-central-1' });

    await ses.send(new SendEmailCommand({
      Source: 'noreply@yourdomain.com',
      Destination: {
        ToAddresses: ['contact@yourdomain.com'],
      },
      Message: {
        Subject: { Data: `New Inquiry: ${validatedData.serviceInterest}` },
        Body: {
          Html: { Data: formatEmailHtml(validatedData) },
          Text: { Data: formatEmailText(validatedData) },
        },
      },
    }));

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
```

---

## 5. Component Specifications

### 5.1 Button Component

```typescript
// src/components/ui/Button.tsx

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 active:translate-y-0 focus:ring-accent-500',
        secondary: 'bg-transparent border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white focus:ring-primary-900',
        ghost: 'bg-transparent text-primary-700 hover:bg-primary-100 focus:ring-primary-500',
        outline: 'bg-transparent border border-primary-300 text-primary-700 hover:border-primary-500 focus:ring-primary-500',
        link: 'bg-transparent text-accent-600 underline-offset-4 hover:underline focus:ring-accent-500 p-0',
      },
      size: {
        sm: 'text-sm px-4 py-2 rounded-md',
        md: 'text-base px-6 py-3 rounded-lg',
        lg: 'text-lg px-8 py-4 rounded-lg',
        icon: 'p-2 rounded-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, isLoading, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
```

**Usage:**
```tsx
<Button variant="primary" size="lg">Get a Quote</Button>
<Button variant="secondary" leftIcon={<Phone className="w-5 h-5" />}>Call Us</Button>
<Button variant="ghost" isLoading>Submitting...</Button>
```

### 5.2 Before/After Slider Component

```typescript
// src/components/features/BeforeAfterSlider.tsx

'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  category?: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait';
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  category,
  className,
  aspectRatio = 'video',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const aspectRatioClass = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
  };

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.max(5, Math.min(95, percent)));
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden rounded-2xl cursor-ew-resize select-none',
        aspectRatioClass[aspectRatio],
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      role="slider"
      aria-valuenow={sliderPosition}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and after comparison slider"
    >
      {/* After Image (Background) */}
      <Image
        src={afterImage}
        alt={afterLabel}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />

      {/* Before Image (Overlay with clip) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Slider Handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
        initial={false}
        animate={{ x: '-50%' }}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-accent-500">
          <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4M8 15l4 4 4-4" />
          </svg>
        </div>
      </motion.div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
        {afterLabel}
      </div>

      {/* Category Badge */}
      {category && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
          {category}
        </div>
      )}
    </div>
  );
}
```

**Usage:**
```tsx
<BeforeAfterSlider
  beforeImage="/images/before-after/wedding-before.jpg"
  afterImage="/images/before-after/wedding-after.jpg"
  category="Wedding Photography"
  aspectRatio="video"
/>
```

### 5.3 Portfolio Gallery Component

```typescript
// src/components/features/PortfolioGallery.tsx

'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioCard } from './PortfolioCard';
import { Lightbox } from './Lightbox';
import { cn } from '@/lib/utils';
import type { PortfolioItem, MediaType } from '@/types/portfolio';

interface PortfolioGalleryProps {
  items: PortfolioItem[];
  showMediaFilter?: boolean;
  showCategoryFilter?: boolean;
  initialMediaType?: MediaType | 'all';
  initialCategory?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

const mediaTypeLabels = {
  all: 'All Work',
  photo: 'Photography',
  video: 'Video Production',
};

const categoryLabels: Record<string, string> = {
  all: 'All Categories',
  weddings: 'Weddings',
  events: 'Events',
  portraits: 'Portraits',
  interiors: 'Interiors',
  fashion: 'Fashion',
  commercials: 'Commercials',
  'music-videos': 'Music Videos',
  documentaries: 'Documentaries',
  corporate: 'Corporate',
};

export function PortfolioGallery({
  items,
  showMediaFilter = true,
  showCategoryFilter = true,
  initialMediaType = 'all',
  initialCategory = 'all',
  columns = 3,
  className,
}: PortfolioGalleryProps) {
  const [activeMediaType, setActiveMediaType] = useState<MediaType | 'all'>(initialMediaType);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Get unique categories from items
  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    items.forEach(item => {
      if (activeMediaType === 'all' || item.mediaType === activeMediaType) {
        categories.add(item.category);
      }
    });
    return ['all', ...Array.from(categories)];
  }, [items, activeMediaType]);

  // Filter items
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const mediaMatch = activeMediaType === 'all' || item.mediaType === activeMediaType;
      const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
      return mediaMatch && categoryMatch;
    });
  }, [items, activeMediaType, activeCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={cn('space-y-8', className)}>
      {/* Filters */}
      <div className="space-y-4">
        {/* Media Type Filter */}
        {showMediaFilter && (
          <div className="flex flex-wrap justify-center gap-3">
            {(['all', 'photo', 'video'] as const).map(type => (
              <button
                key={type}
                onClick={() => {
                  setActiveMediaType(type);
                  setActiveCategory('all'); // Reset category when media type changes
                }}
                className={cn(
                  'px-6 py-3 rounded-full font-semibold transition-all duration-200',
                  activeMediaType === type
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                )}
              >
                {mediaTypeLabels[type]}
              </button>
            ))}
          </div>
        )}

        {/* Category Filter */}
        {showCategoryFilter && (
          <div className="flex flex-wrap justify-center gap-2">
            {availableCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                  activeCategory === category
                    ? 'bg-primary-900 text-white'
                    : 'bg-white border border-primary-300 text-primary-700 hover:border-primary-500'
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
        Showing {filteredItems.length} {filteredItems.length === 1 ? 'project' : 'projects'}
      </p>

      {/* Gallery Grid */}
      <motion.div
        className={cn('grid gap-6', columnClasses[columns])}
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioCard
                item={item}
                onClick={() => openLightbox(index)}
              />
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
              setActiveMediaType('all');
              setActiveCategory('all');
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
        images={filteredItems.filter(i => i.mediaType === 'photo').flatMap(i => i.images)}
        initialIndex={lightboxIndex}
      />
    </div>
  );
}
```

### 5.4 Contact Form Component

```typescript
// src/components/features/ContactForm.tsx

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { Check, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, title: 'Contact Info', description: 'How can we reach you?' },
  { id: 2, title: 'Project Details', description: 'Tell us about your project' },
  { id: 3, title: 'Message', description: 'Any additional details?' },
];

const serviceOptions = [
  { value: 'photography-wedding', label: 'Wedding Photography' },
  { value: 'photography-event', label: 'Event Photography' },
  { value: 'photography-portrait', label: 'Portrait Photography' },
  { value: 'photography-interior', label: 'Interior Photography' },
  { value: 'video-commercial', label: 'Commercial Video' },
  { value: 'video-music', label: 'Music Video' },
  { value: 'video-documentary', label: 'Documentary' },
  { value: 'video-corporate', label: 'Corporate Video' },
  { value: 'both', label: 'Both Photo & Video' },
  { value: 'other', label: 'Other / Not Sure' },
];

const budgetOptions = [
  { value: 'under-500', label: 'Under 500€' },
  { value: '500-1000', label: '500€ - 1,000€' },
  { value: '1000-2500', label: '1,000€ - 2,500€' },
  { value: '2500-5000', label: '2,500€ - 5,000€' },
  { value: '5000-plus', label: '5,000€+' },
  { value: 'flexible', label: 'Flexible / Not Sure' },
];

export function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  const validateStep = async (step: number) => {
    const fieldsToValidate: (keyof ContactFormData)[][] = [
      ['name', 'email', 'phone'],
      ['serviceInterest'],
      ['message'],
    ];

    const result = await trigger(fieldsToValidate[step - 1]);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary-900 mb-2">Message Sent!</h3>
        <p className="text-primary-600 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button variant="secondary" onClick={() => window.location.reload()}>
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors',
                  currentStep >= step.id
                    ? 'bg-accent-500 text-white'
                    : 'bg-primary-200 text-primary-500'
                )}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.id
                )}
              </div>
              <span className="mt-2 text-sm font-medium text-primary-600 hidden sm:block">
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'w-16 sm:w-24 h-1 mx-2 rounded transition-colors',
                  currentStep > step.id ? 'bg-accent-500' : 'bg-primary-200'
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1: Contact Info */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-1">
                  {steps[0].title}
                </h3>
                <p className="text-primary-500">{steps[0].description}</p>
              </div>

              <Input
                label="Full Name"
                placeholder="John Smith"
                error={errors.name?.message}
                {...register('name')}
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                error={errors.email?.message}
                {...register('email')}
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="+381 69 123 4567"
                error={errors.phone?.message}
                {...register('phone')}
              />
            </motion.div>
          )}

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-1">
                  {steps[1].title}
                </h3>
                <p className="text-primary-500">{steps[1].description}</p>
              </div>

              <Select
                label="Service Interest"
                options={serviceOptions}
                error={errors.serviceInterest?.message}
                {...register('serviceInterest')}
              />

              <Input
                label="Event Date (Optional)"
                type="date"
                error={errors.eventDate?.message}
                {...register('eventDate')}
              />

              <Input
                label="Event Location (Optional)"
                placeholder="Belgrade, Serbia"
                error={errors.eventLocation?.message}
                {...register('eventLocation')}
              />
            </motion.div>
          )}

          {/* Step 3: Message */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-1">
                  {steps[2].title}
                </h3>
                <p className="text-primary-500">{steps[2].description}</p>
              </div>

              <Select
                label="Budget Range (Optional)"
                options={budgetOptions}
                error={errors.budgetRange?.message}
                {...register('budgetRange')}
              />

              <Textarea
                label="Your Message"
                placeholder="Tell us about your project, vision, and any specific requirements..."
                rows={5}
                error={errors.message?.message}
                {...register('message')}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            type="button"
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 1}
            leftIcon={<ChevronLeft className="w-5 h-5" />}
          >
            Back
          </Button>

          {currentStep < steps.length ? (
            <Button
              type="button"
              onClick={nextStep}
              rightIcon={<ChevronRight className="w-5 h-5" />}
            >
              Continue
            </Button>
          ) : (
            <Button type="submit" isLoading={isSubmitting}>
              Send Message
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
```

---

## 6. Session Breakdown

### Overview

| Session | Phase | Duration | Token Est. | Focus |
|---------|-------|----------|------------|-------|
| 1 | Foundation | 4 hours | ~12K | Project setup, config, layout |
| 2 | UI Components | 4 hours | ~15K | Button, Card, Input, Modal |
| 3 | Homepage | 5 hours | ~18K | Hero, Services, Featured Work |
| 4 | Portfolio | 5 hours | ~20K | Gallery, Filters, Lightbox, Before/After |
| 5 | Service Pages | 4 hours | ~15K | Photography, Video, Pricing |
| 6 | Contact & About | 4 hours | ~15K | Multi-step form, Team, Map |
| 7 | Polish & SEO | 3 hours | ~10K | Animations, meta tags, performance |
| 8 | AWS Deployment | 4 hours | ~12K | S3, CloudFront, CI/CD |

**Total:** 33-37 hours across 8 sessions

---

## 7. Detailed Implementation Tasks

### Session 1: Foundation Setup (4 hours)

**Goal:** Project scaffolding, configuration, basic layout structure

**Tasks:**

1. **Initialize Next.js Project**
   ```bash
   npx create-next-app@latest mikai-novak-studio --typescript --tailwind --app --eslint
   cd mikai-novak-studio
   ```

2. **Install Dependencies**
   ```bash
   npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge
   npm install react-hook-form @hookform/resolvers zod
   npm install -D @types/node
   ```

3. **Configure Tailwind** (`tailwind.config.ts`)
   - Add custom colors (primary, accent)
   - Add custom fonts (Playfair Display, Inter, Montserrat)
   - Add custom spacing and font sizes
   - Configure content paths

4. **Set Up Folder Structure**
   - Create all directories as per architecture
   - Create placeholder files for organization

5. **Create Layout Components**
   - `Header.tsx` - Logo, navigation, mobile menu trigger, CTA button
   - `Footer.tsx` - Links, contact info, social icons, copyright
   - `Navigation.tsx` - Desktop nav links with hover effects
   - `MobileMenu.tsx` - Slide-in drawer with close button
   - `Container.tsx` - Max-width wrapper with responsive padding

6. **Configure Root Layout** (`app/layout.tsx`)
   - Import fonts from Google Fonts
   - Add metadata (title, description)
   - Wrap with Header and Footer

7. **Create Utility Functions** (`lib/utils.ts`)
   - `cn()` function for class merging

8. **Test Development Server**
   - Run `npm run dev`
   - Verify header/footer display
   - Test mobile menu toggle
   - Check for console errors

**Deliverables:**
- [ ] Dev server runs at localhost:3000
- [ ] Header with logo and navigation visible
- [ ] Footer with contact info visible
- [ ] Mobile menu opens/closes correctly
- [ ] No console errors
- [ ] Git commit: "feat: project foundation with layout components"

---

### Session 2: UI Components (4 hours)

**Goal:** Build reusable UI component library

**Tasks:**

1. **Button Component** (`components/ui/Button.tsx`)
   - Variants: primary, secondary, ghost, outline, link
   - Sizes: sm, md, lg, icon
   - States: loading, disabled
   - Props: leftIcon, rightIcon, fullWidth

2. **Input Component** (`components/ui/Input.tsx`)
   - Label support
   - Error message display
   - Helper text
   - Left/right icons
   - forwardRef for form libraries

3. **Textarea Component** (`components/ui/Textarea.tsx`)
   - Same features as Input
   - Auto-resize option
   - Character count

4. **Select Component** (`components/ui/Select.tsx`)
   - Custom styled dropdown
   - Options with value/label
   - Placeholder support
   - Error states

5. **Card Component** (`components/ui/Card.tsx`)
   - Variants: default, elevated, outline
   - CardHeader, CardContent, CardFooter sub-components
   - Image support with aspect ratio

6. **Badge Component** (`components/ui/Badge.tsx`)
   - Variants: default, success, warning, error
   - Sizes: sm, md

7. **Modal Component** (`components/ui/Modal.tsx`)
   - Animated with Framer Motion
   - Close on overlay click
   - Close on Escape key
   - Focus trap
   - Body scroll lock

8. **Skeleton Component** (`components/ui/Skeleton.tsx`)
   - Rectangle, circle, text variants
   - Animated pulse effect

9. **Toast Component** (`components/ui/Toast.tsx`)
   - Success, error, warning, info variants
   - Auto-dismiss with configurable duration
   - Manual dismiss button

**Deliverables:**
- [ ] All components created with TypeScript types
- [ ] Components work in isolation
- [ ] Consistent styling with design system
- [ ] Accessible (ARIA labels, keyboard nav)
- [ ] Git commit: "feat: add UI component library"

---

### Session 3: Homepage (5 hours)

**Goal:** Build complete homepage with all sections

**Tasks:**

1. **Hero Section** (`components/sections/Hero.tsx`)
   - Full-viewport height
   - Background image/video with overlay
   - Animated headline and subheadline
   - Dual CTA buttons (Photography / Video)
   - Scroll indicator

2. **Services Section** (`components/sections/Services.tsx`)
   - Section heading with description
   - 2x2 or 3-column grid of service cards
   - Each card: icon, title, description, link
   - Hover animations

3. **Featured Work Section** (`components/sections/FeaturedWork.tsx`)
   - Section heading
   - 3-6 featured portfolio items
   - Mix of photo and video
   - "View All Work" CTA

4. **Testimonials Section** (`components/sections/Testimonials.tsx`)
   - Carousel/slider of testimonials
   - Client photo, name, role
   - Quote with decorative marks
   - Star rating display
   - Navigation dots/arrows

5. **Client Logos Section** (`components/sections/ClientLogos.tsx`)
   - Horizontal scrolling logo bar
   - Grayscale with hover color
   - "Trusted by" heading

6. **Stats Section** (`components/sections/Stats.tsx`)
   - 4 key metrics in row
   - Animated count-up on scroll
   - Icon + number + label

7. **CTA Section** (`components/sections/CTA.tsx`)
   - Full-width with accent background
   - Compelling headline
   - Primary CTA button
   - Secondary contact info

8. **Assemble Homepage** (`app/page.tsx`)
   - Import all sections
   - Add proper spacing between sections
   - Ensure smooth scroll behavior

**Deliverables:**
- [ ] All homepage sections implemented
- [ ] Responsive on all breakpoints
- [ ] Animations work smoothly
- [ ] Images optimized with next/image
- [ ] Git commit: "feat: implement homepage sections"

---

### Session 4: Portfolio System (5 hours)

**Goal:** Complete portfolio gallery with filtering and lightbox

**Tasks:**

1. **Portfolio Data** (`data/portfolio.ts`)
   - Create 12-15 sample portfolio items
   - Mix of photography and video
   - Include all categories
   - Add realistic metadata

2. **Portfolio Card** (`components/features/PortfolioCard.tsx`)
   - Image thumbnail with hover overlay
   - Title and category badge
   - Play icon for videos
   - Click handler for lightbox

3. **Portfolio Gallery** (`components/features/PortfolioGallery.tsx`)
   - Media type filter (All/Photo/Video)
   - Category filter (dynamic based on selection)
   - Animated filter transitions
   - Masonry or grid layout
   - Results count

4. **Lightbox Component** (`components/features/Lightbox.tsx`)
   - Full-screen overlay
   - Image display with zoom
   - Previous/Next navigation
   - Keyboard navigation (arrows, escape)
   - Touch swipe support
   - Image counter
   - Close button

5. **Before/After Slider** (`components/features/BeforeAfterSlider.tsx`)
   - Draggable divider
   - Touch support
   - Labels and category badge
   - Smooth animations

6. **Video Player** (`components/features/VideoPlayer.tsx`)
   - Vimeo/YouTube embed
   - Custom play button overlay
   - Responsive aspect ratio
   - Poster image

7. **Portfolio Page** (`app/portfolio/page.tsx`)
   - Page header with description
   - PortfolioGallery component
   - SEO metadata

8. **Category Pages** (`app/portfolio/[category]/page.tsx`)
   - Dynamic route for each category
   - Pre-filtered gallery
   - Breadcrumb navigation

**Deliverables:**
- [ ] Portfolio gallery filters work correctly
- [ ] Lightbox opens and navigates smoothly
- [ ] Before/after slider is draggable
- [ ] Video embeds play correctly
- [ ] All animations performant
- [ ] Git commit: "feat: implement portfolio gallery system"

---

### Session 5: Service Pages (4 hours)

**Goal:** Photography and Video service pages with pricing

**Tasks:**

1. **Service Data** (`data/services.ts`)
   - Photography services with tiers
   - Video production services with tiers
   - FAQs for each service

2. **Pricing Card** (`components/features/PricingCard.tsx`)
   - Tier name and price
   - Feature list with checkmarks
   - Highlighted/recommended badge
   - CTA button

3. **FAQ Accordion** (`components/features/FAQAccordion.tsx`)
   - Expandable questions
   - Smooth height animation
   - One or multiple open at a time

4. **Service Page Template**
   - Hero with service-specific image
   - Service description
   - Sub-services grid
   - Pricing tiers
   - Portfolio samples (filtered)
   - FAQ section
   - Related services
   - CTA section

5. **Photography Page** (`app/photography/page.tsx`)
   - Implement template with photo content
   - Sub-services: Wedding, Events, Portraits, Interiors

6. **Video Production Page** (`app/video-production/page.tsx`)
   - Implement template with video content
   - Sub-services: Commercials, Music Videos, Documentaries, Corporate

7. **Pricing Page** (`app/pricing/page.tsx`)
   - Side-by-side comparison
   - Toggle between Photo/Video
   - Custom quote CTA

**Deliverables:**
- [ ] Both service pages complete
- [ ] Pricing tiers display correctly
- [ ] FAQs expand/collapse smoothly
- [ ] Links between pages work
- [ ] Git commit: "feat: implement service and pricing pages"

---

### Session 6: Contact & About (4 hours)

**Goal:** Contact form system and About/Team page

**Tasks:**

1. **Form Validation** (`lib/validations.ts`)
   - Zod schemas for contact form
   - Custom error messages
   - Phone number validation

2. **Contact Form** (`components/features/ContactForm.tsx`)
   - 3-step multi-step form
   - Progress indicator
   - Field validation per step
   - Success state
   - Error handling

3. **Booking Calendar** (`components/features/BookingCalendar.tsx`)
   - Date picker
   - Time slot selection
   - Disabled dates for booked days

4. **Contact Page** (`app/contact/page.tsx`)
   - Split layout: form + info
   - Contact information cards
   - Google Maps embed
   - Social links

5. **API Route** (`app/api/contact/route.ts`)
   - Form submission handler
   - Email sending (placeholder for AWS SES)
   - Rate limiting consideration

6. **Team Data** (`data/team.ts`)
   - Team member profiles
   - Photos, bios, specialties

7. **About Page** (`app/about/page.tsx`)
   - Company story section
   - Team member cards
   - Awards and recognition
   - Values/philosophy
   - Call to action

8. **Error Pages**
   - `not-found.tsx` - Custom 404
   - `error.tsx` - Error boundary

**Deliverables:**
- [ ] Multi-step form works end-to-end
- [ ] Form validation shows clear errors
- [ ] Contact info is accurate
- [ ] About page tells compelling story
- [ ] 404 and error pages styled
- [ ] Git commit: "feat: implement contact and about pages"

---

### Session 7: Polish & SEO (3 hours)

**Goal:** Animations, meta tags, performance optimization

**Tasks:**

1. **Page Transitions**
   - Fade transitions between pages
   - Loading states during navigation

2. **Scroll Animations**
   - Fade-in-up on scroll for sections
   - Staggered animations for grids
   - Parallax effects for hero

3. **Micro-interactions**
   - Button hover effects
   - Card hover lift
   - Input focus states
   - Link underline animations

4. **SEO Meta Tags**
   - Per-page title and description
   - Open Graph tags for social
   - Twitter Card tags
   - Canonical URLs

5. **Structured Data**
   - Organization schema
   - LocalBusiness schema
   - Service schema
   - BreadcrumbList schema

6. **Technical SEO**
   - Generate sitemap.xml
   - Configure robots.txt
   - Add favicon and app icons
   - Verify Open Graph image

7. **Performance Optimization**
   - Audit with Lighthouse
   - Optimize images (already WebP)
   - Lazy load below-fold images
   - Preload critical fonts
   - Minimize JavaScript

8. **Accessibility Audit**
   - Check color contrast
   - Verify ARIA labels
   - Test keyboard navigation
   - Add skip navigation link

**Deliverables:**
- [ ] Smooth animations throughout
- [ ] Lighthouse Performance 95+
- [ ] Lighthouse Accessibility 95+
- [ ] Lighthouse SEO 100
- [ ] All meta tags in place
- [ ] Git commit: "feat: add animations, SEO, and performance optimizations"

---

### Session 8: AWS Deployment (4 hours)

**Goal:** Deploy to AWS with CI/CD pipeline

**Tasks:**

1. **Prepare for Static Export**
   ```javascript
   // next.config.js
   module.exports = {
     output: 'export',
     images: { unoptimized: true },
     trailingSlash: true,
   }
   ```

2. **Create S3 Bucket**
   - Bucket name: `mikai-novak-studio`
   - Enable static website hosting
   - Configure index.html and error.html
   - Set bucket policy for public read

3. **Create CloudFront Distribution**
   - Origin: S3 bucket
   - Enable HTTPS (ACM certificate)
   - Configure custom error pages (404 → /404.html)
   - Enable compression (gzip, brotli)
   - Set cache behaviors

4. **Configure Route 53 (if custom domain)**
   - Create hosted zone
   - Add A record (alias to CloudFront)
   - Add AAAA record for IPv6

5. **Request ACM Certificate**
   - Request certificate for domain
   - Validate via DNS
   - Attach to CloudFront

6. **Set Up IAM User for CI/CD**
   - Create user: `github-actions-deploy`
   - Attach policy for S3 and CloudFront
   - Generate access keys

7. **Create GitHub Actions Workflow**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to AWS
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - uses: aws-actions/configure-aws-credentials@v4
           with:
             aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
             aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
             aws-region: eu-central-1
         - run: aws s3 sync out/ s3://mikai-novak-studio --delete
         - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
   ```

8. **Configure GitHub Secrets**
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `CLOUDFRONT_DISTRIBUTION_ID`

9. **Set Up CloudWatch Billing Alarms**
   - Alarm at $5 threshold
   - Alarm at $10 threshold
   - Email notifications

10. **Test Deployment**
    - Push to main branch
    - Verify workflow runs
    - Check live site
    - Test all pages

11. **Document Deployment**
    - Update README with deployment info
    - Add architecture diagram
    - Document rollback procedure

**Deliverables:**
- [ ] Site live on CloudFront URL
- [ ] HTTPS working
- [ ] CI/CD pipeline functional
- [ ] Billing alarms configured
- [ ] Documentation complete
- [ ] Git commit: "feat: configure AWS deployment with CI/CD"

---

## 8. Testing Strategy

### Unit Tests

```typescript
// __tests__/utils.test.ts
import { cn } from '@/lib/utils';

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
  });

  it('merges Tailwind classes correctly', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6');
  });
});
```

### Component Tests

```typescript
// __tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<Button isLoading>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('calls onClick handler', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Integration Tests

```typescript
// __tests__/ContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '@/components/features/ContactForm';

describe('ContactForm', () => {
  it('validates required fields', async () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByText('Continue'));

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });
  });

  it('progresses through steps', async () => {
    render(<ContactForm />);

    // Fill step 1
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '+381691234567' } });

    fireEvent.click(screen.getByText('Continue'));

    await waitFor(() => {
      expect(screen.getByText('Project Details')).toBeInTheDocument();
    });
  });
});
```

### Manual Testing Checklist

**All Pages:**
- [ ] Page loads without console errors
- [ ] All links work correctly
- [ ] Images load and display
- [ ] Responsive on mobile (320px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1280px)
- [ ] Keyboard navigation works
- [ ] Focus indicators visible

**Homepage:**
- [ ] Hero video/image displays
- [ ] All CTAs are clickable
- [ ] Testimonial slider navigates
- [ ] Stats animate on scroll

**Portfolio:**
- [ ] Filters update gallery
- [ ] Lightbox opens/closes
- [ ] Before/after slider drags
- [ ] Video embeds play

**Contact:**
- [ ] Form validates each step
- [ ] Error messages display
- [ ] Success message shows
- [ ] Back button works

**Cross-Browser:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## 9. AWS Deployment Guide

### Cost Estimates

**Free Tier (First 12 months):**
| Service | Free Tier Limit | Expected Usage | Cost |
|---------|----------------|----------------|------|
| S3 | 5GB storage, 20K GET, 2K PUT | ~500MB, 5K requests | $0 |
| CloudFront | 1TB transfer, 10M requests | ~10GB, 50K requests | $0 |
| Route 53 | N/A | 1 hosted zone | ~$0.50/month |
| ACM | Free | 1 certificate | $0 |

**Post-Free Tier:**
| Service | Estimated Cost |
|---------|---------------|
| S3 | ~$0.50/month |
| CloudFront | ~$1-3/month |
| Route 53 | ~$0.50/month |
| **Total** | **~$2-4/month** |

### S3 Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::mikai-novak-studio/*"
    }
  ]
}
```

### CloudFront Configuration

```yaml
Origins:
  - DomainName: mikai-novak-studio.s3.eu-central-1.amazonaws.com
    S3OriginConfig:
      OriginAccessIdentity: ""

DefaultCacheBehavior:
  ViewerProtocolPolicy: redirect-to-https
  CachePolicyId: 658327ea-f89d-4fab-a63d-7e88639e58f6  # Managed-CachingOptimized
  Compress: true

CustomErrorResponses:
  - ErrorCode: 404
    ResponseCode: 404
    ResponsePagePath: /404.html
    ErrorCachingMinTTL: 300
  - ErrorCode: 403
    ResponseCode: 404
    ResponsePagePath: /404.html
    ErrorCachingMinTTL: 300

HttpVersion: http2and3
PriceClass: PriceClass_100  # US, Canada, Europe only (cheapest)
```

### IAM Policy for GitHub Actions

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::mikai-novak-studio",
        "arn:aws:s3:::mikai-novak-studio/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID"
    }
  ]
}
```

### Rollback Procedure

1. **Identify Issue:** Check CloudWatch logs, user reports
2. **Find Previous Commit:** `git log --oneline -10`
3. **Revert Locally:** `git revert HEAD`
4. **Push Revert:** `git push origin main`
5. **Verify Deployment:** GitHub Actions will auto-deploy
6. **Invalidate Cache:** Workflow includes cache invalidation
7. **Verify Fix:** Test production site

**Manual Rollback (if CI/CD fails):**
```bash
# Build previous version locally
git checkout <previous-commit>
npm run build

# Upload to S3
aws s3 sync out/ s3://mikai-novak-studio --delete

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id XXXXX --paths "/*"
```

---

## 10. SEO & Marketing

### Meta Tags Template

```typescript
// src/lib/seo.ts
import type { Metadata } from 'next';

const siteConfig = {
  name: 'Mikai Novak Studio',
  description: 'Professional photography and video production in Belgrade',
  url: 'https://mikainovak.com',
  ogImage: '/og-image.jpg',
  twitter: '@mikainovak',
};

export function generateMetadata(page: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${page.path}`;
  const image = page.image || siteConfig.ogImage;

  return {
    title: `${page.title} | ${siteConfig.name}`,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [image],
      creator: siteConfig.twitter,
    },
  };
}
```

### Target Keywords

**Photography (Serbian):**
- fotografija Beograd
- venčano fotografisanje
- fotografisanje događaja Beograd
- portretna fotografija
- fotografija enterijera

**Video Production (Serbian):**
- video produkcija Beograd
- snimanje reklama
- muzički spotovi
- korporativni video

**English:**
- photography Belgrade
- wedding photographer Serbia
- video production Belgrade
- commercial video Serbia

### Structured Data

```typescript
// src/lib/structured-data.ts

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://mikainovak.com/#organization',
  name: 'Mikai Novak Studio',
  image: 'https://mikainovak.com/og-image.jpg',
  description: 'Professional photography and video production services',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jurija Gagarina 257',
    addressLocality: 'Belgrade',
    postalCode: '11000',
    addressCountry: 'RS',
  },
  telephone: '+381-69-545-3366',
  email: 'contact@mikainovak.com',
  url: 'https://mikainovak.com',
  priceRange: '$$',
  openingHours: 'Mo-Su 09:00-21:00',
  sameAs: [
    'https://instagram.com/mikainovak',
    'https://facebook.com/mikainovak',
    'https://vimeo.com/mikainovak',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
  },
};
```

---

## 11. Troubleshooting Guide

### Issue: Build Fails with TypeScript Errors

**Symptoms:** `npm run build` fails with type errors

**Cause:** Missing or incorrect type definitions

**Solution:**
```bash
# Check for type errors
npx tsc --noEmit

# Fix specific errors shown
# Common fixes:
# - Add missing types to interfaces
# - Use 'as' for type assertions
# - Add null checks with ?. or ??
```

### Issue: Images Not Loading in Production

**Symptoms:** Images show on localhost but not on CloudFront

**Cause:** Next.js Image optimization not compatible with static export

**Solution:**
```javascript
// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,  // Required for static export
  },
}
```

### Issue: 404 on Page Refresh

**Symptoms:** Direct URL access or refresh shows 404

**Cause:** CloudFront not configured for SPA routing

**Solution:**
1. Create custom error responses in CloudFront
2. Set 403 and 404 errors to return 200 with /index.html
3. Or use `trailingSlash: true` in next.config.js

### Issue: Slow Initial Load

**Symptoms:** Lighthouse performance below 90

**Common Causes & Solutions:**

1. **Large images:**
   ```bash
   # Convert to WebP
   npx sharp-cli resize ./public/images/*.jpg --format webp
   ```

2. **Too much JavaScript:**
   ```javascript
   // Use dynamic imports
   const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
     loading: () => <Skeleton />,
   });
   ```

3. **Unoptimized fonts:**
   ```javascript
   // Use next/font
   import { Inter } from 'next/font/google';
   const inter = Inter({ subsets: ['latin'], display: 'swap' });
   ```

### Issue: Contact Form Submissions Failing

**Symptoms:** Form shows error after submit

**Debugging Steps:**
1. Check browser Network tab for API response
2. Check server logs (CloudWatch if using Lambda)
3. Verify AWS SES is properly configured
4. Check SES sending limits and verified emails

### Issue: Mobile Menu Not Closing

**Symptoms:** Menu stays open after clicking link

**Solution:**
```typescript
// In MobileMenu.tsx
const pathname = usePathname();

useEffect(() => {
  setIsOpen(false);
}, [pathname]);
```

---

## 12. Quality Assurance Checklist

### Performance

- [ ] Lighthouse Performance: 95+
- [ ] First Contentful Paint (FCP): < 1.8s
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] Time to Interactive (TTI): < 3.8s
- [ ] Total blocking time: < 200ms
- [ ] Images lazy loaded below fold
- [ ] Fonts preloaded
- [ ] JavaScript minimized

### Accessibility

- [ ] Lighthouse Accessibility: 95+
- [ ] All images have alt text
- [ ] Color contrast ratio 4.5:1+
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Skip to content link
- [ ] ARIA labels on interactive elements
- [ ] Form labels associated with inputs

### SEO

- [ ] Lighthouse SEO: 100
- [ ] Unique title tags on all pages
- [ ] Meta descriptions 150-160 chars
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Canonical URLs set
- [ ] Structured data valid

### Functionality

- [ ] All pages load without errors
- [ ] All links work (no 404s)
- [ ] Forms validate and submit
- [ ] Portfolio filters work
- [ ] Lightbox opens/closes
- [ ] Mobile menu works
- [ ] Contact form sends email

### Cross-Browser

- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)
- [ ] iOS Safari
- [ ] Android Chrome

### Responsive

- [ ] 320px (small mobile)
- [ ] 375px (iPhone)
- [ ] 768px (tablet)
- [ ] 1024px (laptop)
- [ ] 1280px (desktop)
- [ ] 1920px (large desktop)

---

## 13. Session Prompt Line Counts

**Total Guide Length:** ~2,400 lines
**Estimated Total Tokens:** ~36,000 tokens (2,400 lines x 15 avg tokens/line)

### Recommended Session Split

**Session 1: Foundation Setup**
- **Lines to copy:** 1-350
- **Sections:** Overview, Architecture, Design System basics
- **Estimated tokens:** ~5,250 tokens
- **Risk level:** Safe
- **Implementation time:** 4 hours

**Session 2: UI Components**
- **Lines to copy:** 350-650
- **Sections:** Component Specifications (Button, Before/After, etc.)
- **Estimated tokens:** ~4,500 tokens
- **Risk level:** Safe
- **Implementation time:** 4 hours

**Session 3: Homepage**
- **Lines to copy:** 650-900 + reference Session Breakdown
- **Sections:** Session 3 tasks, component patterns
- **Estimated tokens:** ~3,750 tokens
- **Risk level:** Safe
- **Implementation time:** 5 hours

**Session 4: Portfolio System**
- **Lines to copy:** 900-1100 + Portfolio Gallery component spec
- **Sections:** Portfolio types, gallery component, Session 4 tasks
- **Estimated tokens:** ~4,500 tokens
- **Risk level:** Safe
- **Implementation time:** 5 hours

**Session 5: Service Pages**
- **Lines to copy:** 1100-1300
- **Sections:** Service types, Session 5 tasks
- **Estimated tokens:** ~3,000 tokens
- **Risk level:** Safe
- **Implementation time:** 4 hours

**Session 6: Contact & About**
- **Lines to copy:** 1300-1600 + Contact Form component spec
- **Sections:** Contact types, form component, Session 6 tasks
- **Estimated tokens:** ~4,500 tokens
- **Risk level:** Safe
- **Implementation time:** 4 hours

**Session 7: Polish & SEO**
- **Lines to copy:** 1600-1900
- **Sections:** SEO & Marketing, Session 7 tasks
- **Estimated tokens:** ~4,500 tokens
- **Risk level:** Safe
- **Implementation time:** 3 hours

**Session 8: AWS Deployment**
- **Lines to copy:** 1900-2400
- **Sections:** AWS Deployment Guide, Troubleshooting, QA Checklist
- **Estimated tokens:** ~7,500 tokens
- **Risk level:** Safe
- **Implementation time:** 4 hours

### How to Use These Line Counts

1. Open this guide in your editor
2. Copy the specified line range for your current session
3. Paste into Claude Code CLI or Projects console
4. Claude will implement that phase
5. Test deliverables before moving to next session
6. Commit your work with descriptive message

### Alternative: Reference Method

Instead of copying lines, reference the guide:

```
Read implementation guide at: /home/novak/projects/mikanovakv2/photo-video-platform-implementation-v2.md

Implement Session [N]: [Session Name]

Focus on lines [X]-[Y] and the corresponding tasks.
```

This method saves tokens as Claude reads the file directly.

---

## Document Information

**Version:** 2.0
**Last Updated:** 2025-11-22
**Author:** Web App Implementation Guide Expert Agent

**Changelog:**
- v2.0: Complete rewrite with AWS-first deployment, session-aware structure, detailed component specs, testing strategy, troubleshooting guide, line count guidance

---

*This guide is designed to enable any Claude Code session to build a production-quality photography and video production platform by following clear, unambiguous instructions.*
