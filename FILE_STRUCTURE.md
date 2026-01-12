# IEEE TXST Website - File Structure Documentation

This document explains the organization and architecture of the IEEE Texas State University website.

## 🏗️ Project Architecture

This website is built with **Next.js 15** (React framework) and uses a **content-driven architecture** that separates code from content, making it easy for non-technical users to update the website.

## 📁 Complete File Structure

```
website/
├── public/                          # Static assets (images, files)
│   └── images/                      # All website images
│       ├── branding/                # Logos and icons
│       ├── events/                  # Event photos
│       ├── team/                    # Team member headshots
│       └── gallery/                 # General photos
│
├── src/                             # Source code
│   ├── app/                         # Pages (Next.js App Router)
│   │   ├── layout.tsx               # Main layout (header, footer)
│   │   ├── page.tsx                 # Homepage
│   │   ├── events/                  # Events page
│   │   ├── membership/              # Membership page (to be created)
│   │   └── about/                   # About page
│   │
│   ├── components/                  # Reusable UI components
│   │   ├── ui/                      # Basic UI elements (buttons, cards)
│   │   ├── layout/                  # Layout components (navbar, footer)
│   │   ├── home/                    # Homepage-specific components
│   │   ├── events/                  # Event-specific components
│   │   └── animations/              # Animation components
│   │
│   └── content/                     # ⭐ EDITABLE CONTENT (non-technical friendly)
│       ├── config.ts                # Site-wide settings
│       ├── pages/                   # Page content
│       │   └── home.ts              # Homepage text and content
│       ├── data/                    # Structured data
│       │   ├── events.ts            # Events list
│       │   └── team.ts              # Team members
│       └── README.md                # Content editing guide
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
- **UI Components** (`/components/ui/`) - Buttons, cards, inputs
- **Layout Components** (`/components/layout/`) - Navbar, footer, page wrappers
- **Page Components** (`/components/home/`, etc.) - Sections specific to pages
- **Animation Components** (`/components/animations/`) - Reusable animations

### 3. Content Management System
Non-technical users can update the website by editing files in `/src/content/`:
- `config.ts` - Contact info, colors, navigation
- `pages/home.ts` - Homepage content
- `data/events.ts` - Add/edit events
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
3. Upload to the right folder (events, team, gallery, branding)

## 👨‍💻 For Developers

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion (to be added)

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
1. Non-technical users: Edit `/src/content/data/events.ts`
2. Add event image to `/public/images/events/`

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
- [ ] Framer Motion animations
- [ ] Event filtering and search
- [ ] Member authentication
- [ ] Admin dashboard
- [ ] Newsletter signup
- [ ] Project showcase section

### Animation Strategy
- Scroll-triggered fade-ins
- Smooth page transitions
- Interactive hover effects
- Parallax hero sections

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

**Last Updated:** January 2026
**Maintained by:** IEEE TXST Web Team
