# IEEE TXST Website - File Structure Documentation

This document explains the organization and architecture of the IEEE Texas State University website.

## 🏗️ Project Architecture

This website is built with **Next.js 15** (React framework) and uses a **content-driven architecture** that separates code from content, making it easy for non-technical users to update the website.

## 📁 Complete File Structure

```
website/
├── public/                          # Static assets (images, files)
│   ├── favicon.ico                  # Browser tab icon
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── site.webmanifest             # PWA manifest
│   └── images/                      # All website images
│       ├── README.md                # Image usage guide
│       ├── branding/                # Logos and icons
│       │   ├── ieee-logo.png
│       │   ├── ieee-txst-logo.jpg
│       │   ├── ieee-txst-rectangle-logo.png
│       │   ├── computersociety-logo.jpg
│       │   ├── hkn-logo.png
│       │   ├── ras-logo.jpg
│       │   └── ...                  # Other brand assets and SVGs
│       ├── events/                  # Event posters and photos
│       ├── gallery/                 # General photos
│       │   ├── hkn/                 # HKN chapter photos
│       │   ├── ras/                 # Robotics & Automation Society photos
│       │   └── ...                  # General IEEE photos
│       └── team/                    # Officer headshots
│           ├── PLACE_OFFICER_PHOTOS_HERE.md
│           ├── mainbranch/          # Main IEEE branch officers
│           ├── hkn/                 # HKN chapter officers
│           └── ras/                 # RAS chapter officers
│
├── src/                             # Source code
│   ├── app/                         # Pages (Next.js App Router)
│   │   ├── layout.tsx               # Root layout (header, footer, metadata)
│   │   ├── page.tsx                 # Homepage
│   │   ├── globals.css              # Global styles
│   │   ├── robots.ts                # Robots.txt generation
│   │   ├── sitemap.ts               # Sitemap generation
│   │   ├── events/
│   │   │   └── page.tsx             # Events page
│   │   ├── membership/
│   │   │   └── page.tsx             # Membership page
│   │   ├── officers/
│   │   │   └── page.tsx             # Officers page
│   │   └── committees/
│   │       ├── page.tsx             # Committees overview page
│   │       └── societies/
│   │           ├── computersoc/
│   │           │   └── page.tsx     # Computer Society page
│   │           ├── hkn/
│   │           │   └── page.tsx     # Eta Kappa Nu (HKN) page
│   │           └── robotics/
│   │               └── page.tsx     # Robotics & Automation Society page
│   │
│   ├── components/                  # Reusable UI components
│   │   ├── ui/                      # Generic UI elements
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── GoogleCalendarEmbed.tsx
│   │   │   ├── Icon.tsx
│   │   │   ├── ImageCarousel.tsx
│   │   │   ├── ImageCarouselReverse.tsx
│   │   │   ├── ImageSlideshow.tsx
│   │   │   ├── OfficerCard.tsx
│   │   │   ├── Section.tsx
│   │   │   └── StatsCounter.tsx
│   │   ├── layout/                  # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/                    # Homepage-specific components
│   │   │   ├── Hero.tsx
│   │   │   └── SocialLinks.tsx
│   │   ├── events/                  # Event-specific components
│   │   │   ├── EventCard.tsx
│   │   │   └── EventCard3D.tsx
│   │   ├── computersoc/             # Computer Society components
│   │   │   └── SocialLinks.tsx
│   │   ├── hkn/                     # HKN chapter components
│   │   │   └── SocialLinks.tsx
│   │   ├── robotics/                # Robotics Society components
│   │   │   └── SocialLinks.tsx
│   │   └── animations/              # Animation components
│   │       ├── FadeIn.tsx
│   │       └── SlideIn.tsx
│   │
│   └── content/                     # ⭐ EDITABLE CONTENT (non-technical friendly)
│       ├── config.ts                # Site-wide settings
│       ├── README.md                # Content editing guide
│       ├── pages/                   # Page content
│       │   └── home.ts              # Homepage text and content
│       └── data/                    # Structured data
│           ├── events.ts            # Events list
│           ├── sliders.ts           # Image carousel data
│           └── team.ts              # Team members
│
├── package.json                     # Project dependencies
├── tailwind.config.ts               # Styling configuration
├── tsconfig.json                    # TypeScript configuration
└── FILE_STRUCTURE.md                # This file
```

## 🎯 Key Concepts

### 1. Separation of Content and Code
- **Content** lives in `/src/content/` - Easy to edit, no coding required
- **Code** lives in `/src/components/` and `/src/app/` - Handles logic and styling
- **Images** live in `/public/images/` - Organized by category

### 2. Component-Based Architecture
Components are reusable building blocks:
- **UI Components** (`/components/ui/`) - Buttons, cards, carousels, officer cards, etc.
- **Layout Components** (`/components/layout/`) - Navbar, footer
- **Page Components** (`/components/home/`, `/components/events/`, etc.) - Sections specific to pages
- **Society Components** (`/components/computersoc/`, `/components/hkn/`, `/components/robotics/`) - Society-specific components
- **Animation Components** (`/components/animations/`) - FadeIn, SlideIn

### 3. Content Management System
Non-technical users can update the website by editing files in `/src/content/`:
- `config.ts` - Contact info, colors, navigation
- `pages/home.ts` - Homepage content
- `data/events.ts` - Add/edit events
- `data/sliders.ts` - Add/edit image carousel slides
- `data/team.ts` - Add/edit team members

## 👥 For Non-Technical Users

**Want to update the website?**
1. Go to `/src/content/`
2. Read the README.md there
3. Edit the appropriate file
4. Save and the website updates automatically

**Want to add images?**
1. Go to `/public/images/`
2. Read the README.md there
3. Upload to the right folder:
   - `events/` - Event posters and photos
   - `team/mainbranch/` - Main IEEE officer headshots
   - `team/hkn/` - HKN officer headshots
   - `team/ras/` - RAS officer headshots
   - `gallery/` - General IEEE photos
   - `gallery/hkn/` - HKN chapter photos
   - `gallery/ras/` - Robotics Society photos
   - `branding/` - Logos and brand assets

## 👨‍💻 For Developers

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion

### Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check code quality
```

### Adding New Features

**New Page:**
1. Create folder in `/src/app/pagename/`
2. Add `page.tsx` file
3. Create content file in `/src/content/pages/`
4. Update navigation in `config.ts`

**New Component:**
1. Create file in appropriate `/src/components/` subfolder
2. Export the component
3. Import where needed

**New Event:**
1. Edit `/src/content/data/events.ts`
2. Add event image to `/public/images/events/`

**New Officer:**
1. Edit `/src/content/data/team.ts`
2. Add headshot to the appropriate `/public/images/team/` subfolder

## 🎨 Design System

### Colors (IEEE Branding)
- Primary: `#00629B` (IEEE Blue)
- Secondary: `#FFFFFF` (White)
- Accent: `#000000` (Black)
- Highlight: `#00A9E0` (Light Blue)

### Typography
- Headings: Geist Sans (clean, modern)
- Body: Geist Sans
- Code: Geist Mono

### Spacing
- Using Tailwind's spacing scale (4px increments)
- Common: `p-4`, `p-6`, `p-8`, `mb-4`, `mt-6`

## 🚀 Future Enhancements

### Planned Features
- [ ] Event filtering and search
- [ ] Member authentication
- [ ] Admin dashboard
- [ ] Newsletter signup
- [ ] Project showcase section

## 📝 Best Practices

### For Content Updates
✅ Test changes on development server first
✅ Use descriptive filenames for images
✅ Follow naming conventions
✅ Keep content concise and readable

### For Code Changes
✅ Keep components small and focused
✅ Use TypeScript for type safety
✅ Follow existing code patterns
✅ Test on mobile and desktop
✅ Optimize images before uploading

## 🆘 Getting Help

**Non-technical questions:**
- Refer to `/src/content/README.md`
- Contact web administrator

**Technical questions:**
- Check Next.js documentation: https://nextjs.org
- Check Tailwind CSS docs: https://tailwindcss.com
- Contact development team lead

---

**Last Updated:** April 2026
**Maintained by:** IEEE TXST Web Team
