# Mikai Novak Creative Studio - Implementation Guide

A comprehensive implementation guide for building a professional photography and video production platform with AWS deployment.

## About This Guide

This guide is designed to be used with [Claude Code](https://claude.ai/code) (or Claude Projects) to build a production-ready website. The guide is **2,500+ lines** and contains everything needed to implement the platform from scratch.

## Important: How to Use This Guide

**Do NOT paste the entire guide into Claude at once.** This will overwhelm the context window and lead to incomplete or poor-quality implementations.

### Recommended Approach

The guide is split into **8 sessions**, each designed to fit comfortably within Claude's context limits:

| Session | Focus | Lines | Est. Tokens |
|---------|-------|-------|-------------|
| 1 | Foundation Setup | 1-350 | ~5,250 |
| 2 | UI Components | 350-650 | ~4,500 |
| 3 | Homepage | 650-900 | ~3,750 |
| 4 | Portfolio System | 900-1100 | ~4,500 |
| 5 | Service Pages | 1100-1300 | ~3,000 |
| 6 | Contact & About | 1300-1600 | ~4,500 |
| 7 | Polish & SEO | 1600-1900 | ~4,500 |
| 8 | AWS Deployment | 1900-2400 | ~7,500 |

### Option 1: Copy Line Ranges (Recommended)

1. Open `photo-video-platform-implementation-v2.md`
2. Copy only the lines for your current session
3. Paste into Claude Code CLI or claude.ai
4. Complete that session's tasks
5. Test and commit your work
6. Move to next session

### Option 2: Reference Method

Instead of copying, tell Claude to read specific sections:

```
Read the implementation guide at: /path/to/photo-video-platform-implementation-v2.md

Implement Session 1: Foundation Setup (lines 1-350)

Tasks:
- Initialize Next.js project
- Configure Tailwind
- Create layout components
- Test dev server
```

This saves tokens since Claude reads the file directly.

### Option 3: Use with Claude Projects

1. Upload `photo-video-platform-implementation-v2.md` to a Claude Project
2. In project instructions, specify: "Reference the implementation guide for building tasks"
3. Ask Claude to implement one session at a time
4. Example prompt: "Let's work on Session 3: Homepage. Follow the guide's Session 3 tasks."

## What's Included

- **Technical Architecture** - Folder structure, tech stack decisions
- **Design System** - Colors, typography, spacing, component patterns
- **Data Models** - TypeScript types for Portfolio, Services, Contact
- **Component Specifications** - Full code for Button, BeforeAfterSlider, PortfolioGallery, ContactForm
- **8 Detailed Sessions** - Step-by-step tasks with deliverables
- **Testing Strategy** - Unit, integration, and manual testing
- **AWS Deployment** - S3, CloudFront, CI/CD with GitHub Actions
- **Troubleshooting Guide** - Common issues and solutions
- **Quality Checklist** - Performance, accessibility, SEO verification

## Tech Stack

- **Frontend:** Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Forms:** React Hook Form + Zod
- **Deployment:** AWS S3 + CloudFront
- **CI/CD:** GitHub Actions
- **Cost:** $0-5/month (AWS Free Tier)

## Estimated Timeline

- **Total:** 33-37 hours across 8 sessions
- **Per Session:** 3-5 hours each

## Prerequisites

- Node.js 20+
- AWS Account (Free Tier)
- GitHub Account
- Basic familiarity with React/Next.js

## Quick Start

```bash
# Session 1: Initialize project
npx create-next-app@latest mikai-novak-studio --typescript --tailwind --app --eslint

# Install dependencies
cd mikai-novak-studio
npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge
npm install react-hook-form @hookform/resolvers zod
```

Then follow Session 1 tasks in the guide.

## Tips for Best Results

1. **One session at a time** - Don't rush through multiple sessions
2. **Test before moving on** - Each session has deliverables to verify
3. **Commit after each session** - Maintains clean git history
4. **Read the troubleshooting section** - If something breaks, solutions are documented
5. **Use the quality checklist** - Before deployment, run through all checks

## License

MIT

---

*Built with the Web App Implementation Guide Expert Agent framework*
